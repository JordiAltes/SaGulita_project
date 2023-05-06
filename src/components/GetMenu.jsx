import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import "firebase/firestore";
import { db } from "../firebase/firebase";
import "../styles/GetMenu.css";

function GetMenu() {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    const fetchPlatos = async () => {
      const querySnapshot = await getDocs(collection(db, "platos"));
      const platosArray = querySnapshot.docs.map((doc) => doc.data());
      setPlatos(platosArray);
    };
    fetchPlatos();
  }, []);

  const menuPlatos = platos.filter((plato) => plato.Menu);

  return (
    <div className="menu-container">
      {menuPlatos.map((plato, index) => (
        <div className="plato-container" key={index}>
          <img src={plato.urlFoto} alt="" className="plato-img" />
          <h2 className="plato-nombre">{plato.Nombre}</h2>
          <span className="plato-precio">Precio por ración: {plato.Precio}€</span>
        </div>
      ))}
    </div>
  );
}

export default GetMenu;
