import React from "react";
import Mapa from "../components/MapSaGulita";

function Home() {
  return (
    <main>
      <div className="saGulita">
        <div className="saGulitaImage"></div>
        <div className="saGulitaText">
          <h2>Quienes somos?</h2>
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
        <div className="foodText">
          <h2>Nuestra comida</h2>
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
        <div className="foodImage"></div>
      </div>
      <div className="saGulita">
        <div className="mapaImage">
            <Mapa />
        </div>
        <div className="mapaText">
          <h2>Donde estamos?</h2>
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
    </main>
  );
}
export default Home;
