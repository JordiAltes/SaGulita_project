import React, { useState, useEffect } from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import "firebase/firestore";
import { db } from "../firebase/firebase";

function GetMenu() {
  const [platos, setPlatos] = useState([]);
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

  useEffect(() => {
    const fetchPlatos = async () => {
      const querySnapshot = await getDocs(collection(db, "platos"));
      const platosArray = querySnapshot.docs.map((doc) => doc.data());
      setPlatos(platosArray);
    };
    fetchPlatos();
  }, []);

  return (
    <div>
      <h1>Menú del dia: {fechaFormateada} </h1>
      <ul>
        {platos.map((plato, index) => (
          <li key={index}>
            <h3>{plato.Nombre}</h3>
            <p>{plato.Descripcion}</p>
            <span>Precio: {plato.Precio}€</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetMenu;
