import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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

type Props = {};

export default function App({}: Props) {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [loading, setLoading] = useState(true);
  const [authStage, setAuthStage] = useState<string>(
    "Checking localstorage..."
  );

  useEffect(() => {
    setTimeout(() => {
      CheckLocalStorageForCredentials();
    }, 1000);
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
          setAuthStage('Unable to validate user, logging out...')
          userDispatch({type: "logout", payload: initialUserState})
   
        } else if (user) {
          setAuthStage('User authenticated')
          userDispatch({type: "login", payload: {user, fire_token}});
        }
      })
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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogID" element={<Blog />} />
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
