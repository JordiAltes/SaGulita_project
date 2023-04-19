import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetMenu from "../components/GetMenu";

function Menu() {
  return (
    <div>
      <Header />
      <GetMenu />
      <Footer />
    </div>
  );
}

export default Menu;
