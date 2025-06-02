// LoginLayout.js
import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <main
      className="relative z-30 flex min-h-screen items-center justify-center"
      role="main"
    >
      <Outlet />
    </main>
  );
}

export default LoginLayout;
