import { styled } from "@stitches/react";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { colorTheme } from "../styles/colorTheme";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


function Stack() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const lang1 = useRef(null)
  const lang2 = useRef(null)
  const lang3 = useRef(null)

  const framework1 = useRef(null)
  const framework2 = useRef(null)

  const tool1 = useRef(null)
  const tool2 = useRef(null)
  const tool3 = useRef(null)
  const tool4 = useRef(null)

  useEffect(() => {
    const langs = [lang1.current, lang2.current, lang3.current]
    const frameworks = [framework1.current, framework2.current]
    const tools = [tool1.current, tool2.current, tool3.current, tool4.current]
    const stack = [...langs, ...frameworks, ...tools]

    gsap.fromTo(stack, {opacity: 0, x: 25, duration: 1}, {opacity: 1, x: 0, stagger: 0.25, scrollTrigger: {
      trigger: ".stack",
      scrub: 1,
      start: "top 90%",
      end: "top 60%"
    }})
  }, [])

  const StyledStack = styled("section", {
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    paddingBottom: "4em",
    "@media(max-width: 950px)": {
      height: "fit-content",
      marginTop: "2em",
    },
  });

  const StackSection = styled("div", {
    display: "flex",
    justifyContent: "center",
    "& i": {
      fontSize: "3rem",
      padding: "0.1em 0.3em",
      transition: "all 0.2s",
      "&:hover": {
        fontSize: "3.5rem",
      },
    },
    "@media(max-width: 950px)": {
      justifyContent: "left",
      alignItems: "center",
      marginLeft: "1em",
      "& i": {
        fontSize: "2.2rem",
        padding: "0.1em 0.3em",
        "&:hover": {
          fontSize: "2.2rem",
        },
      },
      "& h2": {
        fontSize: "1.2rem",
        whiteSpace: "no-wrap",
      },
    },
  });

  const StackRightSection = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    width: "50%",
    margin: "0 2em 0 0",
    padding: "0 1em",
    "@media(max-width: 950px)": {
      width: "90%",
      padding: "1em",
      fontSize: "0.95rem",
      alignItems: "center",
      margin: "0"
    },
  });

  const StackLeftSection = styled("div", {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "right",
    padding: "0 1em",
    "& h1": {
      width: "80%",
      textAlign: "left"
    },
    "& p": {
      width: "90%"
    },
    "@media(max-width: 950px)": {
      width: "90%",
      padding: "0 1em",
      fontSize: "0.95rem",
      textAlign: "center",
    },
  });

  const MainContainer = styled("div", {
    display: "flex",
    alignItems: "center",
    width: "80%",
    justifyContent: "space-around",
    "@media(max-width: 950px)": {
      flexDirection: "column",
    },
  });

  return (
    <StyledStack className="stack">
      <MainContainer>
        <StackLeftSection>
          <h1>{language === "EN" ? "My Stack" : "Ma Stack"}</h1>
          <p>
            {language === "EN"
              ? "Check out the tech stack I'm currently using, this one will evolve as I progress and learn new things"
              : "Ci dessous les langages et outils que j'utilise. Cette liste va évoluer en fonction de ce que je découvre et apprend"}
            <br />
            {language === "EN"
              ? "I'm always open to learn new tech skills!"
              : "Je suis toujours ouvert à l'apprentissage de nouveaux frameworks / langages!"}
          </p>
        </StackLeftSection>
        <StackRightSection>
          <StackSection>
            <h2>{language === "EN" ? "Languages " : "Langages "}</h2>
            <i ref={lang1} className="devicon-javascript-plain"></i>
            <i ref={lang2} className="devicon-typescript-plain"></i>
            <i ref={lang3} className="devicon-nodejs-plain"></i>
          </StackSection>
          <StackSection>
            <h2>Frameworks </h2>
            <i ref={framework1} className="devicon-react-original-wordmark"></i>
            <i ref={framework2} className="devicon-express-original-wordmark"></i>
          </StackSection>
          <StackSection>
            <h2>{language === "EN" ? "Tools " : "Outils "}</h2>
            <i ref={tool1} className="devicon-git-plain"></i>
            <i ref={tool2} className="devicon-mongodb-plain-wordmark"></i>
            <i ref={tool3} className="devicon-docker-plain-wordmark"></i>
            <i ref={tool4} className="devicon-vscode-plain"></i>
          </StackSection>
        </StackRightSection>
      </MainContainer>
    </StyledStack>
  );
}

export default Stack;
