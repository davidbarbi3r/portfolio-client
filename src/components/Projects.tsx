import { styled } from "@stitches/react";
import { colorTheme } from "../styles/colorTheme";
import { useContext, useState } from "react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { ProjectsArray } from "../data/Projects";
import upForest from "../assets/upForest.jpg"
import Project from "./Project"


 
  export default function Projects() {

    const {theme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)
    const [displayProject, setDisplayProject] = useState(true)
    const [projectSelected, setProjectSelected] = useState(ProjectsArray[0])
    const featured = ProjectsArray.filter((project) => project.featured)[0]
    const toggleProject = (projectId: number) => {
        setProjectSelected(ProjectsArray.filter((item) => item.id === projectId)[0])
        setDisplayProject((prev) => !prev)
        // setDisplayProject(true)
    }

    const StyledProject = styled("section", {
      backgroundColor: theme ? colorTheme.dark.green4 : colorTheme.light.green4,
      backgroundImage: `url(${upForest})`,
      backgroundBlendMode: theme ? "luminosity" : "luminosity",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    });

    const StyledTitle = styled("h1", {
      color: theme ? colorTheme.light.green3 : colorTheme.dark.green1,
      fontSize: "2rem",
      "@media(max-width: 950px)": {
        fontSize: "1.5rem",
        margin: "1em 0.5em",
      },
    });

    const FeaturedProject = styled("div", {
      backgroundImage: `url(${featured.imgFeatured})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "1200px",
      width: "100%",
      margin: "0 1em",
      height: "60vh",
      border: "2px solid black",
      "&:hover, &:focus": {
        opacity: "0.9",
        cursor: "pointer",
      },
      "&:h1": {
        backgroundColor: colorTheme.dark.blackA10,
        border: "2px solid red",
        padding: "5em",
        color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
        zIndex: "1"
      },
      "@media(max-width: 950px)": {
        maxWidth: "700px",
        width: "100%",
        margin: "1em 1em",
        height: "300px",
      },
      "@media(max-width: 632px)": {
        maxWidth: "300px",
        width: "100%",
        margin: "1em 0.5em",
        height: "300px"
      },
    })

    const StyledProjectContainer = styled("div", {
      maxWidth: "1000px",
      width: "100%",
      padding: "0 4em 2em 4em",
      margin: "6em 0",
      backgroundColor: theme ? colorTheme.dark.blackA9 : colorTheme.light.whiteA10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "@media(max-width: 950px)": {
        margin: "6em 1em",
        maxWidth: "700px",
        backgroundColor: "unset",
        padding: "0"
      },
    })

    const StyledTinyCardsContainer = styled("div", {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      "@media(max-width: 950px)": {
        maxWidth: "700px",
        margin: "0 0.5em",
        justifyContent: "space-between",
      },
      "@media(max-width: 632px)": {
        justifyContent: "center",
      }
    })

    const ProjectUnfeatured = ProjectsArray.filter((project) => !project.featured)

    const bestUnfeatured = ProjectUnfeatured.slice(0)

    const ProjectHtml = bestUnfeatured.map((project) => 
      <Project
        name={project.name}
        descriptionEN={project.descriptionEN}
        descriptionFR={project.descriptionFR}
        dateStarted={project.dateStarted}
        github={project.github}
        live={project.live}
        skills={project.skills}
        stack={project.stack}
        featured={project.featured}
        imgSmall={project.imgSmall}
        imgWide={project.imgWide}
        key={project.id}
        id={project.id}
        toggle={toggleProject}
        displayProject={displayProject}
        projectSelected={projectSelected}
      />
    )
  
    return (
      <StyledProject>
        <StyledProjectContainer>
          <StyledTitle>{language === 'EN' ? "Projects" : "Projets"}</StyledTitle>
          <FeaturedProject onClick={() => toggleProject(featured.id)}/>
          <StyledTinyCardsContainer>{ProjectHtml}</StyledTinyCardsContainer>
        </StyledProjectContainer>
      </StyledProject>
    )
  }