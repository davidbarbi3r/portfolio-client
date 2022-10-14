import { IArticleFetched } from '../interfaces/article'
import Header from "../components/Header";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { useContext } from "react";
import { styled } from '@stitches/react';
import { colorTheme } from '../styles/colorTheme';
import React from 'react';

interface IArticleProps {
    post: IArticleFetched
}

export default function Article({post}: IArticleProps) {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    const StyledBlog = styled("section", {
        backgroundColor: theme ? colorTheme.dark.green6 : colorTheme.light.green1,
        color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
        minHeight: "100vh"
      });
 
      const StyledArticle = styled("div", {
        paddingTop: '8em',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px"
      })

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
            <h2>
                {post.title}
            </h2>
            
            <p dangerouslySetInnerHTML={{__html: post.body as string}}>

            </p>
        </StyledArticle>
                
    </StyledBlog>
  )
}