import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContextProvider, LanguageContextProvider } from "./hooks/Context";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ThemeContextProvider>
       <App/>
      </ThemeContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
