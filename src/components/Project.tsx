import { styled } from "@stitches/react";
import { useContext, useState } from "react";
import { LanguageContext, ThemeContext } from "../hooks/Context";
import IProject from "../interfaces/project";
import { colorTheme } from "../styles/colorTheme";

interface IProjectProps extends IProject {
  toggle: (projectId: number) => void;
  displayProject: boolean;
  projectSelected: IProject
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
  toggle,
  displayProject,
  projectSelected
}: IProjectProps) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const StyledCardProject = styled("button", {
    backgroundColor: theme ? colorTheme.dark.green6 : colorTheme.light.green6,
    background: `url(${imgSmall})`,
    backgroundSize: "cover",
    height: "300px",
    width: "300px",
    margin: "1em 0",
    "&:hover, &:focus": {
      opacity: "0.8",
      cursor: "pointer",
    },
  });

  const StyledLargeProject = styled("div", {
    position: "fixed",
    top: "54%",
    left: "50%",
    height: "fit-content",
    maxWidth: "1200px",
    padding: "1em 4em",
    backgroundColor: theme ? colorTheme.dark.green4 : colorTheme.light.green5,
    transform: "translateX(-50%) translateY(-50%)",
    transition: "all 1s",
    border: "1px solid",
    zIndex: "1",
    "& img": {
      maxWidth: "1200px"
    },
    "& h1>span": {
      fontSize: "1rem",
      marginLeft: "1rem"
    },
    "&::after": {
      content:"",
      position: "absolute",
      top: "-20em",
      left: "-20em",
      width: "200%",
      height: "200vh",
      zIndex: "-1",
      background: theme ? colorTheme.dark.blackA8 : colorTheme.light.whiteA6
    }, 
    "& a": {
      color: "inherit",
      textDecoration: "none",
      "& i": {
        fontSize: "2rem",
        margin: "0em 0.2em",
        border: "1px solid rgba(0,0,0,0)",
        padding: "0.1em",
        transition: "all 0.3s",
        "&:hover": {
          border: "1px solid"
        }
      }
    }
  });

  const StyledContainer = styled('div', {
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
  })

  const StyledTag = styled("span", {
    padding: "0.5em",
    margin: "0.5em",
    backgroundColor: colorTheme.light.green7,
    color: colorTheme.light.green12,
    borderRadius: "5px",
    fontSize: "0.8rem",
    display: "inline-block"
  })

  const CloseBtn = styled("div", {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "25px",
    height: "25px",
    cursor: "pointer"
  })

  return displayProject ? (
    <StyledCardProject onClick={() => toggle(id)}></StyledCardProject>
  ) : (
    <>
      <StyledCardProject onClick={() => toggle(id)}></StyledCardProject>
      <StyledLargeProject>
        <CloseBtn onClick={() => toggle(id)}>X</CloseBtn>
        <a href={projectSelected.live} target='blank'><img src={projectSelected.imgWide} alt={projectSelected.name}></img></a>
        <h1>{projectSelected.name} <span>{projectSelected.dateStarted}</span></h1>
        <p>{language === "EN" ? projectSelected.descriptionEN : projectSelected.descriptionFR}</p>
        <StyledContainer>
          {projectSelected.stack.map((tag) => <StyledTag>{tag}</StyledTag>)}
          <a href={projectSelected.github} target='blank'><i className="devicon-github-original"></i></a>
          <a href={projectSelected.live} target='blank'><i className="devicon-chrome-plain"></i></a>
        </StyledContainer>
      </StyledLargeProject>
    </>
  );
}
