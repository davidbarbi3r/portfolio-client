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
    height: "30%"
  });

  const StackSection = styled("div", {
    display: "flex",
    textAlign: "left",
    alignItems: "start",
    justifyContent: "left",
    "& i": {
        fontSize: "3rem",
        padding: "0.1em 0.3em",
        transition: "all 0.2s",
        "&:hover": {
            fontSize: "3.5rem",
        }
    }
  });

  const StackMainSection = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    width: "70%",
    marginLeft: "2em"
  });

  const MainContainer = styled("div", {
    maxWidth: "1200px",
    display: "flex"
  })

  return (
    <StyledStack>
        <MainContainer>
            <div>
                <h1>{language === "EN" ? "My Stack" : "Ma Stack"}</h1>
                <p>{language === "EN" ? "Check out the tech stack I'm currently using, this one will evolve as I progress and learn new things" : "Ci dessous les langages et outils que j'utilise. Cette liste va évoluer en fonction de ce que je découvre et apprend"}<br/>{language === "EN" ? "I'm always open to learn new tech skills!" : "Je suis toujours ouvert à l'apprentissage de nouveaux frameworks / langages!"}</p>
            </div>
            <StackMainSection>
                <StackSection>
                    <h2>{language === "EN" ? "Languages:" : "Langages:"}</h2>
                    <i className="devicon-javascript-plain"></i>
                    <i className="devicon-typescript-plain"></i>
                    <i className="devicon-nodejs-plain"></i>
                </StackSection>
                <StackSection>
                    <h2>Frameworks:</h2>
                    <i className="devicon-react-original-wordmark"></i>
                    <i className="devicon-express-original-wordmark"></i>
                </StackSection>
                <StackSection>
                    <h2>{language === "EN" ? "Tools : " : "Outils : "}</h2>
                    <i className="devicon-git-plain"></i>
                    <i className="devicon-mongodb-plain-wordmark"></i>
                    <i className="devicon-docker-plain-wordmark"></i>
                    <i className="devicon-vscode-plain"></i>
                </StackSection>
            </StackMainSection>
        </MainContainer>
    </StyledStack>
  );
}

export default Stack;
