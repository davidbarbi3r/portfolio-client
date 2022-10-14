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
import { EditorView } from 'prosemirror-view'


const Edit = () => {
  const navigate = useNavigate();
  
  const articleTitleEd = useEditor({
    extensions: [StarterKit],
    content: "<H3>Titre de l'article</h3>",
  });

  const articleInfoEd = useEditor({
    extensions: [StarterKit],
    content: "Description de l'article en 2-3 lignes...",
  });

  const articleTagsEd = useEditor({
    extensions: [StarterKit],
    content: "tags de l'article séparés par des => ;",
  });

  const articleBodyEd = useEditor({
    extensions: [StarterKit],
    content: "<p>Corps de l'article</p>",
  });

  const articleImagesEd = useEditor({
    extensions: [StarterKit],
    content: "url des images séparés par des => ;",
  });

  const userContext = useContext(UserContext)
  const {user} = userContext.userState

  const StyledEditPage = {
    width: "100%",
    padding: "1em 5em"
  }

  function createArticle (articleTitle: string | undefined, articleBody: string | undefined, articleDescription: string | undefined):IArticle{
    const article: IArticle = {
      title: articleTitle,
      description: articleDescription,
      tags: articleTags,
      body: articleBody ? articleBody : "",
      images: articleImages,
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


  const articleTitle = articleTitleEd?.getText()
  const articleInfo = articleInfoEd?.getText()
  const articleTags = articleTagsEd?.getText()
  const articleBody = articleBodyEd?.getHTML()
  const articleImages = articleImagesEd?.getText()

  createArticle(articleTitle, articleBody, articleInfo)

  return (
    <div style={StyledEditPage}>
      <h2>EDIT PAGE</h2>
      <h3>La page pour écrire et éditer des articles</h3>
      <button onClick={() => navigate("/")}>Let's go home David</button>
      <EditorContent editor={articleTitleEd}/>
      <EditorContent editor={articleInfoEd}/>
      <EditorContent editor={articleTagsEd}/>
      <MenuBar editor={articleBodyEd} />
      <EditorContent editor={articleBodyEd} />
      <EditorContent editor={articleImagesEd}/>
      <button onClick={() => saveArticle(createArticle(articleTitle, articleBody, articleInfo))}>Save article</button>
    </div>
  );
};

export default Edit;
