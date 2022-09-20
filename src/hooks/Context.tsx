import React, { useState, createContext } from "react";

interface IThemeContext {
  theme: boolean;
  toggleTheme: () => void;
}

interface IUserContext {
  user: boolean;
  toggleUser: () => void;
}

interface ILanguageContext {
  language: string;
  toggleLanguage: () => void;
}

type ContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);
const UserContext = createContext<IUserContext>({} as IUserContext);

const ThemeContextProvider = (props: ContextProviderProps) => {
  const [theme, setTheme] = useState(true);

  function toggleTheme(): void {
    setTheme((prev) => !prev);
    console.log(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const LanguageContextProvider = (props: ContextProviderProps) => {
  const [language, setLanguage] = useState("FR");

  function toggleLanguage(): void {
    setLanguage((prev) => (prev === "FR" ? "EN" : "FR"));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

const UserContextProvider = (props: ContextProviderProps) => {
  const [user, setUser] = useState(false);

  function toggleUser(): void {
    setUser((prev) => !prev);
  }
  
  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export {
  ThemeContextProvider,
  ThemeContext,
  LanguageContextProvider,
  LanguageContext,
  UserContextProvider,
  UserContext,
};
