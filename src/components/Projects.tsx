import { styled } from "@stitches/react";

const StyledProject = styled("section", {
    height: "100vh",
    backgroundColor: "LightYellow",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

 
  export default function Projects({}) {
    return (
      <StyledProject>Projects</StyledProject>
    )
  }