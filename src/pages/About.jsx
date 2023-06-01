import React from "react";
import { useState, useEffect, Suspense, startTransition } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RaceBy } from "@uiball/loaders";
import "../styles/About.css";

function About() {
  const { t } = useTranslation("about");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simular una carga asincrónica para mostrar el spinner
    setTimeout(() => {
      startTransition(() => {
        setLoading(false);
      });
    }, 2000);
  }, []);

  return (
    <Suspense
      fallback={<RaceBy size={80} lineWeight={5} speed={1.4} color="black" />}
    >
      {loading ? (
        // Mostrar el spinner de carga mientras el componente se está cargando
        <div className="loading-spinner">
          <RaceBy size={80} lineWeight={5} speed={1.4} color="black" />
        </div>
      ) : (
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
      )}
    </Suspense>
  );
}

export default About;
