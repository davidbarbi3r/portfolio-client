import { styled } from "@stitches/react";
import Navbar from "./Navbar";
import { green } from "@radix-ui/colors";
import { ToggleThemeBtn } from "../modals/SwitchTheme";
import { ThemeContext } from "../hooks/Context";
import { useContext } from "react";
import { colorTheme } from "../styles/colorTheme";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  const shadow = theme
    ? `0 1px 15px ${colorTheme.dark.green1}`
    : `0 1px 15px ${colorTheme.light.green1}`;

  const Container = styled("div", {
    display: "flex",
    justifyContent: "space-around",
    width: "75%",
    alignItems: "center",
  });

  const StyledHeader = styled("header", {
    width: "100%",
    display: "flex",
    order: "0",
    justifyContent: "space-around",
    backgroundColor: theme ? colorTheme.dark.green3 : colorTheme.light.green4,
    alignItems: "center",
    height: "5em",
    boxShadow: `0 1px 15px rgba(0,0,0,0.3)`,
    color: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
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
          <ToggleThemeBtn></ToggleThemeBtn>
        </Container>
      </StyledHeader>
    </>
  );
}
