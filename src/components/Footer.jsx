import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="textFooter">
        <p>© 2023 Jordi Altés | All rights reserved </p>
      </div>
      <div className="socialMedia">
        <a href="https://www.instagram.com/sagulita/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/sagulita/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
