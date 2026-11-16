import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

export const ProtectedRoutes = () => {
  const { isLoggedIn, authLoading } = useContext(AuthContext);

  if (authLoading) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" replace />;
};
