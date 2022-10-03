import { styled } from "@stitches/react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import {Providers} from "../config/firebase";
import {authenticate, signInWithSocialMedia} from "../modules/authServer"
import { useNavigate } from "react-router";
import { LanguageContext, ThemeContext } from "../hooks/Context";
import { ToggleThemeBtn } from "../modals/SwitchTheme";
import { colorTheme } from "../styles/colorTheme";
import UserContext from "../hooks/userContext";
import logging from "../config/logging";
import ErrorText from "../components/ErrorText";

export interface ILoginProps{}

const Login: React.FunctionComponent<ILoginProps> = props => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const userContext = useContext(UserContext)
  const [authenticating, setAuthentication] = useState(false)
  const [error, setError] = useState<string>('');
  const isLogin = window.location.pathname.includes('login');
  const navigate = useNavigate()
 
  const SignInWithGoogle = () => {
    if (error) setError(error)

    setAuthentication(true)

    signInWithSocialMedia(Providers.google)
      .then (async (result) => {
        logging.info(result)

        let user = result.user

        if (user) {
          let uid = user.uid;
          let name = user.displayName //will work because auth with google, if other provider we have to build more complex logic here
        
          if (name) {
            try {
              let fire_token = await user.getIdToken()

              //auth with backend
              authenticate(uid, name, fire_token, (error, _user) => {
                if (error){
                  setError(error)
                  setAuthentication(false)
                } else if (_user) {
                  userContext.userDispatch({type: "login", payload: {user: _user, fire_token }})
                  navigate("/")
                }
              })
            }
            catch(error) {
              setError("Invalid token")
              logging.error(error)
              setAuthentication(false)
            } 
          } 
          else {
            setError("The identity provider doesn't have a name")
            setAuthentication(false)
          }
        } 
        else {
          setError("The identity provider is mission a lot of the necessary information. Please try an other account.")
          setAuthentication(false)
        } 
      })
      .catch(error => {
        setError(error.message)
        setAuthentication(false)
      })
  }


  // // simple auth
  // const signInWithGoogle = async () => {
  //   await signInWithSocialMedia(Providers.google)
  //     .then((result) => console.log(result))
  //     .then(() => navigate("/edit"))
  // }

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
        <StyledGoogleButton onClick={()=> SignInWithGoogle()} disabled={authenticating}>Google</StyledGoogleButton>
        <StyledButton onClick={() => navigate("/")} >{language === "EN" ? "Bring me back home":"Ramène moi à l'accueil"}</StyledButton>
        <ErrorText error = {error}/>
      </StyledSignIn>
      <StyledBackground></StyledBackground>
    </LoginContainer>
  );
}

export default Login
