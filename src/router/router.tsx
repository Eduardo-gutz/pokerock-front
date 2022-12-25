import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../modules/dashboard/Dashboard";
import { routes } from "../modules/dashboard/routes";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [...routes]
  },
]);