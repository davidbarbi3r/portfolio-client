import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContextProvider, LanguageContextProvider } from "./hooks/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Edit from "./pages/edit";
import Login from "./pages/login";
import "./index.css";
import AuthRoute from "./modules/auth";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/blog"
              element={
                <AuthRoute>
                  <Blog />
                </AuthRoute>
              }
            />
            <Route path="/blog/:blogID" element={<Blog />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/edit/:blogID" element={<Edit />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
