import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import AuthContext from "../context/AuthContext";
import Logout from "./LogOut";

function Header() {
  const { userToken } = useContext(AuthContext);
  const logoSaGulitaUrl =
    "https://firebasestorage.googleapis.com/v0/b/sagulita-d8f9d.appspot.com/o/fotosWeb%2FlogoSaGulita.jpeg?alt=media&token=42aa51c7-c4a4-4aad-9f2b-6ae244ed397d";

  return (
    <header className="header">
      <div className="logoSaGulita">
        <img src={logoSaGulitaUrl} alt="Logo de Sa Gulita" className="logoImg" />
      </div>
      <div className="links">
        <Link className="linksText" to="/">
          Home
        </Link>
        <Link className="linksText" to="/Menu">
          Menu
        </Link>{" "}
        <Link className="linksText" to="/Services">
          Services
        </Link>
        <Link className="linksText" to="/About">
          About
        </Link>
        {userToken ? (
          <Link className="linksText" to="/Admin">
            Admin
          </Link>
        ) : null}
      </div>
      <div className="socialMedia">
        {userToken ? (
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
