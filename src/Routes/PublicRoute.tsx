import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useEffect } from "react";
import toast from "react-hot-toast";
import type { ReactNode } from "react";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      toast("You are already logged in 👋", {
        icon: "⚠️",
      });
    }
  }, [user]);

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
