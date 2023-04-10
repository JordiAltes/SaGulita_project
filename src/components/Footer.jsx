import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer className="footer">
      <div className="logoSaGulita">
        <p>Sa Gulita</p>
        <FontAwesomeIcon icon={faHeart} className="heartIcon" />
      </div>
      <div className="textFooter">
        <p>© 2023 Jordi Altés | All rights reserved </p>
      </div>
      <div className="socialMedia">
        <a href="https://www.instagram.com/sagulita/">
          <FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.facebook.com/sagulita/">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
