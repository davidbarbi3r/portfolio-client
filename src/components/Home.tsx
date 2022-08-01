import { styled } from "@stitches/react";
import Header from "./Header";
import Highlight from "./Highlight";

const StyledHome = styled("section", {
  height: "100vh",
  backgroundColor: "$green1",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <Highlight />
    </StyledHome>
  );
}
