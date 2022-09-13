import {
  green,
  sage,
  greenDark,
  sageDark,
  blackA,
  whiteA
} from "@radix-ui/colors";

export const colorTheme = {
  light: {
    ...green,
    ...sage,
    ...whiteA
  },
  dark: {
    ...greenDark,
    ...sageDark,
    ...blackA
  },
};
