import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ForgotPass from './pages/ForgotPass';
import AuthLayout from './components/AuthLayout';
import Usuarios from './pages/Usuarios';
import Animais from './pages/Animais';
import Vacinas from './pages/Vacinas';
import Aplicacoes from './pages/Aplicacoes';
import MeuPerfil from './pages/MeuPerfil';
import './styles/globals.css'

// Separação das rotas em um array para facilitar manutenção e escalabilidade
const privateRoutes = [
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/usuarios', element: <Usuarios /> },
    { path: '/animais', element: <Animais /> },
    { path: '/vacinas', element: <Vacinas /> },
    { path: '/aplicacoes', element: <Aplicacoes /> },
    { path: '/meu-perfil', element: <MeuPerfil /> },
];

export default function App() {
    return (
        // Its working!!
        <BrowserRouter>
            <Analytics mode='auto' />
            <SpeedInsights />
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="forgot-pass" element={<ForgotPass />} />
                </Route>
                {privateRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}