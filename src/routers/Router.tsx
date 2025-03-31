import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Category from "../components/Category";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
]);
