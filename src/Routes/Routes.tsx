import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import DashLayout from "../Layouts/DashLayout";
import Dashboard from "../Pages/Dashboard";
import PublicRoute from "./PublicRoute";
import PageNotFound from "../Pages/PageNotFound";

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
        index: true,
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
