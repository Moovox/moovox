import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { lazy, Suspense } from 'react';
import AuthLayout from './components/AuthLayout';
import PageLoader from './components/PageLoader';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Toaster from './components/Toaster';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/globals.css'

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const ForgotPass = lazy(() => import('./pages/ForgotPass'));
const Usuarios = lazy(() => import('./pages/Usuarios'));
const Animais = lazy(() => import('./pages/Animais'));
const Vacinas = lazy(() => import('./pages/Vacinas'));
const Aplicacoes = lazy(() => import('./pages/Aplicacoes'));
const MeuPerfil = lazy(() => import('./pages/MeuPerfil'));
const MapaAnimais = lazy(() => import('./pages/MapaAnimais'));
const Fazendas = lazy(() => import('./pages/FazendasPage'));

// Envolver MapaAnimais com ErrorBoundary
const SafeMapaAnimais = () => (
    <ErrorBoundary>
        <MapaAnimais />
    </ErrorBoundary>
);

const privateRoutes = [
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/usuarios', element: <Usuarios /> },
    { path: '/animais', element: <Animais /> },
    { path: '/vacinas', element: <Vacinas /> },
    { path: '/aplicacoes', element: <Aplicacoes /> },
    { path: '/meu-perfil', element: <MeuPerfil /> },
    { path: '/mapa-animais', element: <SafeMapaAnimais /> },
    { path: '/fazendas', element: <Fazendas /> },
];

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Analytics mode='auto' />
                <SpeedInsights />
                <Toaster />
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<AuthLayout />}>
                            <Route index element={<Login />} />
                            <Route path="forgot-pass" element={<ForgotPass />} />
                        </Route>
                        <Route element={<PrivateRoute />}>
                            {privateRoutes.map(({ path, element }) => (
                                <Route key={path} path={path} element={element} />
                            ))}
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </AuthProvider>
    );
}