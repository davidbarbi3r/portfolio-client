import { styled } from "@stitches/react";
import { useContext } from "react";
import { colorTheme } from "../styles/colorTheme";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import gradientLight from "../assets/gradient_light.svg";
import gradientDark from "../assets/gradient_dark.svg";
import portrait from "../assets/cottonbro.jpg";
import Stack from "./Stack";

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

  return (
    <StyledAbout ref={aboutRef}>
      <StyledMainContainer>
        <LeftContainer>
          <StyledTitle>
            {language === "EN" ? "About me" : "A propos"}
          </StyledTitle>
          <p>
            {language === "EN"
              ? "Tech passionate, I decided to retrain into web developpement & blockchain fall 2021. I've worked for 9 years in Financial Audit & Accountancy. Since then I'm 100% dedicated to learning & working on projects to be at my best. "
              : "Passionné de tech, j'ai décidé de me reconvertir dans le développement web & blockchain fin 2021 après avoir travaillé 9 ans dans le domaine de l'Audit / Comptabilité. Depuis j'ai à coeur d'apprendre tous les jours afin de donner le meilleur de moi même pour développer toutes sortes de projets."}
          </p>
        </LeftContainer>
        <RightContainer>
          <img src={portrait} alt="my portrait"></img>
        </RightContainer>
      </StyledMainContainer>
      <Stack />
    </StyledAbout>
  );
}
