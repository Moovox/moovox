import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function PrivateRoute() {
  const { user, loading } = useAuth();

  if (loading) return null; // ou um loader
  return user ? <Outlet /> : <Navigate to="/" replace />;
}
