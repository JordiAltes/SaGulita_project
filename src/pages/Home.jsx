import React from "react";
import Mapa from "../components/MapSaGulita";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Home() {
  const { t } = useTranslation(["home"]);

  return (
    <div>
      <main>
        <Header />
        <div className="saGulita">
          <div className="saGulitaText">
            <h1 className="title">{t("whoWeAre")}</h1>
            <p>{t("whoWeAreDescription")}</p>
          </div>
          <div className="saGulitaImage"></div>
        </div>
        <div className="saGulita">
          <div className="foodText">
            <h1 className="title">{t("ourFood")}</h1>
            <p>{t("ourFoodDescription")}</p>
          </div>
          <div className="foodImage"></div>
        </div>
        <div className="saGulita">
          <div className="calendarText">
            <h1 className="title">{t("openingHours")}</h1>
            <p>{t("openingHoursDescription")}</p>
          </div>
          <div className="calendarImage"></div>
        </div>
        <div className="gridMapa">
          <div className="mapaImage">
            <Mapa />
          </div>
          <div className="mapaText">
            <h1 className="titleMap">{t("whereAreWe")}</h1>
            <p>{t("whereAreWeDescription")}</p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Home;
