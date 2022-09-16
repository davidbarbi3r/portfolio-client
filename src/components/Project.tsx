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
    maxWidth: "1000px",
    padding: "1em 4em",
    backgroundColor: theme ? colorTheme.dark.green4 : colorTheme.light.green5,
    transform: "translateX(-50%) translateY(-50%)",
    transition: "all 0.5s",
    border: "1px solid",
    zIndex: "3",
    "& img": {
      maxWidth: "1000px"
    },
    "& h1>span": {
      fontSize: "1rem",
      marginLeft: "1rem"
    },
    "&::after": {
      content:"",
      position: "absolute",
      top: "-100em",
      left: "-50em",
      width: "500%",
      height: "500vh",
      zIndex: "-1",
      background: theme ? colorTheme.dark.blackA8 : colorTheme.light.whiteA6,
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
    },
    "@media(max-width: 1150px)": {
      maxWidth: "800px",
      height: "80vh",
      padding: "1em 2em",
      top: "50%",
      "& img": {
        maxWidth: "800px",
        height: "60vh",
        objectFit: "cover"
      },
    },
    "@media(max-width: 900px)": {
      maxWidth: "500px",
      padding: "1em 1em",
      "& img": {
        maxWidth: "500px"
      },
    },
    "@media(max-width: 600px)": {
      fontSize: "0.9rem",
      maxWidth: "400px",
      padding: "1em 0.5em",
      "& img": {
        maxWidth: "400px",
        height: "50vh",
      },
      "& h1>span": {
        fontSize: "0.9rem",
        marginLeft: "1rem"
      },
      "& span": {
        fontSize: "0.65rem",
      }
    },
    "@media(max-width: 450px)": {
      maxWidth: "300px",
      padding: "1em 0.5em",
      "& img": {
        maxWidth: "300px",
        height: "50vh",
      },
    },
  });

  const StyledContainer = styled('div', {
    display: "flex",
    flexWrap: "wrap",
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
    cursor: "pointer",
    zIndex:"4",
    "& svg": {
      width: "30px",
      height: "30px"
    },
    "&::after": {
      content: "",
      position: "absolute",
      backgroundColor: theme ? colorTheme.dark.blackA10 : colorTheme.light.whiteA10,
      width: "35px",
      height: "35px",
      top: "-2.5px",
      left: "-2.5px",
      borderRadius: "5px",
      zIndex: "-1"
    }
  })

  return displayProject ? (
    <StyledCardProject onClick={() => toggle(id)}></StyledCardProject>
  ) : (
    <>
      <StyledCardProject onClick={() => toggle(id)}></StyledCardProject>
      <StyledLargeProject>
        <CloseBtn onClick={() => toggle(id)}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></CloseBtn>
        <a href={projectSelected.live} target='blank'><img src={projectSelected.imgWide} alt={projectSelected.name}></img></a>
        <h1>{projectSelected.name} <span>{projectSelected.dateStarted}</span></h1>
        <p>{language === "EN" ? projectSelected.descriptionEN : projectSelected.descriptionFR}</p>
        <StyledContainer>
          {projectSelected.stack.map((tag) => <StyledTag key={Math.random()}>{tag}</StyledTag>)}
          <a href={projectSelected.github} target='blank'><i className="devicon-github-original"></i></a>
          <a href={projectSelected.live} target='blank'><i className="devicon-chrome-plain"></i></a>
        </StyledContainer>
      </StyledLargeProject>
    </>
  );
}
