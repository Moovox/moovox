import { memo } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import DailyMooSound from "../common/DailyMooSound";
import PageLoader from "../common/PageLoader";

function PrivateRoute() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <PageLoader />;

  if (!user) {
    return <Navigate to="/" replace state={{ from: location.pathname }} />;
  }

  return (
    <>
      <DailyMooSound />
      <Outlet />
    </>
  );
}

export default memo(PrivateRoute);
