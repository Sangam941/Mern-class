import { createContext, useEffect, useState } from "react";

export const AuthContexProvider = createContext();

const AuthContext = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const data = localStorage.getItem("authData");

    return data ? JSON.parse(data) : null;
  });

  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth");
  });

  useEffect(() => {
    const data = () => {
      if (auth) {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
      } else {
        localStorage.setItem("isAuth", false);
        setIsAuth(false);
      }
    };

    data();
  }, [auth]);

  return (
    <AuthContexProvider.Provider value={{ auth, setAuth, isAuth, setIsAuth }}>
      {children}
    </AuthContexProvider.Provider>
  );
};

export default AuthContext;
