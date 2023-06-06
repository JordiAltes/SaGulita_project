import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import i18n from "./config/i18next.config";
import { AuthProvider } from "./context/AuthContext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </AuthProvider>
  </React.StrictMode>
);
