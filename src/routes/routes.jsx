import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import LogIn from "../pages/LogIn";
import Catering from "../pages/Catering";
import Menu from "../pages/Menu";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Catering" element={<Catering />} />
        <Route path="/Menu" element={<Menu />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
