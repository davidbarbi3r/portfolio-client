import { styled } from "@stitches/react";

const StyledAbout = styled("section", {
    height: "100vh",
    backgroundColor: "RebeccaPurple",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });


export default function About() {
  return (
    <StyledAbout></StyledAbout>
  )
}