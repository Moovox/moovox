import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import PrivateRoute from "./components/auth/PrivateRoute";
import ErrorBoundary from "./components/common/ErrorBoundary";
import PageLoader from "./components/common/PageLoader";
import Toaster from "./components/ui/Toaster";
import { AuthProvider } from "./context/AuthContext";
import { FarmProvider } from "./context/FarmContext";
import "./styles/globals.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/auth/Login"));
const ForgotPassword = lazy(
  () => import("./components/auth/ForgotPasswordCard"),
);
const Users = lazy(() => import("./pages/features/Users"));
const Animals = lazy(() => import("./pages/features/Animals"));
const Vaccines = lazy(() => import("./pages/features/Vaccines"));
const Applications = lazy(() => import("./pages/features/Applications"));
const Profile = lazy(() => import("./pages/auth/Profile"));
const AnimalMap = lazy(() => import("./pages/features/AnimalMap"));
const Farms = lazy(() => import("./pages/features/Farms"));
const FarmDetailsPage = lazy(() => import("./pages/features/FarmDetailsPage"));

// Wrap AnimalMap with ErrorBoundary
const SafeAnimalMap = () => (
  <ErrorBoundary>
    <AnimalMap />
  </ErrorBoundary>
);

const privateRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/users", element: <Users /> },
  { path: "/animals", element: <Animals /> },
  { path: "/vaccines", element: <Vaccines /> },
  { path: "/applications", element: <Applications /> },
  { path: "/profile", element: <Profile /> },
  { path: "/animal-map", element: <SafeAnimalMap /> },
  { path: "/farms", element: <Farms /> },
  { path: "/farms/:farmId", element: <FarmDetailsPage /> },

  // Legacy routes for backward compatibility
  { path: "/usuarios", element: <Users /> },
  { path: "/animais", element: <Animals /> },
  { path: "/vacinas", element: <Vaccines /> },
  { path: "/aplicacoes", element: <Applications /> },
  { path: "/meu-perfil", element: <Profile /> },
  { path: "/mapa-animais", element: <SafeAnimalMap /> },
  { path: "/fazendas", element: <Farms /> },
];

export default function App() {
  return (
    <AuthProvider>
      <FarmProvider>
        <BrowserRouter>
          <Analytics mode="auto" />
          <SpeedInsights />
          <Toaster />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Rotas públicas de autenticação */}
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                {/* Legacy route for backward compatibility */}
                <Route path="forgot-pass" element={<ForgotPassword />} />
              </Route>

              {/* Rotas privadas (requerem autenticação) */}
              <Route element={<PrivateRoute />}>
                {privateRoutes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </FarmProvider>
    </AuthProvider>
  );
}
