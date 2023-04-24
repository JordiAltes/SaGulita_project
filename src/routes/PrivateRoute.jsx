import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user !== null ? children : <Navigate to="/LogIn" />;
};

export default PrivateRoute;
