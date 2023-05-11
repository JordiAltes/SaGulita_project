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
          <p>
            El inicio de Sa gulita fue resultado de un inesperado giro del
            destino que no se encontraba en mis planes. Aunque no tenía
            intención de emprender, la inspiración surgió de repente al
            encontrarme con un local en alquiler. Reconocí de inmediato que era
            el lugar perfecto para brindar a las personas un espacio donde
            pudieran disfrutar de una alimentación saludable. Lo empece con 26
            años y mi entusiasmo e ilusion me llevó a tomar las riendas y
            descubrir una conexión apasionante con la comida. A medida que
            investigaba y experimentaba, fui evolucionando y formando un equipo.
            Con el apoyo de mi pareja, quien se convirtió en mi socio, pudimos
            crear juntos muchas cosas nuevas. Comenzamos a elaborar fermentos,
            bebidas fermentadas, quesos, todo de manera casera, y también
            aprovechamos los alimentos de nuestra propia huerta. Siempre con la
            intención de nutrir no solo los cuerpos, sino también las almas.
          </p>
        </div>
          <div className="fotoAbout"></div>
        <div className="propietario">
          <h2 className="nomPropietario">Gerard</h2>
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
