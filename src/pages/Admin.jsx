import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  getDocs,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import "firebase/firestore";
import { db, storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "../styles/Admin.css";

function Admin() {
  const [platos, setPlatos] = useState([]);
  const [platosActualizados, setPlatosActualizados] = useState([]);
  const [nuevoPlato, setNuevoPlato] = useState({
    Nombre: "",
    Descripcion: "",
    Ingredientes: "",
    Precio: 0,
    Menu: false,
    urlFoto: "",
  });
  const [file, setFile] = useState(null);

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
      // Creamos una lista de promesas de actualización de documentos en la base de datos
      const promesasActualizacion = platosActualizados.map(
        (platoActualizado) => {
          const docRef = doc(db, "platos", platoActualizado.id);
          return updateDoc(docRef, { Menu: platoActualizado.Menu });
        }
      );

      // Esperamos a que se resuelvan todas las promesas
      await Promise.all(promesasActualizacion);

      alert("El menú ha sido guardado correctamente.");
    } catch (error) {
      console.error("Error al guardar el menú:", error);
      alert("Ha ocurrido un error al guardar el menú.");
    }
  }

  async function handleDeletePlato(id) {
    const confirmar = window.confirm(
      "¿Estás seguro que deseas eliminar este plato?"
    );
    if (confirmar) {
      try {
        await deleteDoc(doc(db, "platos", id));
        setPlatos(platos.filter((plato) => plato.id !== id));
        alert("Plato eliminado correctamente.");
        window.location.reload();
      } catch (error) {
        console.error("Error al eliminar el plato:", error);
        alert("Ha ocurrido un error al eliminar el plato.");
      }
    }
  }
  function handleNuevoPlatoChange(event) {
    const campo = event.target.name;
    const valor = event.target.value;
    setNuevoPlato({ ...nuevoPlato, [campo]: valor });
  }

  /* async function agregarPlato() {
    try {
      // Subir imagen al storage
      const imagenRef = ref(storage, 'platos/' + v4());
      await uploadBytes(imagenRef, file);
  
      // Obtener la URL de la imagen
      const urlFoto = await getDownloadURL(imagenRef);
      console.log(urlFoto);
      await addDoc(collection(db, "platos"), nuevoPlato);
      setPlatos([...platos, nuevoPlato]);
      setNuevoPlato({
        Nombre: "",
        Descripcion: "",
        Ingredientes: "",
        Precio: 0,
        Menu: false,
        urlFoto: "",
      });
      alert("El plato ha sido agregado correctamente.");
      window.location.reload();
    } catch (error) {
      alert("Ha ocurrido un error al agregar el plato.");
      console.log(error);
    }
      
  } */
  async function agregarPlato() {
    try {
      // Subir imagen al storage
      const imagenRef = ref(storage, "platos/" + v4());
      await uploadBytes(imagenRef, file);

      // Obtener la URL de la imagen
      const urlFoto = await getDownloadURL(imagenRef);
      console.log(urlFoto);

      // Agregar la URL de la foto al objeto nuevoPlato
      const platoConFoto = { ...nuevoPlato, urlFoto };

      await addDoc(collection(db, "platos"), platoConFoto);
      setPlatos([...platos, platoConFoto]);
      setNuevoPlato({
        Nombre: "",
        Descripcion: "",
        Ingredientes: "",
        Precio: 0,
        Menu: false,
        urlFoto: "",
      });
      alert("El plato ha sido agregado correctamente.");
      window.location.reload();
    } catch (error) {
      alert("Ha ocurrido un error al agregar el plato.");
      console.log(error);
    }
  }

  return (
    <div className="container">
      <Header />
      <div className="platos">
        <ul>
          {platos.map((plato, index) => (
            <li key={plato.id}>
              <h3>{plato.Nombre}</h3>
              <p>{plato.Descripcion}</p>
              <p>Ingredientes: {plato.Ingredientes}</p>
              <span>Precio: {plato.Precio}€</span>
              <p>
                Añadir a menu del dia?{" "}
                <input
                  type="checkbox"
                  checked={plato.Menu}
                  onChange={() => handleCheckboxChange(index)}
                />
              </p>
              <button onClick={() => handleDeletePlato(plato.id)}>
                Eliminar plato
              </button>{" "}
            </li>
          ))}
        </ul>
        <button className="buttonGuardarCambios" onClick={guardarMenu}>
          Guardar menú del dia
        </button>
      </div>
      <form className="formulario">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="Nombre"
          value={nuevoPlato.Nombre}
          onChange={handleNuevoPlatoChange}
        />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="Descripcion"
          value={nuevoPlato.Descripcion}
          onChange={handleNuevoPlatoChange}
        />

        <label htmlFor="ingredientes">Ingredientes:</label>
        <textarea
          id="ingredientes"
          name="Ingredientes"
          value={nuevoPlato.Ingredientes}
          onChange={handleNuevoPlatoChange}
        />

        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          name="Precio"
          value={nuevoPlato.Precio}
          onChange={handleNuevoPlatoChange}
        />
        <label htmlFor="imagen">Imagen:</label>
        <input
          type="file"
          id="imagen"
          name="Image"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="button" onClick={agregarPlato}>
          Agregar plato
        </button>
      </form>

      <Footer />
    </div>
  );
}
export default Admin;
