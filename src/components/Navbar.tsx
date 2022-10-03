import { styled } from "@stitches/react";
import { colorTheme } from "../styles/colorTheme";
import { LanguageContext } from "../hooks/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../hooks/Context";

interface IProps {
  scroll: (ref: any) => void
  homeRef: any
  aboutRef: any
  contactRef: any
  projectRef: any
}

export default function Navbar({scroll, homeRef, aboutRef, contactRef, projectRef}: IProps) {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate()
   
  const StyledNav = styled("nav", {
    fontSize: "1rem",
    "@media(max-width: 950px)": {
      fontSize: "0.8rem",
      display: 'none'
    }
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
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    cursor: "pointer",
    "&:hover": {
      borderBottom: `1px solid inherit`,
    },
  });
    
  return (
    <StyledNav>
      <StyledMenu>
        <li onClick={() => homeRef ? scroll(homeRef): navigate("/")}>
          <StyledLink>{language === "FR" ? "Accueil" : "Home"}</StyledLink>
        </li>
        <li onClick={() => aboutRef ? scroll(aboutRef) : navigate("/")}>
          <StyledLink>{language === "FR" ? "A propos" : "About"}</StyledLink>
        </li>
        <li onClick={() => projectRef ? scroll(projectRef) : navigate("/")}>
          <StyledLink>{language === "FR" ? "Projets" : "Projects"}</StyledLink>
        </li>
        <li onClick={() => contactRef ? scroll(contactRef) : navigate("/")}>
          <StyledLink>Contact</StyledLink>
        </li>
        {/* <li>
          <StyledLink onClick={() => navigate("/blog")}>
                Blog 
          </StyledLink>
        </li> */}
      </StyledMenu>
    </StyledNav>
  );
}
