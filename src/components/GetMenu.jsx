//Afegir que es puguin pujar fotos del plats
import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import "firebase/firestore";
import { db } from "../firebase/firebase";

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
    <div>
      <ul>
        {menuPlatos.map((plato, index) => (
          <li key={index}>
            <h3>{plato.Nombre}</h3>
            <p>{plato.Descripcion}</p>
            <p>Ingredientes: {plato.Ingredientes}</p>
            <span>Precio: {plato.Precio}€</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetMenu;
