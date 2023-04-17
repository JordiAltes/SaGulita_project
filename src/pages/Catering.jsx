import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Catering.css"

function Catering() {
  return (
    <div>
      <Header />
      <div className="titleCatering">
        <h1>Que servicios ofrecemos?</h1>
      </div>
      <div className="saGulita">
        <div className="foodTruckText">
          <h1 className="title">Food Truck</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            officiis quae sequi vero, dolor consequuntur porro doloremque
            doloribus earum voluptas explicabo voluptatem excepturi. Quaerat
            ipsa possimus, hic commodi unde aut! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ullam, officiis itaque! Deleniti
            consequatur vero nisi labore, ab molestiae enim quidem perferendis
            libero earum error, tempora doloremque officiis illo numquam
            tempore.
          </p>
        </div>
        <div className="foodTruckImage"></div>
      </div>
      <div className="saGulita">
        <div className="cateringImage"></div>
        <div className="cateringText">
          <h1 className="title">Catering</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            officiis quae sequi vero, dolor consequuntur porro doloremque
            doloribus earum voluptas explicabo voluptatem excepturi. Quaerat
            ipsa possimus, hic commodi unde aut! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ullam, officiis itaque! Deleniti
            consequatur vero nisi labore, ab molestiae enim quidem perferendis
            libero earum error, tempora doloremque officiis illo numquam
            tempore.
          </p>
        </div>
      </div>
      <div className="saGulita">
        <div className="privateCheffText">
          <h1 className="title">Cheff Privado</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            officiis quae sequi vero, dolor consequuntur porro doloremque
            doloribus earum voluptas explicabo voluptatem excepturi. Quaerat
            ipsa possimus, hic commodi unde aut! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ullam, officiis itaque! Deleniti
            consequatur vero nisi labore, ab molestiae enim quidem perferendis
            libero earum error, tempora doloremque officiis illo numquam
            tempore.
          </p>
        </div>
        <div className="privateCheffImage"></div>
      </div>
      <Footer />
    </div>
  );
}
export default Catering;
