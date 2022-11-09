import { styled, keyframes } from "@stitches/react";
import Navbar from "./Navbar";
import { ToggleThemeBtn } from "../modals/SwitchTheme";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { useContext, useEffect, useRef, useState } from "react";
import { colorTheme } from "../styles/colorTheme";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

interface IProps {
  scroll: (ref: any) => void;
  homeRef: any;
  aboutRef: any;
  contactRef: any;
  projectRef: any;
}

export default function Header({
  scroll,
  homeRef,
  aboutRef,
  contactRef,
  projectRef,
}: IProps) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);
  const linkRef5 = useRef(null);

  function toggleMenu() {
    setMenu((prev) => !prev);
  }

  useEffect(() => {
    const links = [
      linkRef1.current,
      linkRef2.current,
      linkRef3.current,
      linkRef4.current,
      linkRef5.current,
    ];
    menu
      ? gsap.from(links, {
          opacity: 0,
          x: -window.innerWidth,
          duration: 1,
          stagger: 0.25,
        })
      : "";
  }, [menu]);

  const HeaderMenu = styled("nav", {
    position: "fixed",
    top: "0",
    width: "100%",
    marginTop: "4em",
    paddingTop: "1em",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    zIndex: "2",
    "& li": {
      borderBottom: "#063F3E solid 1px",
      backdropFilter: "blur(5px)",
      backgroundColor: "#c3ddd0a9",
      fontSize: "1rem",
      padding: "0.6em",
      textAlign: "center",
      color: "#063F3E",
      fontWeight: "bold",
      listStyleType: "none",
    },
  });

  const StyledBurger = styled("div", {
    width: "50px",
    height: "30px",
    display: "block",
    marginLeft: "1em",
    top: "-5px",
    left: "20px",
    position: "relative",
    transform: "rotate(0deg)",
    "@media(min-width: 950px)": {
      display: "none",
    },
    "&:hover": {
      cursor: "pointer",
    },
  });

  const StyledBurgerTop = styled("div", {
    position: "absolute",
    top: "0",
    width: "2px",
    height: "25px",
    margin: "0",
    backgroundColor: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
    transform: !menu ? "rotate(90deg)" : "rotate(45deg)",
    display: !menu ? "block" : "none",
  });

  const rotateNeg = keyframes({
    "0%": { transform: "rotate(90deg)" },
    "100%": { transform: "rotate(-45deg)" },
  });

  const rotatePos = keyframes({
    "0%": { transform: "rotate(90deg)" },
    "100%": { transform: "rotate(45deg)" },
  });

  const StyledBurgerMid1 = styled("div", {
    position: "absolute",
    top: "8px",
    width: "2px",
    height: "25px",
    backgroundColor: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
    transform: !menu ? "rotate(90deg)" : "rotate(45deg)",
    animation: menu ? `${rotatePos} 400ms` : "",
  });

  const StyledBurgerMid2 = styled("div", {
    position: "absolute",
    top: "8px",
    width: "2px",
    height: "25px",
    backgroundColor: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
    display: menu ? "block" : "none",
    transform: !menu ? "rotate(90deg)" : "rotate(-45deg)",
    animation: menu ? `${rotateNeg} 400ms` : "",
  });

  const StyledBurgerBot = styled("div", {
    position: "absolute",
    top: "16px",
    width: "2px",
    height: "25px",
    backgroundColor: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
    transform: !menu ? "rotate(90deg)" : "rotate(-45deg)",
    display: !menu ? "block" : "none",
  });

  const Container = styled("div", {
    display: "flex",
    justifyContent: "space-around",
    width: "75%",
    alignItems: "center",
  });

  const Flex = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const StyledHeader = styled("header", {
    position: "fixed",
    top: "0",
    width: "100%",
    display: "flex",
    zIndex: "1",
    justifyContent: "space-around",
    backgroundColor: theme ? colorTheme.dark.green3 : colorTheme.light.green3,
    alignItems: "center",
    height: "5em",
    boxShadow: `0 1px 15px rgba(0,0,0,0.3)`,
    color: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
    borderBottom: "1px solid",
  });

  const StyledTitle = styled("h1", {
    fontSize: "2rem",
    color: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
    cursor: "pointer",
    "@media(max-width: 950px)": {
      fontSize: "1.5rem",
    },
  });

  return (
    <>
      <StyledHeader>
        <Container>
          <StyledTitle>David Barbi3r</StyledTitle>
          <Navbar
            scroll={scroll}
            homeRef={homeRef}
            projectRef={projectRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
          />
          <Flex>
            <ToggleThemeBtn />
            <StyledBurger onClick={toggleMenu}>
              <StyledBurgerTop></StyledBurgerTop>
              <StyledBurgerMid1></StyledBurgerMid1>
              <StyledBurgerMid2></StyledBurgerMid2>
              <StyledBurgerBot></StyledBurgerBot>
            </StyledBurger>
          </Flex>
        </Container>
      </StyledHeader>
      {menu ? (
        <HeaderMenu>
          <li
            ref={linkRef1}
            onClick={() => (homeRef ? scroll(homeRef) : navigate("/"))}
          >
            <a>{language === "FR" ? "Accueil" : "Home"}</a>
          </li>
          <li
            ref={linkRef2}
            onClick={() => (aboutRef ? scroll(aboutRef) : navigate("/"))}
          >
            <a>{language === "FR" ? "A propos" : "About"}</a>
          </li>
          <li
            ref={linkRef3}
            onClick={() => (projectRef ? scroll(projectRef) : navigate("/"))}
          >
            <a>{language === "FR" ? "Projets" : "Projects"}</a>
          </li>
          <li
            ref={linkRef4}
            onClick={() => (contactRef ? scroll(contactRef) : navigate("/"))}
          >
            <a>Contact</a>
          </li>
          <li ref={linkRef5}>
            <a onClick={() => navigate("/blog")}>Blog</a>
          </li>
        </HeaderMenu>
      ) : (
        ""
      )}
    </>
  );
}
