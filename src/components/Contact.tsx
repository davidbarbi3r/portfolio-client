import { styled } from "@stitches/react";
import React, { useState, useRef, useContext } from "react";
import { ThemeContext, LanguageContext } from "../hooks/Context";
import { colorTheme } from "../styles/colorTheme";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  const formData = useRef<HTMLFormElement>(null);

  const StyledContact = styled("section", {
    height: "100vh",
    backgroundColor: theme ? colorTheme.dark.green2 : colorTheme.light.green1,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    borderRadius: "5px",
    fontFamily: "inherit",
    width: "70%",
    "& input[type=submit]": {
      cursor:"pointer",
      backgroundColor: theme ? colorTheme.dark.green9 : colorTheme.light.green9,
      padding: "0.5em 1.5em",
      borderRadius: "5px",
      color: "white",
      "&:hover": {
        backgroundColor: theme ? colorTheme.dark.green10 : colorTheme.light.green10,
      },
     },
    "& input": {
      marginBottom: "16px",
      padding: "0.5em 1em",
      borderRadius: "5px",
    }, 
    "& textarea": {
      margin: "16px 0",
      padding: "0.5em 1em",
      borderRadius: "5px",
      outline: "none",
      border: "1px solid transparent"
    }
  })

  const handleSubmit = (
    e: React.SyntheticEvent & { target: HTMLFormElement }
  ) => {
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
    <StyledContact>
      <StyledTitle>Contact</StyledTitle>
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
    </StyledContact>
  );
}
