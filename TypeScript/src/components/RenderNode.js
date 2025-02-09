import React from "react";
import figmaData from "@/app/data/figmaData.json";
import images from "@/app/data/images.json";

const RenderNode = ({ node }) => {
  if (!node || !node.visible) return null;

  const style = {
    position: "absolute",
    left: node.absoluteBoundingBox?.x || 0,
    top: node.absoluteBoundingBox?.y || 0,
    width: node.absoluteBoundingBox?.width || "auto",
    height: node.absoluteBoundingBox?.height || "auto",
    backgroundColor: node.fills?.[0]?.color
      ? `rgba(${node.fills[0].color.r * 255}, ${node.fills[0].color.g * 255}, ${node.fills[0].color.b * 255}, ${node.fills[0].color.a})`
      : "transparent",
    fontSize: node.style?.fontSize || "inherit",
    fontWeight: node.style?.fontWeight || "normal",
    textAlign: node.style?.textAlignHorizontal || "left",
    color: node.fills?.[0]?.color ? "black" : "inherit",
  };

  switch (node.type) {
    case "FRAME":
    case "GROUP":
      return (
        <div style={style}>
          {node.children?.map((child) => (
            <RenderNode key={child.id} node={child} />
          ))}
        </div>
      );
    case "TEXT":
      return <div style={style}>{node.characters}</div>;
    case "RECTANGLE":
    case "VECTOR":
      return <div style={style}></div>;
    case "IMAGE":
      return <img style={style} src={images[node.id]} alt={node.name} />;
    default:
      return null;
  }
};

const FigmaRenderer = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <RenderNode node={figmaData.document} />
    </div>
  );
};

export default FigmaRenderer;
