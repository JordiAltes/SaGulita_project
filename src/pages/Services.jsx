import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Services.css";

function Services() {
  return (
    <div>
      <Header />
      <div className="titleCatering">
        <h1>Que servicios ofrecemos?</h1>
      </div>
      <div className="catering">
        <div className="foodTruckText">
          <h1 className="titleTextCatering">Food Truck</h1>
          <p>
            Disponemos de una food truck, nuestra Sa Gulita sobre ruedas. La
            tenemos disponible para eventos, fiestas y bodas. Donde quieras y
            cuando quieras!
          </p>
        </div>
        <div className="foodTruckImage"></div>
      </div>
      <div className="catering">
        <div className="cateringText">
          <h1 className="titleTextCatering">Catering</h1>
          <p>
            Podeis contactar con nosotros para hacer caterings para eventos
            privados, fiestas o bodas. Tambien hacemos tartas con previo
            encargo.
          </p>
        </div>
        <div className="cateringImage"></div>
      </div>
      <div className="catering">
        <div className="privateCheffText">
          <h1 className="titleTextCatering">Cheff Privado</h1>
          <p>
            Nuestro cheff Gerard Vilanova, especializado en comida mediterranea
            y vegetariana, lleva 5 años de experiencia trabajando como cheff
            privado en la isla. Puedes contactar con nosotros para pedir mas
            información. Se adapta a las necesidades del cliente.
          </p>
        </div>
        <div className="privateCheffImage"></div>
      </div>
      <Footer />
    </div>
  );
}
export default Services;
