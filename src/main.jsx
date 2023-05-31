import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import "./config/i18next.config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
