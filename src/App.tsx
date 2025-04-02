import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";

export const App: React.FC = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const location = useLocation();

  useEffect(() => {
    const getStorageToken = () => {
      setToken(localStorage.getItem("token"));
    }
    window.addEventListener("storage", getStorageToken)
    window.addEventListener("focus", getStorageToken);

    return() => {
      window.addEventListener("storage", getStorageToken)
      window.addEventListener("focus", getStorageToken);
    }
  }, []);

  useEffect(() => {
    if(token && location.pathname === "/login") {
      navigate("/dashboard");
    } else if (!token && location.pathname !== "/login"){
      navigate("/login");
    }
  }, [token, navigate])

  return token ? <Layout /> : <Login />;
};

export default App;

