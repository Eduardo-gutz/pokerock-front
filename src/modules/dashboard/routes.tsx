import Login from "./auht/Login";
import AddBandForm from "./Band/AddBandForm";

export const routes = [
  {
    path: "",
    element: <Login />,
  },
  {
    path: "panel",
    element: <AddBandForm />,
  }
]