import { IArticleFetched } from "../interfaces/article";
import Header from "../components/Header";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { useContext } from "react";
import { styled } from "@stitches/react";
import { colorTheme } from "../styles/colorTheme";
import React from "react";

interface IArticleProps {
  post: IArticleFetched;
}

export default function Article({ post }: IArticleProps) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const date = JSON.stringify(post.date).slice(1,8)

  const StyledBlog = styled("section", {
    backgroundColor: theme ? colorTheme.dark.green6 : colorTheme.light.green1,
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    minHeight: "100vh",
    margin: "0 auto",
  });

  const StyledArticle = styled("div", {
    backgroundColor: theme ? colorTheme.dark.green6 : colorTheme.light.green1,
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    padding: "6em 0em",
    width: "75%",
    maxWidth: "1000px",
    margin: "0 auto",
    "@media(max-width: 450px)": {
      width: "90%",
    },
  });

  const StyledTag = styled("span", {
    padding: "0.5em",
    margin: "0.5em",
    backgroundColor: colorTheme.light.green7,
    color: colorTheme.light.green12,
    borderRadius: "5px",
    fontSize: "0.8rem",
    display: "inline-block",
  });
  //map((tag) => <StyledTag key={Math.random()}>{tag}</StyledTag>)}

  return (
    <StyledBlog>
      <Header
        scroll={() => {
          ("");
        }}
        homeRef={null}
        aboutRef={null}
        contactRef={null}
        projectRef={null}
      />
      <StyledArticle>
        <h2>{post.title}</h2>
       
        <div style={{display: "flex",}}>
          <p>Auteur: <strong>{post.authorId.name}</strong></p><p style={{paddingLeft: "1em"}}>Date création: <span style={{fontWeight: "bold"}}>{date.slice(0,8)}</span></p>
        </div>

        {post.tags
          && post.tags
              .trim()
              .split(";")
              .filter((tag) => tag !== "")
              .map((tag) => <StyledTag key={Math.random()}>{tag}</StyledTag>)}


        <img
          alt={`${post.title} image`}
          src={post.images}
          style={{ width: "100%", height: "200px", objectFit: "cover", marginTop: "1em" }}
        ></img>
         
        <p dangerouslySetInnerHTML={{ __html: post.body as string }}></p>
      </StyledArticle>
    </StyledBlog>
  );
}
