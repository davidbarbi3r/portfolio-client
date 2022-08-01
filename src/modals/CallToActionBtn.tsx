import { styled } from "@stitches/react";
import { colorTheme } from "../styles/colorTheme";
import { ThemeContext } from "../hooks/Context";
import { useContext } from "react";

interface ICallToActionBtnProps {
  text: string;
}

export const CallToActionBtn = ({ text }: ICallToActionBtnProps) => {
  const { theme } = useContext(ThemeContext);

  const StyledBtn = styled("button", {
    margin: "1.5em",
    padding: "0.5em 1.5em",
    color: theme ? colorTheme.light.green12 : colorTheme.dark.green12,
    borderRadius: "15px",
    borderColor: theme ? colorTheme.light.green7 : colorTheme.dark.green7,
    backgroundColor: theme ? colorTheme.light.green3 : colorTheme.dark.green3,
    "&:hover &:focus": {
      backgroundColor: theme ? colorTheme.light.green4 : colorTheme.dark.green4,
    },
    "&:active": {
      backgroundColor: theme ? colorTheme.light.green5 : colorTheme.dark.green5,
    },
  });

  return <StyledBtn>{text}</StyledBtn>;
};
