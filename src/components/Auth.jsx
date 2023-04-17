import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
/* import { useNavigate } from "react-router-dom";
 */
import "../styles/Auth.css";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrMv6e8nsuV5Sm8wlUFzXSiIRR6qbDwKE",
  authDomain: "sagulita-d8f9d.firebaseapp.com",
  projectId: "sagulita-d8f9d",
  storageBucket: "sagulita-d8f9d.appspot.com",
  messagingSenderId: "762832789159",
  appId: "1:762832789159:web:363f4cce6097d27c570582",
  measurementId: "G-4HC8SL4T0G",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // navigate("/");
        // sessionStorage.setItem(
        //   "Auth Token",
        //   userCredential._tokenResponse.refreshToken
        // );
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
