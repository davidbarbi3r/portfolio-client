import { styled } from "@stitches/react";
import { useContext, useState } from "react";
import { LanguageContext, ThemeContext } from "../hooks/Context";
import IProject from "../interfaces/project";
import { colorTheme } from "../styles/colorTheme";

interface IProjectProps extends IProject {
    toggle: () => void
}

export default function Project({
  name,
  descriptionEN,
  descriptionFR,
  dateStarted,
  stack,
  github,
  live,
  imgSmall,
  imgWide,
  skills,
  id,
  toggle
}: IProjectProps) {

    const {theme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)

    const StyledCardProject = styled("button", {
        backgroundColor: theme ? colorTheme.dark.green6 : colorTheme.light.green6,
        background: `url(${imgSmall})`,
        backgroundSize: "cover",
        height: "300px",
        width: "300px",
        margin: "1em 0", 
        "&:hover, &:focus": {
            opacity: "0.8",
            cursor: "pointer"
        }
    })

  return <StyledCardProject onClick={() => toggle()}></StyledCardProject>;
}
