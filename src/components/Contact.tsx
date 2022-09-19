import { styled } from "@stitches/react";
import React, { useState, useRef, useContext } from "react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { colorTheme } from "../styles/colorTheme";
import emailjs from "@emailjs/browser";
import lwaves from "../assets/lwaves_light.svg";
import lwavesDark from "../assets/lwaves_dark.svg";

interface IProps {
  contactRef: any
}

export default function Contact({contactRef}: IProps) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  const formData = useRef<HTMLFormElement>(null);

  const StyledContact = styled("section", {
    backgroundImage: theme ? `url(${lwavesDark})` : `url(${lwaves})`,
    backgroundPositionY: "60%",
    backgroundColor: theme ? colorTheme.dark.green2 : colorTheme.light.green1,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2em 0em 2em 0em",
    "& p": {
      color: theme ? colorTheme.light.green2 : colorTheme.dark.green2,
      maxWidth: "800px",
      marginBottom: "2em",
      width: "80%",
    },
    "& section": {
      color: theme ? colorTheme.light.green2 : colorTheme.dark.green2,
      display: "flex",
      justifyContent: "end",
      "& h4": {
        marginBottom: "0",
        marginTop: "2em"
      }
    },
  });

  const StyledTitle = styled("h1", {
    color: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    fontSize: "2rem",
    "@media(max-width: 800px)": {
      fontSize: "1.5rem",
    },
  });

  const StyledForm = styled("div", {
    backgroundColor: theme ? colorTheme.dark.green5 : colorTheme.light.green5,
    padding: "1.5em 2em",
    marginBottom: "4em",
    borderRadius: "5px",
    fontFamily: "inherit",
    width: "70%",
    maxWidth: "800px",
    "& input[type=submit]": {
      cursor: "pointer",
      backgroundColor: theme ? colorTheme.dark.green9 : colorTheme.light.green9,
      padding: "0.5em 1.5em",
      borderRadius: "5px",
      color: "white",
      "&:hover": {
        backgroundColor: theme
          ? colorTheme.dark.green10
          : colorTheme.light.green10,
      },
    },
    "& input": {
      marginBottom: "16px",
      padding: "0.5em 1em",
      borderRadius: "5px",
      width: "40%",
      outline: "none",
    },
    "& textarea": {
      margin: "16px 0",
      padding: "0.5em 1em",
      borderRadius: "5px",
      outline: "none",
      border: "1px solid transparent",
      width: "80%",
    },
    "& select": {
      borderRadius: "5px",
      padding: "0.5em 1em",
      outline: "none",
      border: "1px solid transparent",
      width: "fit-content",
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (formData.current) {
      emailjs
        .sendForm(
          "service_xzcn56q",
          "template_4l8cmsq",
          e.target,
          "bZpx246MwZzC2EIaH"
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoading(false);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <StyledContact ref={contactRef}>
      <StyledTitle>Contact</StyledTitle>
      <p>
        {language === "EN"
          ? "Don't be shy, let me a message, no matter the reason I'm open minded & I love sharing ideas. This form send me directly an Email."
          : "N'hésite pas à me laisser un message, peu importe la raison de celui-ci j'adore échanger. Alors à toi possible employeur, ami ou futur ami, aventurier de passage, stalker de portfolio je t'écoute. Ce formulaire m'envoie directement un mail."}
      </p>
      <StyledForm>
        <form
          method="post"
          ref={formData}
          onSubmit={(e) => handleSubmit(e)}
          name="google-sheet"
        >
          <div className="form-style">
            <input
              type="text"
              name="contactName"
              placeholder={language === "EN" ? "Your name*" : "Ton nom*"}
              required
            />
          </div>
          <div className="form-style">
            <input type="email" name="email" placeholder="Email*" required />
          </div>
          <select name="type">
            <option value="">
              {language === "EN" ? "--Message type--" : "--Type de message--"}
            </option>
            <option value="travail">
              {language === "EN" ? "Work" : "Travail"}
            </option>
            <option value="projet">
              {language === "EN" ? "Project / idea" : "Projet / idée"}
            </option>
            <option value="autre">
              {language === "EN" ? "Other" : "Autre"}
            </option>
          </select>
          <div className="form-style">
            <textarea
              name="message"
              placeholder={language === "EN" ? "Your message*" : "Ton message*"}
              rows={10}
              wrap="hard"
              required
            />
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value={
                language === "EN"
                  ? loading
                    ? "Loading..."
                    : "Send message"
                  : loading
                  ? "Chargement..."
                  : "Envoyer"
              }
            />
          </div>
        </form>
      </StyledForm>
      <section>
        <h4>{language === "EN" ? "Made with 🤍 by Gnark" : "Fait avec 🖤 par Gnark"}</h4>
      </section>
    </StyledContact>
  );
}
