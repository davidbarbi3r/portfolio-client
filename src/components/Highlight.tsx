import { styled } from "@stitches/react";
import { useContext } from "react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { CallToActionBtn } from "../modals/CallToActionBtn";
import { colorTheme } from "../styles/colorTheme";

export default function Highlight() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const StyledTwoSidesContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1400px",
    width: "100%",
    margin: "0 auto",
    border: "1px solid $green8",
    backgroundColor: theme ? colorTheme.dark.green5 : colorTheme.light.green2,
    maxHeight: "60%",
    height: "60%",
  });

  const StyledTitle = styled("h1", {
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    fontSize: "2.5rem",
  });

  const StyledSubtitle = styled("h4", {
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    fontSize: "1.2rem",
    display: "block",
    textAlign: "center",
    width: "700px",
  });

  return (
    <StyledTwoSidesContainer>
      <StyledTitle>
        {language === "FR" ? "Bonjour, je suis David" : "Hello, I'm David."}
      </StyledTitle>
      <StyledSubtitle>
        <strong>
          {language === "EN"
            ? "Fullstack web developer"
            : "Developpeur Fullstack"}
        </strong>{" "}
        {language === "EN"
          ? "based in Ajaccio, France. I'm currently looking for a job in web developement (front or backend) near Ajaccio or remote."
          : "basé à Ajaccio. Je suis à la recherche d'un poste en alternance en tant que developpeur (front ou backend) près d'Ajaccio ou en télétravail"}
      </StyledSubtitle>
      <CallToActionBtn text="Contact" />
    </StyledTwoSidesContainer>
  );
}
