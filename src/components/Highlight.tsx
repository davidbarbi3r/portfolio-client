import { styled } from "@stitches/react";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { colorTheme } from "../styles/colorTheme";
import forest from "../assets/forest.jpg"
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"




export default function Highlight() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const containerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  const StyledTwoSidesContainer = styled("div", {
    position: "relative", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "0 auto",
    border: "1px solid $green8",
    backgroundColor: theme ? colorTheme.dark.green4 : colorTheme.light.green4,
    backgroundImage: `url(${forest})`,
    backgroundPositionY : theme ? "90%" : "20%",
    backgroundBlendMode: "luminosity",
    maxHeight: "100%",
    height: "100%",
    zIndex: "-2",
    "@media(max-width: 800px)": {
      backgroundPositionX : "50%"
    },
    "@media(min-width: 2000px)": {
      backgroundSize: "cover"    
    },
  });

  const StyledTitle = styled("h1", {
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    fontSize: "2.5rem",
    "@media(max-width: 800px)": {
      fontSize: "2rem",
    },
  });

  const StyledSubtitle = styled("h4", {
    position:"relative",
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    fontSize: "1.2rem",
    display: "block",
    maxWidth: "700px",
    textAlign: "center",
    "@media(max-width: 800px)": {
      fontSize: "1rem",
      maxWidth: "600px",
      padding: "0 0.5em"
    },
  });

  useEffect(() => {
    gsap.to(containerRef.current, {duration: 1, y: 150, scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "bottom 100px",
        scrub: 1
      }})
  })


  return (
    <StyledTwoSidesContainer ref={containerRef}>
      <StyledTitle>
        {language === "FR" ? "Bonjour," : "Hello,"}
      </StyledTitle>
      <StyledSubtitle className=".subtitle">
        <strong>
          {language === "EN"
            ? "I'm a passionate web developer"
            : "Je suis un developpeur web passionné"}
        </strong>{" "}
        {language === "EN"
          ? "based in Ajaccio, France. I'm availaible for any project / job in web developement (front or backend) near Ajaccio or remote."
          : "basé à Ajaccio, je suis disponible pour tout projet ou travail en tant que developpeur web près d'Ajaccio ou en télétravail"}
      </StyledSubtitle>
      {/* <CallToActionBtn text="Contact" /> */}
    </StyledTwoSidesContainer>
  );
}
