import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../context/AuthContext";
import "../styles/Auth.css";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoggedIn(true);
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/Admin");
        console.log(user);
      })
      .catch(() => {
        alert("Email o contraseña incorrectos");
      });
  };

  return (
    <form onSubmit={handleFormSubmit} className="logInForm">
      <div className="inputsLogIn">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="inputLogIn"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="inputLogIn"
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
