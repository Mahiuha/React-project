import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2022 josephmahiuha.com</p>
    </div>
  );
}

export default Footer;
