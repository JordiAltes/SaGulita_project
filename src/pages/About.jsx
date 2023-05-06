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
          <h2>Eva</h2>
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
          <h2>Gerard</h2>
          <div className="viliSaGulita"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sint
            omnis suscipit inventore odit natus possimus, exercitationem officia
            quisquam quod sed, obcaecati iure provident perspiciatis pariatur.
            Voluptatum sint suscipit ipsam. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Sequi assumenda ea ab doloremque
            aspernatur, ut eos corrupti modi suscipit! Voluptatum repellendus
            enim dicta laudantium tempora vitae nihil molestiae neque nobis.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default About;
