import React from "react";
import Routes from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";

export const App = () => (
  <AuthProvider>
    <Routes />;
  </AuthProvider>
);

export default App;
