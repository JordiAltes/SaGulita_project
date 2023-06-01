import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { Suspense, useEffect, useState, startTransition } from "react";
import "../styles/Services.css";
import { RaceBy } from '@uiball/loaders'

function Services() {
  const { t } = useTranslation(["services"]);
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
    <Suspense fallback={<RaceBy size={80} lineWeight={5} speed={1.4} color="black" />}>
      {loading ? (
        // Mostrar el spinner de carga mientras el componente se está cargando
        <div className="loading-spinner">
          <RaceBy size={80} lineWeight={5} speed={1.4} color="black" />
        </div>
      ) : (
      <div>
        <Header />
        <div className="titleCatering">
          <h1>{t("servicesTitle")}</h1>
        </div>
        <div className="catering">
          <div className="foodTruckText">
            <h1 className="titleTextCatering">{t("foodTruckTitle")}</h1>
            <p>{t("foodTruckDescription")}</p>
          </div>
          <div className="foodTruckImage"></div>
        </div>
        <div className="catering">
          <div className="cateringText">
            <h1 className="titleTextCatering">{t("cateringTitle")}</h1>
            <p>{t("cateringDescription")}</p>
          </div>
          <div className="cateringImage"></div>
        </div>
        <div className="catering">
          <div className="privateCheffText">
            <h1 className="titleTextCatering">{t("privateChefTitle")}</h1>
            <p>{t("privateChefDescription")}</p>
          </div>
          <div className="privateCheffImage"></div>
        </div>
        <Footer />
      </div>
      )}
    </Suspense>
  );
}
export default Services;
