import { styled } from "@stitches/react";
import MenuBar from "../components/Menubar";
import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";
import "../styles/editorStyle.scss"
import IArticle from "../interfaces/article";
import axios from "axios"
import config from "../config/config";
import { useContext } from "react";
import UserContext from "../hooks/userContext";
import logging from "../config/logging";
import Header from "../components/Header";

const Edit = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });
  const userContext = useContext(UserContext)
  const {user} = userContext.userState

  const StyledEdit = styled("div", {
    width: "100%",
    maxWidth:"1200px",
    display: "flex",
    flexDirection: "column",
    padding: "2em",
    marginTop: "5em"
  }) 

  function createArticle (html: string):IArticle{
    const article: IArticle = {
      title: "J'en ai marre des tests",
      body: html,
      authorId: user._id,
      date: new Date()
    }
    return article
  }

  function saveArticle(article: IArticle){
    
    if (article.authorId === config.server.admin){

      axios.post(`${config.server.url}/posts/create`, article)
      .then(function (response) {
        logging.info(response);
      })
      .catch(function (error) {
        logging.error(error);
      });
    } else {
      logging.error("Unauthorized, you're not The creator of this world")
    }
  }

  const html = editor?.getHTML()

  createArticle(html ? html : "")

  return (
    <>
      <Header
        aboutRef={null}
        contactRef={null}
        homeRef={null}
        projectRef={null}
        scroll={() => {""}}/>
      <StyledEdit>
        <h2>EDIT PAGE</h2>
        <h3>La page pour écrire et éditer des articles</h3>
      </StyledEdit>
        <MenuBar editor={editor}  />
        <EditorContent editor={editor}autoFocus={true} style={{maxWidth: "1200px", margin: "1em auto", padding:"1em", border: "1px solid red"}}/>
        <button onClick={() => saveArticle(createArticle(html? html : ""))}>Save article</button>
    </>
  );
};

export default Edit;
