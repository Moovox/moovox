// LoginLayout.js
import { Outlet } from 'react-router-dom';

function LoginLayout() {
    return (
        <main className="relative z-30 flex justify-center items-center min-h-screen" role="main">
            <Outlet />
        </main>
    );
}

export default LoginLayout;