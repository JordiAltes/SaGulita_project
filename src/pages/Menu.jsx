import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetMenu from "../components/GetMenu";

function Menu() {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth();
  const año = fechaActual.getFullYear();

  function obtenerNombreMes(numeroMes) {
    const nombresMeses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    return nombresMeses[numeroMes];
  }
  const nombreMes = obtenerNombreMes(mes);
  const fechaFormateada = `${dia} de ${nombreMes} del ${año}`;

  return (
    <div>
      <Header />
      <h1 className="titleMenu">Menú del dia: {fechaFormateada} </h1>
      <GetMenu />
      <Footer />
    </div>
  );
}

export default Menu;
