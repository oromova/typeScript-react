import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  

  return (
    <>
      <header className="bg-blue-500 p-4">
        <div className="text-end font-bold">
          <button onClick={logOut}>LogOut</button>
        </div>
      </header>
      <div className="grid grid-cols-10 p-4">
        <div className="col-span-2 p-4 bg-blue-100 ">
          <h2>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </h2>
          <h2>
            <NavLink to="/category">Category</NavLink>
          </h2>
        </div>
        <div className="col-span-8 p-4 bg-blue-200 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
