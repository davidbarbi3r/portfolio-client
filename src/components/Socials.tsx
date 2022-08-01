import { styled } from "@stitches/react";
import { LinkedInLogoIcon, GitHubLogoIcon, TwitterLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

const StyledSocials = styled("div", {
  display: "flex",
  fontSize: "2rem",
  "& svg": {
    padding: "0.25em",
    margin: "0.25em",
    border: "1px solid rgba(0, 0, 0, 0)",
    borderRadius: "15px",
    width: "2rem",
    height: "2rem",
    "&:hover": {
        border: '1px solid $green12',
        cursor: "pointer"
    },
  },
});

export default function Socials() {
  return (
    <StyledSocials>
      <LinkedInLogoIcon/>
      <GitHubLogoIcon/>
      <TwitterLogoIcon/>
      <InstagramLogoIcon/>
    </StyledSocials>
  );
}
