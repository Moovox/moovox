import { memo, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BackgroundVideo from "../common/BackgroundVideo";
import PageLoader from "../common/PageLoader";

function AuthLayout() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // tempo mínimo para o loading aparecer
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <BackgroundVideo />
      {loading && <PageLoader />}
      <main
        className="relative z-30 flex min-h-screen items-center justify-center"
        role="main"
      >
        <Outlet />
      </main>
    </div>
  );
}

export default memo(AuthLayout);
