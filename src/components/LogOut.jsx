import React, { useContext } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  const { setUser, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await auth.signOut();
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
  };

  return (
    <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={handleLogOut} className="iconLogOut"/>
  );
};

export default Logout;
