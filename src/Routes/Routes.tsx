import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Login</h1>,
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <h1>Dashboard</h1>
      </div>
    ),
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);
