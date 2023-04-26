/* import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import LogIn from "../pages/LogIn";
import Catering from "../pages/Catering";
import Menu from "../pages/Menu";
import Admin from "../pages/Admin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Catering" element={<Catering />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router; */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import LogIn from "../pages/LogIn";
import Catering from "../pages/Catering";
import Menu from "../pages/Menu";
import Admin from "../pages/Admin";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Catering" element={<Catering />} />
        <Route path="/Menu" element={<Menu />} />
        <Route
          path="/Admin/"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

