import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import PageLoader from "../common/PageLoader";

function PrivateRoute() {
  const { user, loading } = useAuth();

  if (loading) return <PageLoader />;
  return user ? <Outlet /> : <Navigate to="/" replace />;
}

export default memo(PrivateRoute);
