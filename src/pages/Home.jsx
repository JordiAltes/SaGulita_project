import React from "react";
import Mapa from "../components/MapSaGulita";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home">
      <Header />
      <div className="saGulita">
        <div className="saGulitaText">
          <h1 className="title">Quiénes somos?</h1>
          <p>
            Nacemos del sentimiento de ponerle conciencia a una de las bases
            vitales más importantes para el ser humano, como lo es la
            alimentación. Por eso hemos creado un espacio de confianza donde
            puedes venir a alimentarte de una forma casera, nutritiva, saludable
            y deliciosa. Elaboramos nuestros productos de principio a fin con
            productos ecológicos, de proximidad, y contamos con nuestra propia
            huerta.
          </p>
        </div>
        <div className="saGulitaImage"></div>
      </div>
      <div className="saGulita">
        <div className="foodImage"></div>
        <div className="foodText">
          <h1 className="title">Nuestra comida</h1>
          <p>
            Ofrecemos comida vegetariana, vegana en su mayoría, sin glúten, y de
            procedencia orgánica. Todos los días puedes encontrar variedad de
            platos en nuestro local. Además, hacemos desayunos saludables sin
            glúten.
          </p>
        </div>
      </div>
      <div className="saGulita">
        <div className="calendarText">
          <h1 className="title">Horario y contacto</h1>
          <p>
            Nuestro horario es de 9:30 a 16:30 y abrimos de lunes a sábado.
            Domingo descansamos.
          </p>
        </div>
        <div className="calendarImage"></div>
      </div>
      <div className="gridMapa">
        <div className="mapaImage">
          <Mapa />
        </div>
        <div className="mapaText">
          <h1>Dónde estamos?</h1>
          <p>
            Nos encontramos en Ibiza, en carretera de Sant Josep km 1,7 en la
            población de Sant Jordi de ses Salines. Muy cerca del aeropuerto y
            de la capital de la isla.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
export default Home;
