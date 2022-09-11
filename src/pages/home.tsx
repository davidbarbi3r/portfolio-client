import { styled } from "@stitches/react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Highlight from "../components/Highlight";
import { IPageProps } from "../interfaces/page";
import { initializeApp } from "firebase/app";
import config from "../config/config";

initializeApp(config.firebase)

const StyledHome = styled("section", {
  height: "100vh",
  backgroundColor: "$green1",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Home: React.FunctionComponent<IPageProps> = props => {
  return (
    <div>
      <StyledHome>
        <Header />
        <Highlight />
        <h1>HOME PAGE</h1>
      </StyledHome>
        <About />
        <Projects />
        <Contact />
    </div>
  );
}

export default Home
