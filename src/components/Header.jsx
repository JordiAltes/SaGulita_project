import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
        <Link className="linksText" to="/Menu">
          Menu
        </Link>{" "}
        <Link className="linksText" to="/Catering">
          Services
        </Link>
        <Link className="linksText" to="/About">
          About
        </Link>
        <Link className="linksText" to="/Admin">
          Admin
        </Link> 
      </div>
      <div className="socialMedia">
        <Link to="/LogIn">
          <FontAwesomeIcon className="userIcon" icon={faUser} />
        </Link>
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
