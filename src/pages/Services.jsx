import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import "../styles/Services.css";

function Services() {
  const { t } = useTranslation(["services"]);

  return (
    <div>
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
    </div>
  );
}

export default Services;
