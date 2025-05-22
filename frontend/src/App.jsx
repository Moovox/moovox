import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { lazy, Suspense } from 'react';
import AuthLayout from './components/AuthLayout';
import PageLoader from './components/PageLoader';
import './styles/globals.css'

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const ForgotPass = lazy(() => import('./pages/ForgotPass'));
const Usuarios = lazy(() => import('./pages/Usuarios'));
const Animais = lazy(() => import('./pages/Animais'));
const Vacinas = lazy(() => import('./pages/Vacinas'));
const Aplicacoes = lazy(() => import('./pages/Aplicacoes'));
const MeuPerfil = lazy(() => import('./pages/MeuPerfil'));

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
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<AuthLayout />}>
                        <Route index element={<Login />} />
                        <Route path="forgot-pass" element={<ForgotPass />} />
                    </Route>
                    {privateRoutes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}