import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  getDocs,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import "firebase/firestore";
import { db } from "../firebase/firebase";

function Admin() {
  const [platos, setPlatos] = useState([]);
  const [platosActualizados, setPlatosActualizados] = useState([]);

  useEffect(() => {
    const fetchPlatos = async () => {
      const querySnapshot = await getDocs(collection(db, "platos"));
      const platosArray = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id; // agregamos el id del documento
        data.Menu = Boolean(data.Menu); // aseguramos que `menu` es un booleano
        return data;
      });
      setPlatos(platosArray);
      setPlatosActualizados(platosArray);
    };
    fetchPlatos();
  }, []);

  function handleCheckboxChange(index) {
    const newPlatosActualizados = [...platosActualizados];
    newPlatosActualizados[index].Menu = !newPlatosActualizados[index].Menu;
    setPlatosActualizados(newPlatosActualizados);
  }

  async function guardarMenu() {
    try {
      // Utilizamos forEach para actualizar cada plato en la base de datos
      platosActualizados.forEach(async (platoActualizado) => {
        const docRef = doc(db, "platos", platoActualizado.id);
        await updateDoc(docRef, { menu: platoActualizado.menu });
      });
      alert("El menú ha sido guardado correctamente.");
    } catch (error) {
      console.error("Error al guardar el menú:", error);
      alert("Ha ocurrido un error al guardar el menú.");
    }
  }

  return (
    <div>
      <Header />
      <div>
        <ul>
          {platos.map((plato, index) => (
            <li key={index}>
              <h3>{plato.Nombre}</h3>
              <p>{plato.Descripcion}</p>
              <p>Ingredientes: {plato.Ingredientes}</p>
              <span>Precio: {plato.Precio}€</span>
              <p>
                Añadir a menu del dia?{" "}
                {/* <input
                  type="checkbox"
                  checked={plato.Menu}
                  onChange={(event) => handleCheckboxChange(event, index)}
                /> */}
                <input
                  type="checkbox"
                  checked={plato.Menu}
                  onChange={() => handleCheckboxChange(index)}
                />
              </p>
            </li>
          ))}
        </ul>
        <button onClick={guardarMenu}>Guardar cambios</button>
      </div>
      <Footer />
    </div>
  );
}
export default Admin;
