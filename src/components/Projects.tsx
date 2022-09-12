import { styled } from "@stitches/react";
import { colorTheme } from "../styles/colorTheme";
import { useContext, useState } from "react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { ProjectsArray } from "../data/Projects";
import upForest from "../assets/upForest.jpg"
import Project from "./Project"


 
  export default function Projects({}) {

    const {theme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)
    const [displayProject, setDisplayProject] = useState(false)
    const toggleProject = () => {
        setDisplayProject((prev) => !prev)
    }

    const StyledProject = styled("section", {
      backgroundColor: theme ? colorTheme.dark.green4 : colorTheme.light.green4,
      backgroundImage: `url(${upForest})`,
      backgroundBlendMode: "luminosity",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    });

    const StyledTitle = styled("h1", {
      color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
      fontSize: "2rem",
    });

    const FeaturedProject = styled("button", {
      backgroundColor: theme ? colorTheme.dark.green4 : colorTheme.light.green4,
      maxWidth: "1200px",
      "& img": {
        width: "100%",
        objectFit: "cover",
      },
      "&:hover, &:focus": {
        opacity: "0.8",
        cursor: "pointer"
      },
      padding: "0"
    })

    const StyledProjectContainer = styled("div", {
      maxWidth: "1200px",
      padding: "0 4em",
      margin: "1em 0",
      backgroundColor: theme ? colorTheme.dark.green4 : colorTheme.light.green1,
      opacity: "0.7",
      display: "flex",
      flexDirection: "column"
    })

    const StyledTinyCardsContainer = styled("div", {
      display: "flex",
      justifyContent: "space-between",
    })

    const ProjectUnfeatured = ProjectsArray.filter((project) => !project.featured)

    const bestUnfeatured = ProjectUnfeatured.slice(0, 4)

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
      />
    )
  
    const featured = ProjectsArray.filter((project) => project.featured)[0]

    return (
      <StyledProject>
        <StyledProjectContainer>
          <StyledTitle>{language === 'EN' ? "Projects" : "Projets"}</StyledTitle>
          <FeaturedProject>
            <img src={featured.imgWide} alt={featured.name}></img>
          </FeaturedProject>
          <StyledTinyCardsContainer>{ProjectHtml}</StyledTinyCardsContainer>
        </StyledProjectContainer>
      </StyledProject>
    )
  }