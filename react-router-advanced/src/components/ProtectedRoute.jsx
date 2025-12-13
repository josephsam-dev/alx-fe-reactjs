// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // <-- must match exact path

export default function ProtectedRoute() {
  const user = useAuth();

  if (!user?.loggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
