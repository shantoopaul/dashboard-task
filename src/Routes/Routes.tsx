import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <h1>Dashboard</h1>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);
