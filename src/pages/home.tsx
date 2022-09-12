import { styled } from "@stitches/react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Highlight from "../components/Highlight";
import { initializeApp } from "firebase/app";
import config from "../config/config";
import Stack from "../components/Stack";
import Socials from "../modals/Socials";

initializeApp(config.firebase)

const StyledHome = styled("section", {
  height: "100vh",
  backgroundColor: "$green1",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

function Home () {
  
  return (
    <div>
      <Header />
      <Socials/>
      <StyledHome>
        <Highlight />
        <Stack/>
      </StyledHome>
        <Projects />
        <About />
        <Contact />
    </div>
  );
}

export default Home
