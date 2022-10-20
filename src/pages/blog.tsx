import { styled } from "@stitches/react";
import Header from "../components/Header";
import Highlight from "../components/Highlight";
import { Auth, getAuth, signOut } from "firebase/auth";
import { useNavigate, NavigateFunction } from "react-router";
import { useEffect, useState, useContext } from "react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import axios from "axios";
import config from "../config/config";
import IArticle, { IArticleFetched } from "../interfaces/article";
import { colorTheme } from "../styles/colorTheme";

interface IBlogProps {
  posts: IArticleFetched[]
  getPost: (postId: string, navigate: NavigateFunction) => void
}

function Blog({posts, getPost}: IBlogProps) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate()
  
  const StyledBlog = styled("section", {
    backgroundColor: theme ? colorTheme.dark.green6 : colorTheme.light.green1,
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    minHeight: "100vh"
  });

  const StyledArticles = styled("div", {
    padding: "4em 0em",
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

  const displayPosts = posts.map((post) => {
    const date = JSON.stringify(post.date)
    return (
      <div key={post._id} onClick={() => getPost(post._id, navigate)}>
        <img alt={`${post.title} image`} src={post.images} style={{width: "100%", height: "200px", objectFit: "cover"}}></img>
        <h2>{post.title}</h2>
        {post.tags
          && post.tags
              .trim()
              .split(";")
              .filter((tag) => tag !== "")
              .map((tag) => <StyledTag key={Math.random()}>{tag}</StyledTag>)}
        <div style={{display: "flex",}}>
          <p>Auteur: <strong>{post.authorId.name}</strong></p><p style={{paddingLeft: "1em"}}>Date création: <span style={{fontWeight: "bold"}}>{date.slice(1,8)}</span></p>
        </div>
        <p>{post.description}</p>
        <hr />
      </div>
    );
  });

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
      <StyledArticles>
        <br />
        <h1>BLOG PAGE</h1>
        {posts.length ? displayPosts : <div>Sorry my server is down, I can't display any article for the moment.</div>}
      </StyledArticles>
    </StyledBlog>
  );
}

export default Blog;
