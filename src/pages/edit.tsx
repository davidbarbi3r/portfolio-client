import { styled } from "@stitches/react";
import MenuBar from "../components/Menubar";
import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";
import { useNavigate } from "react-router";
import "../styles/editorStyle.scss"
import IArticle from "../interfaces/article";
import { getAuth } from "firebase/auth";
import axios from "axios"
import config from "../config/config";
import { useContext } from "react";
import UserContext from "../hooks/userContext";
import logging from "../config/logging";

const Edit = () => {
  const auth = getAuth()
  const navigate = useNavigate();
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });
  const userContext = useContext(UserContext)
  const {user} = userContext.userState

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
    console.log(user)
    console.log(article)
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
      <h2>EDIT PAGE</h2>
      <h3>La page pour écrire et éditer des articles</h3>
      <button onClick={() => navigate("/")}>Let's go home David</button>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <button onClick={() => saveArticle(createArticle(html? html : ""))}>Save article</button>
    </>
  );
};

export default Edit;
