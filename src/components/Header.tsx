import { styled } from "@stitches/react";
import Navbar from "./Navbar";
import { ToggleThemeBtn } from "../modals/SwitchTheme";
import { ThemeContext } from "../hooks/Context";
import { useContext } from "react";
import { colorTheme } from "../styles/colorTheme";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  const Container = styled("div", {
    display: "flex",
    justifyContent: "space-around",
    width: "75%",
    alignItems: "center",
  });

  const StyledHeader = styled("header", {
    position: "fixed",
    top: "0",
    width: "100%",
    display: "flex",
    zIndex: "1",
    justifyContent: "space-around",
    backgroundColor: theme ? colorTheme.dark.green3 : colorTheme.light.green4,
    alignItems: "center",
    height: "5em",
    boxShadow: `0 1px 15px rgba(0,0,0,0.3)`,
    color: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
    borderBottom: "1px solid" 
  });

  const StyledTitle = styled("h1", {
    fontSize: "2rem",
    color: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
    cursor: "pointer",
  });

  return (
    <>
      <StyledHeader>
        <Container>
          <StyledTitle>David Barbi3r</StyledTitle>
          <Navbar />
          <ToggleThemeBtn/>
        </Container>
      </StyledHeader>
    </>
  );
}

