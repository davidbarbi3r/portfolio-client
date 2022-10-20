import { styled } from "@stitches/react";
import { useContext, useEffect, useRef } from "react";
import { colorTheme } from "../styles/colorTheme";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import gradientLight from "../assets/gradient_light.svg";
import gradientDark from "../assets/gradient_dark.svg";
import portrait from "../assets/cottonbro.jpg";
import Stack from "./Stack";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface IProps {
  aboutRef: any
}

export default function About({aboutRef}: IProps) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const StyledAbout = styled("section", {
    height: "fit-content",
    backgroundImage: theme ? `url(${gradientDark})` : `url(${gradientLight})`,
    backgroundSize: "cover",
    backgroundPositionY: "revert",
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
  });

  const StyledTitle = styled("h1", {
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    fontSize: "2rem",
    width: "80%",
    "@media(max-width: 800px)": {
      fontSize: "2rem",
    },
  });

  const StyledMainContainer = styled("div", {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    "@media(max-width: 950px)": {
      flexDirection: "column",
      height: "fit-content",
      paddingTop: "5em",
      "& p": {
        fontSize: "0.95rem",
        marginBottom: "2.5em",
      },
    },
  });

  const LeftContainer = styled("div", {
    width: "40%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& p": {
      textAlign: "right",
      width: "80%",
    },
    "@media(max-width: 950px)": {
      width: "fit-content",
      "& p": {
        fontSize: "0.95rem",
      },
    },
  });

  const RightContainer = styled("div", {
    width: "40%",
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: "100%",
      height: "90%",
      objectFit: "cover",
      "&::after": {
        content: "",
        width: "50px",
        height: "50px",
      },
    },
    "@media(max-width: 950px)": {
      width: "90%",
    },
  });
  const aboutLeftRef = useRef(null)
  const aboutTitleRef = useRef(null) 
  const imageRef = useRef(null)

  useEffect(() => {
    const about = aboutLeftRef.current
    const title = aboutTitleRef.current
    gsap.from(about, {x: -300, opacity: 0, duration: 1, scrollTrigger: {
      trigger: about,
      scrub: 1,
      start: "top bottom",
      end: "top center"
    }}) 
    gsap.from(title, {x: -300, opacity: 0, duration: 1, scrollTrigger: {
      trigger: title,
      scrub: 1,
      start: "top bottom",
      end: "top center"
    }}) 
    gsap.from(imageRef.current, {opacity: 0, scale: 0.5, duration: 1, scrollTrigger: {
      trigger: imageRef.current,
      scrub: 1,
      start: "top bottom",
      end: "center center"
    }}) 
  })
  
  return (
    <StyledAbout ref={aboutRef}>
      <StyledMainContainer>
        <LeftContainer>
          <StyledTitle ref={aboutTitleRef}>
            {language === "EN" ? "About me" : "A propos"}
          </StyledTitle>
          <div ref={aboutLeftRef}>
            <p>
              {language === "EN"
                ? "Tech and finance passionate, after having worked for 9 years in financial audit, I decided to evolve and add software development to my skills."
                : "Passionné de tech et de finance depuis toujours et après avoir travaillé 9 ans en tant qu'auditeur financier, j'ai décidé d'évoluer en ajoutant le développement à mes compétences."}
            </p>
            <p>
            {language === "EN"
                ? "I am convinced value creation frequently takes place at the jointure between two areas. That's why I'm curious and always trying to improve myself."
                : "Je suis convaincu que la création de valeur s'effectue très souvent à l'intersection entre deux domaines. C'est pourquoi je suis curieux, j'essaie toujours de m'améliorer."}
            </p>
            <p>
            {language === "EN"
                ? "I'm using my knowledge of processes & needs to develop useful solutions for end users. My goal is to evolve into blockchain development which is a powerful and fast-growing technology."
                : "Fort de ma connaissance des processus et des besoins des entreprises dans le domaine financier, j'utilise mes compétences en développement pour apporter des solutions fiables aux utilisateurs finaux. Mon but est de me spécialiser dans la blockchain qui est une technologie novatrice en pleine évolution qui à toute sa place dans la fiabilisation et le suivi des process."}
            </p>
          </div>
        </LeftContainer>
        <RightContainer ref={imageRef}>
          <img src={portrait} alt="my portrait"></img>
        </RightContainer>
      </StyledMainContainer>
      <Stack />
    </StyledAbout>
  );
}
