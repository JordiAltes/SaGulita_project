import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logoSaGulita">
        <p>Sa Gulita</p>
        <FontAwesomeIcon icon={faHeart} className="heartIcon" />
      </div>
      <div className="links">
        <Link className="linksText" to="/">
          Home
        </Link>
        <p>Menu</p>
        <Link className="linksText" to="/About">
          About
        </Link>{" "}
        <p>Catering</p>
      </div>
      <div className="socialMedia">
        <a href="https://www.instagram.com/sagulita/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/sagulita/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </header>
  );
}
export default Header;
