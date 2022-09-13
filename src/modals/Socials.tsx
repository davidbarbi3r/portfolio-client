import { useContext } from "react";
import { styled } from "@stitches/react";
import { colorTheme } from "../styles/colorTheme";
import { ThemeContext } from "../hooks/Context";

export default function Socials() {
  const { theme } = useContext(ThemeContext);

  const SocialsContainer = styled("div", {
    position: "fixed",
    bottom: "8%",
    left: "30px",
    zIndex: "2",
    display: "flex",
    flexDirection: "column",
    "& i": {
        fontSize: "2rem",
        mixBlendMode: "multiply",
        color: theme ? colorTheme.light.green1 : colorTheme.dark.green3,
        margin: "1em 0",
        cursor: "pointer",
        border: "1px hue(-180deg)",
        transition: "all 0.2s",
        "&:hover": {
            fontSize: "2.3rem"
        }
    },
    "& a": {
        textDecoration: "none",
        
    },
    "@media(max-width: 800px)": {
      "& i ": {
        fontSize: "1.5rem",
      },
      right: "30px",
      left: "unset"
    },
  });

  return (
    <SocialsContainer>
      <a href="https://github.com/davidbarbi3r" target="blank"><i className="devicon-github-original"></i></a>
      <a href="https://www.linkedin.com/in/dbarbier/" target="blank"><i className="devicon-linkedin-plain"></i></a>
      <a href="https://twitter.com/gnark_eth" target="blank"><i className="devicon-twitter-original"></i></a>
    </SocialsContainer>
  );
}
