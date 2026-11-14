import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};
