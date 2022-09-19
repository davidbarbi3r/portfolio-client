import { styled } from "@stitches/react";
import { useRef } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Highlight from "../components/Highlight";
// import { initializeApp } from "firebase/app";
// import config from "../config/config";
import Socials from "../modals/Socials";

// initializeApp(config.firebase);

const StyledHome = styled("section", {
  height: "95vh",
  backgroundColor: "$green1",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media(max-width: 950px)": {
    height: "100vh",
  },
});

function Home() {
  const scrollToRef = (ref: any) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };
  const homeRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const projectRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  return (
    <div ref={homeRef}>
      <Header 
        scroll={scrollToRef}
        homeRef={homeRef}
        projectRef={projectRef}
        aboutRef={aboutRef}
        contactRef={contactRef} 
      />
      <Socials />
      <StyledHome>
        <Highlight />
      </StyledHome>
      <About aboutRef={aboutRef} />
      <Projects projectRef={projectRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default Home;
