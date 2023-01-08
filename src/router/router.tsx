import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../modules/dashboard/Dashboard";
import { routes } from "../modules/dashboard/routes";
import Home from "../modules/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [...routes]
  },
]);