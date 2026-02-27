import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import DashLayout from "../Layouts/DashLayout";
import Dashboard from "../Pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);
