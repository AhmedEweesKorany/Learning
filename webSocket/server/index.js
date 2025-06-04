const { Document, NodeIO } = require('@gltf-transform/core');
const { prune } = require('@gltf-transform/functions');
const { KHRONOS_EXTENSIONS, EXTMeshoptCompression } = require('@gltf-transform/extensions');
const fs = require('fs').promises;
const path = require('path');
const { MeshoptDecoder } = require('meshoptimizer');

// File paths (adjust as needed)
const sourcePath = path.resolve(__dirname, 'dw.glb'); // Source .glb with animations
const targetPath = path.resolve(__dirname, 'dd.glb'); // Target .glb to receive animations
const outputPath = path.resolve(__dirname, 'dd_with_animations.glb'); // Output .glb

// Configuration options
const options = {
  copyMissingNodes: true, // Set to true to copy missing nodes from source to target
  attachToRootNode: true  // Set to true to attach copied nodes to the root node if no parent match is found
};

async function main() {
  try {
    console.log('Initializing...');
    
    // Wait for MeshoptDecoder to be ready
    await MeshoptDecoder.ready;
    
    // Initialize NodeIO with required extensions
    const io = new NodeIO()
      .registerExtensions([...KHRONOS_EXTENSIONS, EXTMeshoptCompression])
      .registerDependencies({
        'meshopt.decoder': MeshoptDecoder
      });
    
    // Ensure output directory exists
    await ensureOutputDir();
    
    // Load both source and target files
    console.log(`Loading source GLB: ${sourcePath}`);
    const sourceDoc = await io.read(sourcePath);
    
    console.log(`Loading target GLB: ${targetPath}`);
    const targetDoc = await io.read(targetPath);
    
    // Copy animations from source to target
    await copyAnimations(sourceDoc, targetDoc);
    
    // Save the modified target model
    console.log(`Saving output to: ${outputPath}`);
    await io.write(outputPath, targetDoc);
    
    console.log('Animation copying completed successfully!');
    
    // Validate the output file
    try {
      const outputDoc = await io.read(outputPath);
      const outputAnimations = outputDoc.getRoot().listAnimations();
      console.log(`Output file has ${outputAnimations.length} animations`);
    } catch (error) {
      console.error('Error validating output file:', error);
    }
    
    console.log('Process completed successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

async function copyAnimations(sourceDoc, targetDoc) {
  const sourceAnimations = sourceDoc.getRoot().listAnimations();
  console.log(`Found ${sourceAnimations.length} animations in source`);
  
  if (sourceAnimations.length === 0) {
    console.log('No animations to copy');
    return;
  }
  
  const targetRoot = targetDoc.getRoot();
  const sourceRoot = sourceDoc.getRoot();
  
  // Create a map of node names to target document nodes for easy lookup
  const targetNodeMap = new Map();
  targetRoot.listNodes().forEach(node => {
    const name = node.getName();
    if (name) {
      targetNodeMap.set(name, node);
    }
  });
  
  // If we're copying nodes, build a map of source nodes and their parents
  const sourceNodeMap = new Map(); 
  const sourceNodeParentMap = new Map();
  
  if (options.copyMissingNodes) {
    sourceRoot.listNodes().forEach(node => {
      const name = node.getName();
      if (name) {
        sourceNodeMap.set(name, node);
        
        // Track parent relationships for later
        const parents = node.listParents().filter(p => p.propertyType === 'NODE');
        if (parents.length > 0) {
          sourceNodeParentMap.set(node, parents[0]);
        }
      }
    });
  }
  
  console.log(`Copying ${sourceAnimations.length} animations...`);
  
  for (const sourceAnimation of sourceAnimations) {
    const animName = sourceAnimation.getName() || `Animation_${Date.now()}`;
    console.log(`Processing animation: ${animName}`);
    
    // Create a new animation in the target document
    const targetAnimation = targetDoc.createAnimation(animName);
    
    // Copy all accessors needed for the animation
    const accessorMap = new Map();
    
    // First, handle all animation samplers
    const samplerMap = new Map();
    console.log(`Copying ${sourceAnimation.listSamplers().length} samplers`);
    
    for (const sourceSampler of sourceAnimation.listSamplers()) {
      // Get the input and output accessors
      const sourceInput = sourceSampler.getInput();
      const sourceOutput = sourceSampler.getOutput();
      const interpolation = sourceSampler.getInterpolation();
      
      if (!sourceInput || !sourceOutput) {
        console.warn('Sampler missing input or output, skipping');
        continue;
      }
      
      // Create or get the copied input accessor
      let targetInput;
      if (accessorMap.has(sourceInput)) {
        targetInput = accessorMap.get(sourceInput);
      } else {
        // Clone the input accessor
        targetInput = targetDoc.createAccessor()
          .setType(sourceInput.getType())
          .setArray(new Float32Array(sourceInput.getArray()))
          .setNormalized(sourceInput.getNormalized());
        accessorMap.set(sourceInput, targetInput);
      }
      
      // Create or get the copied output accessor
      let targetOutput;
      if (accessorMap.has(sourceOutput)) {
        targetOutput = accessorMap.get(sourceOutput);
      } else {
        // Clone the output accessor
        targetOutput = targetDoc.createAccessor()
          .setType(sourceOutput.getType())
          .setArray(new Float32Array(sourceOutput.getArray()))
          .setNormalized(sourceOutput.getNormalized());
        accessorMap.set(sourceOutput, targetOutput);
      }
      
      // Create a new sampler in the target animation
      const targetSampler = targetDoc.createAnimationSampler()
        .setInput(targetInput)
        .setOutput(targetOutput);
      
      if (interpolation) {
        targetSampler.setInterpolation(interpolation);
      }
      
      targetAnimation.addSampler(targetSampler);
      samplerMap.set(sourceSampler, targetSampler);
    }
    
    // Now handle all channels, which connect samplers to the target nodes/properties
    console.log(`Copying ${sourceAnimation.listChannels().length} channels`);
    
    // Keep track of nodes we've already copied to avoid duplicates
    const copiedNodeMap = new Map();
    
    for (const sourceChannel of sourceAnimation.listChannels()) {
      const sourceNode = sourceChannel.getTargetNode();
      const targetPath = sourceChannel.getTargetPath();
      const sourceSampler = sourceChannel.getSampler();
      
      if (!sourceNode || !targetPath || !sourceSampler) {
        console.warn('Channel missing node, path, or sampler, skipping');
        continue;
      }
      
      // Find the corresponding sampler in the target document
      const targetSampler = samplerMap.get(sourceSampler);
      if (!targetSampler) {
        console.warn('Could not find target sampler, skipping channel');
        continue;
      }
      
      // Find the corresponding node in the target document
      const nodeName = sourceNode.getName();
      let targetNode;
      
      if (nodeName && targetNodeMap.has(nodeName)) {
        // We found the node directly in the target
        targetNode = targetNodeMap.get(nodeName);
      } else if (options.copyMissingNodes && nodeName) {
        // Node doesn't exist in target, check if we've already copied it
        if (copiedNodeMap.has(nodeName)) {
          targetNode = copiedNodeMap.get(nodeName);
        } else if (sourceNodeMap.has(nodeName)) {
          // Copy the node from source to target
          console.log(`Copying missing node: ${nodeName}`);
          
          // Create a new node in the target document
          targetNode = targetDoc.createNode(nodeName);
          
          // Copy transform properties
          const translation = sourceNode.getTranslation();
          const rotation = sourceNode.getRotation();
          const scale = sourceNode.getScale();
          
          if (translation) targetNode.setTranslation(translation);
          if (rotation) targetNode.setRotation(rotation);
          if (scale) targetNode.setScale(scale);
          
          // Try to find the parent node to attach this to
          let parentAttached = false;
          
          if (sourceNodeParentMap.has(sourceNode)) {
            const sourceParentNode = sourceNodeParentMap.get(sourceNode);
            const parentName = sourceParentNode.getName();
            
            if (parentName) {
              // Look for the parent in already copied nodes or target nodes
              let targetParentNode;
              
              if (copiedNodeMap.has(parentName)) {
                targetParentNode = copiedNodeMap.get(parentName);
              } else if (targetNodeMap.has(parentName)) {
                targetParentNode = targetNodeMap.get(parentName);
              }
              
              if (targetParentNode) {
                // Attach to parent
                targetParentNode.addChild(targetNode);
                parentAttached = true;
              }
            }
          }
          
          // If we couldn't find a parent, attach to the scene root if option enabled
          if (!parentAttached && options.attachToRootNode) {
            // Get the default scene or first scene
            const scene = targetRoot.getDefaultScene() || targetRoot.listScenes()[0];
            if (scene) {
              scene.addChild(targetNode);
            } else {
              // Create a scene if none exists
              const newScene = targetDoc.createScene();
              newScene.addChild(targetNode);
              
              // Make it the default scene if none exists
              if (!targetRoot.getDefaultScene()) {
                targetRoot.setDefaultScene(newScene);
              }
            }
          }
          
          // Add to our maps
          copiedNodeMap.set(nodeName, targetNode);
          targetNodeMap.set(nodeName, targetNode);
        } else {
          console.warn(`Could not find source node: ${nodeName}`);
          continue;
        }
      } else {
        console.warn(`Could not find target node ${nodeName || 'unnamed'}, skipping channel`);
        continue;
      }
      
      // Create a new channel in the target animation
      const targetChannel = targetDoc.createAnimationChannel()
        .setTargetNode(targetNode)
        .setTargetPath(targetPath)
        .setSampler(targetSampler);
      
      targetAnimation.addChannel(targetChannel);
    }
    
    console.log(`Finished copying animation: ${animName}`);
  }
  
  console.log('Optimizing document...');
  await targetDoc.transform(prune());
}

async function ensureOutputDir() {
  const outputDir = path.dirname(outputPath);
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      console.error('Error creating output directory:', error);
      throw error;
    }
  }
}

main();
