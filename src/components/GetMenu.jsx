/* import React, { useState, useEffect } from "react";
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

export default GetMenu; */
/* import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import "firebase/firestore";
import { db } from "../firebase/firebase";
import "../styles/GetMenu.css";

function GetMenu() {
  const [platos, setPlatos] = useState([]);
  const [selectedPlato, setSelectedPlato] = useState(null);

  useEffect(() => {
    const fetchPlatos = async () => {
      const querySnapshot = await getDocs(collection(db, "platos"));
      const platosArray = querySnapshot.docs.map((doc) => doc.data());
      setPlatos(platosArray);
    };
    fetchPlatos();
  }, []);

  const menuPlatos = platos.filter((plato) => plato.Menu);

  const handlePlatoClick = (plato) => {
    setSelectedPlato(plato);
  };

  const closeModal = () => {
    setSelectedPlato(null);
  };

  return (
    <div className="menu-container">
      {menuPlatos.map((plato, index) => (
        <div className="plato-container" key={index} onClick={() => handlePlatoClick(plato)}>
          <img src={plato.urlFoto} alt="" className="plato-img" />
          <h2 className="plato-nombre">{plato.Nombre}</h2>
          <span className="plato-precio">Precio por ración: {plato.Precio}€</span>
        </div>
      ))}
      {selectedPlato && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedPlato.urlFoto} alt="" className="modal-img" />
            <h2 className="modal-nombre">{selectedPlato.Nombre}</h2>
            <span className="modal-precio">Precio por ración: {selectedPlato.Precio}€</span>
            <p className="modal-descripcion">{selectedPlato.Descripcion}</p>
            <p className="modal-ingredientes">Ingredientes: {selectedPlato.Ingredientes}</p>
            <button className="modal-close" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetMenu; */
import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import "firebase/firestore";
import { db } from "../firebase/firebase";
import "../styles/GetMenu.css";

function GetMenu() {
  const [platos, setPlatos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlato, setSelectedPlato] = useState(null);

  useEffect(() => {
    const fetchPlatos = async () => {
      const querySnapshot = await getDocs(collection(db, "platos"));
      const platosArray = querySnapshot.docs.map((doc) => doc.data());
      setPlatos(platosArray);
    };
    fetchPlatos();
  }, []);

  const menuPlatos = platos.filter((plato) => plato.Menu);

  const handlePlatoClick = (plato) => {
    setSelectedPlato(plato);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="menu-container">
      {menuPlatos.map((plato, index) => (
        <div className="plato-container" key={index} onClick={() => handlePlatoClick(plato)}>
          <img src={plato.urlFoto} alt="" className="plato-img" />
          <h2 className="plato-nombre">{plato.Nombre}</h2>
          <span className="plato-precio">Precio por ración: {plato.Precio}€</span>
        </div>
      ))}
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPlato.urlFoto} alt={selectedPlato.Nombre} className="modal-img" />
            <h2 className="modal-nombre">{selectedPlato.Nombre}</h2>
            <span className="modal-precio">Precio por ración: {selectedPlato.Precio}€</span>
            <p className="modal-descripcion">{selectedPlato.Descripcion}</p>
            <p className="modal-ingredientes">Ingredientes: {selectedPlato.Ingredientes}</p>
            <button className="modal-close" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetMenu;

