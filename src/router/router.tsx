import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../modules/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);