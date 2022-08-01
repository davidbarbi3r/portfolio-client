import { styled } from "@stitches/react";
import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../hooks/ThemeContext";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { colorTheme } from "../styles/colorTheme";



const ToggleThemeBtn = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { toggleLanguage, language} = useContext(LanguageContext)
  const icon = theme ? <SunIcon color={colorTheme.light.green1} width="22px" height='22px'/> : <MoonIcon color={colorTheme.dark.green1} width="25px" height="25px"/> 

  const StyledToggleBtn = styled("button", {
    textDecoration: "none",
    background:"none",
    border: "none",
    cursor: "pointer",
    color: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
    "&:hover": {
      fontWeight: "bold"
    }
  });
  
  const StyledToggleContainer = styled("div", {
    display: "flex",
    alignItems: "center"
  })

  return (
    <StyledToggleContainer>
      <StyledToggleBtn onClick={toggleTheme} key="1">
        {icon}
      </StyledToggleBtn>
      <StyledToggleBtn onClick={() => toggleLanguage()} key="2">
        {language === "FR" ? "EN" : "FR"}
      </StyledToggleBtn>
    </StyledToggleContainer>

  );
};

export { ToggleThemeBtn };
