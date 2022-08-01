import { styled } from "@stitches/react";
import { colorTheme } from "../styles/colorTheme";
import { LanguageContext } from "../hooks/ThemeContext";
import { useContext } from "react";


const StyledNav = styled("nav", {
  fontSize: "1rem",
});

const StyledMenu = styled("ul", {
  listStyle: "none",
  display: "flex",
  "& li": {
    padding: "0.5em",
  },
});

const StyledLink = styled("a", {
  textDecoration: "none",
  color: "inherit",
  cursor:'pointer',
  "&:hover": {
    borderBottom: `1px solid inherit`,
  },
});

export default function Navbar() {
  const {language} = useContext(LanguageContext)

  return (
    <StyledNav>
      <StyledMenu>
        <li>
          <StyledLink>{language === "FR" ? "Accueil" : "Home"}</StyledLink>
        </li>
        <li>
          <StyledLink>{language === "FR" ? "A propos" : "About"}</StyledLink>
        </li>
        <li>
          <StyledLink>{language === "FR" ? "Projets" : "Projects"}</StyledLink>
        </li>
        <li>
          <StyledLink>Contact</StyledLink>
        </li>
      </StyledMenu>
    </StyledNav>
  );
}
