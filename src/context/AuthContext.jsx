import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState(
    JSON.parse(localStorage.getItem("userToken")) || null
  );

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
