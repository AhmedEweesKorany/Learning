import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 150, y: 20 }, data: { label: '1sadsad' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2dsadsadasd' } },
  { id: '3', position: { x: 200, y: 140 }, data: { label: '2dsadsadasd' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' },

  {id:"el-3",source:"3",target:"1"}
];
 
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' , color:"red" , background:"#04fe49" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}