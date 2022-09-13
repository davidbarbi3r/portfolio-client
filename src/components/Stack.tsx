import { styled } from "@stitches/react";
import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { colorTheme } from "../styles/colorTheme";

function Stack() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const StyledStack = styled("section", {
    backgroundColor: theme ? colorTheme.dark.green4 : colorTheme.light.green1,
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    "@media(max-width: 950px)": {
      height: "fit-content",
    },
  });

  const StackSection = styled("div", {
    display: "flex",
    justifyContent: "left",
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
    },
  });

  const StackLeftSection = styled("div", {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 1em",
    "@media(max-width: 950px)": {
      width: "90%",
      padding: "0 1em",
      fontSize: "0.95rem",
    },
  });

  const MainContainer = styled("div", {
    maxWidth: "1000px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media(max-width: 950px)": {
      flexDirection: "column",
    },
  });

  return (
    <StyledStack>
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
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-typescript-plain"></i>
            <i className="devicon-nodejs-plain"></i>
          </StackSection>
          <StackSection>
            <h2>Frameworks </h2>
            <i className="devicon-react-original-wordmark"></i>
            <i className="devicon-express-original-wordmark"></i>
          </StackSection>
          <StackSection>
            <h2>{language === "EN" ? "Tools " : "Outils "}</h2>
            <i className="devicon-git-plain"></i>
            <i className="devicon-mongodb-plain-wordmark"></i>
            <i className="devicon-docker-plain-wordmark"></i>
            <i className="devicon-vscode-plain"></i>
          </StackSection>
        </StackRightSection>
      </MainContainer>
    </StyledStack>
  );
}

export default Stack;
