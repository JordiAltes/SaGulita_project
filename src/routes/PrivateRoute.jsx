import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { userToken } = useContext(AuthContext);

  return userToken !== null ? children : <Navigate to="/LogIn" />;
};

export default PrivateRoute;
