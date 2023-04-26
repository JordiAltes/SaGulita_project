import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import AuthContext from "../context/AuthContext";
import Logout from "./LogOut";
import logoSaGulita from "../assets/logoSaGulita.jpeg"

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logoSaGulita">
        <img src={logoSaGulita} alt="Logo de Sa Gulita" className="logoImg" />
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
        {user ? (
          <Link className="linksText" to="/Admin">
            Admin
          </Link>
        ) : null}
      </div>
      <div className="socialMedia">
        {user ? (
          <Logout />
        ) : (
          <Link to="/LogIn">
            <FontAwesomeIcon className="userIcon" icon={faUser} />
          </Link>
        )}

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
