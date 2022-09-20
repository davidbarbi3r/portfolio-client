import { styled } from "@stitches/react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LanguageContext, ThemeContext } from "../hooks/Context";
import { ToggleThemeBtn } from "../modals/SwitchTheme";
import { colorTheme } from "../styles/colorTheme";

export interface ILoginProps{}


const Login: React.FunctionComponent<ILoginProps> = props => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const auth = getAuth()
  const navigate = useNavigate()
  const [authing, setAuthing] = useState(false)

  const signInWithGoogle = async () => {
    setAuthing(true)
    signInWithPopup(auth, new GoogleAuthProvider())
    .then(response => {
      console.log(response.user.uid, response.user.displayName)
      navigate("/edit")
    })
    .catch((error) => {
      console.log(error)
      setAuthing(false)
    })
  }

  const LoginContainer = styled("section", {
    height: "100vh",
    display: "flex",
    width: "100%",
    color: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
  })

  const StyledSignIn = styled("div", {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    backgroundColor: theme ? colorTheme.dark.green3 : colorTheme.light.green4,
  })

  const StyledBackground = styled("div", {
    height: "100vh",
    background: "url(https://images.unsplash.com/photo-1595752776689-aebef37b5d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)",
    width: "60%",
    backgroundSize: "cover"
  })

  const StyledGoogleButton = styled("button", {
    padding: "0.5em 1.5em",
    borderRadius:"5px",
    fontSize: "1.05rem",
    fontWeight: "bold",
    backgroundColor: "darkred",
    color: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
    margin: "0.5em"
  })

  const StyledButton = styled("button", {
    padding: "0.5em 1.5em",
    borderRadius:"5px",
    fontSize: "1.05rem",
    fontWeight: "bold",
    backgroundColor: theme ? colorTheme.dark.green8 : colorTheme.light.green8,
    color: theme ? colorTheme.dark.green12 : colorTheme.light.green12,
    margin: "0.5em"
  })

  return (
    <LoginContainer>
      <StyledSignIn>
        <ToggleThemeBtn></ToggleThemeBtn>
        <h1>{language === "FR" ? "Connecte toi :)" : "Hey it seems youre not connected, please Login"}</h1>
        <StyledGoogleButton onClick={()=> signInWithGoogle()} disabled={authing}>Google</StyledGoogleButton>
        <StyledButton onClick={() => navigate("/")}>{language === "EN" ? "Bring me back home":"Ramène moi à l'accueil"}</StyledButton>
      </StyledSignIn>
      <StyledBackground></StyledBackground>
    </LoginContainer>
  );
}

export default Login
