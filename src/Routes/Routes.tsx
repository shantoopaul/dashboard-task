import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import DashLayout from "../Layouts/DashLayout";
import Dashboard from "../Pages/Dashboard";
import PublicRoute from "./PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
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
