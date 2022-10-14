import { useEffect, useReducer, useState } from "react";
import { BrowserRouter, NavigateFunction, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Edit from "./pages/edit";
import Login from "./pages/login";
import "./index.css";
import AuthRoute from "./modules/authRoute";
import NothingHere from "./pages/NothingHere";
import {
  initialUserState,
  UserContextProvider,
  userReducer,
} from "./hooks/userContext";
import { validate } from "./modules/authServer";
import logging from "./config/logging";
import axios, { AxiosResponse } from "axios";
import config from "./config/config";
import { IArticleFetched } from "./interfaces/article";
import Article from "./pages/Article";

export default function App() {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [loading, setLoading] = useState(true);
  const [authStage, setAuthStage] = useState<string>(
    "Checking localstorage..."
  );
  const [posts, setPosts] = useState<any[]>([]);
  const [post, setPost] = useState<IArticleFetched>();

  const getPost = (postId: string, navigate: NavigateFunction) => {
    console.log(postId);
    if (postId) {
      try {
        axios
          .get(`${config.server.url}/posts/get/${postId}`)
          .then((res) => setPost(res.data.post))
          .then(() => navigate(`/blog/${postId}`))

      } catch {
        (error: any) => <h2>{error}</h2>;
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      CheckLocalStorageForCredentials();
    }, 1000);
    axios
      .get(`${config.server.url}/posts/get`)
      .then((res) => setPosts(res.data.posts));
  }, []);

  const CheckLocalStorageForCredentials = () => {
    setAuthStage("Checking credentials...");

    const fire_token = localStorage.getItem("fire_token");

    if (fire_token === null) {
      userDispatch({ type: "logout", payload: initialUserState });
      setAuthStage("No credentials found.");
    } else {
      //validate with the backend
      return validate(fire_token, (error, user) => {
        if (error) {
          logging.error(error);
          setAuthStage("Unable to validate user, logging out...");
          userDispatch({ type: "logout", payload: initialUserState });
        } else if (user) {
          setAuthStage("User authenticated");
          userDispatch({ type: "login", payload: { user, fire_token } });
        }
      });
    }
    setAuthStage("Credentials found, validating");
  };

  const userContextValues = {
    userState,
    userDispatch,
  };

  return (
    <>
      <UserContextProvider value={userContextValues}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/edit"
              element={
                <AuthRoute>
                  <Edit />
                </AuthRoute>
              }
            />
            <Route path="/blog" element={<Blog posts={posts as IArticleFetched[]} getPost={getPost}/>} />
            <Route
              path="/blog/:blogID"
              element={
                <Article post={post as IArticleFetched}/>
              }
            />
            <Route path="/edit" element={<Edit />} />
            <Route path="/edit/:blogID" element={<Edit />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NothingHere />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}
