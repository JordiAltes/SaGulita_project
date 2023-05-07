import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";

function About() {
  return (
    <main className="about">
      <Header />
      <h1 className="titleAbout">Quienes somos?</h1>
      <div className="propietarios-container">
        <div className="propietario">
          <h2 className="nomPropietario">Eva</h2>
          <div className="evaSaGulita"></div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            laudantium laborum excepturi voluptatem quae dignissimos ut magni
            minima cumque dolores cum dolorum quia commodi assumenda distinctio
            molestiae mollitia, deserunt amet! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nisi iusto placeat dolore minus
            voluptate excepturi error cupiditate voluptates saepe beatae,
            architecto nihil dolores nemo! Magni, non. Autem dolorem quam
            tempore.
          </p>
        </div>
        <div className="propietario">
          <h2 className="nomPropietario">Gerard</h2>
          <div className="viliSaGulita"></div>
          <p>
            Mi gran pasión por la comida y la agricultura orgánica ha sido
            fundamental en mi carrera culinaria. Cocinar es mi forma de vida, y
            siento una profunda conexión con todo lo que preparo y sirvo.
            Descubrir cómo cultivar y tratar los ingredientes orgánicamente ha
            sido una parte fundamental de mi desarrollo culinario, y ha
            permitido que mi pasión por crear platos excepcionales siga
            creciendo. He tenido la oportunidad de trabajar con algunos de los
            chefs más reconocidos del mundo, lo que me ha permitido aprender de
            su experiencia y conocimientos, y ha influido positivamente en mi
            actitud hacia la cocina y la importancia del servicio al cliente.
            Soy una persona trabajadora, siempre dispuesta a aprender y a
            trabajar en equipo. Me gusta tener múltiples tareas y trabajar bajo
            presión, porque sé que esto me ayuda a mejorar y a crecer en mi
            carrera.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default About;
