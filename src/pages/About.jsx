import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";

function About() {
  const { t } = useTranslation(["about"]);

  return (
    <div>
      <main className="about">
        <Header />
        <h1 className="titleAbout">{t("about.title")}</h1>
        <div className="propietarios-container">
          <div className="propietario">
            <h2 className="nomPropietario">{t("about.owner1.name")}</h2>
            <p>{t("about.owner1.description")}</p>
          </div>
          <div className="fotoAbout"></div>
          <div className="propietario">
            <h2 className="nomPropietario">{t("about.owner2.name")}</h2>
            <p>{t("about.owner2.description")}</p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default About;
