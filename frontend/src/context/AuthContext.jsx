import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

/**
 * Parse JWT token and extract payload
 * @param {string} token - JWT token to parse
 * @returns {Object} Parsed token payload
 */
function parseJwt(token) {
  if (!token) return {};
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    return JSON.parse(jsonPayload);
  } catch {
    return {};
  }
}

/**
 * Verifica se o token está válido e não expirou
 * @param {string} token - JWT token to verify
 * @returns {boolean} True if token is valid
 */
function isTokenValid(token) {
  if (!token) return false;

  try {
    const payload = parseJwt(token);
    if (!payload.exp) return false;

    // Verificar se o token não expirou (exp está em segundos, Date.now() em milissegundos)
    const now = Math.floor(Date.now() / 1000);
    return payload.exp > now;
  } catch {
    return false;
  }
}

/**
 * Auth Provider component to manage authentication state
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      const token = localStorage.getItem("token");
      const farmId = localStorage.getItem("farmId");

      if (token && isTokenValid(token)) {
        const payload = parseJwt(token);
        setUser({
          token,
          role: payload.role,
          email: payload.email,
          id: payload.id,
          farmId: farmId || payload.farmId,
        });
      } else {
        // Token inválido ou expirado, limpar storage
        localStorage.removeItem("token");
        localStorage.removeItem("farmId");
        setUser(null);
      }

      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = (token, userData) => {
    if (!token || !isTokenValid(token)) {
      throw new Error("Token inválido fornecido para login");
    }

    localStorage.setItem("token", token);
    localStorage.setItem("farmId", userData.farmId);

    const payload = parseJwt(token);
    setUser({
      token,
      role: payload.role,
      email: payload.email,
      id: payload.id,
      farmId: userData.farmId,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("farmId");
    setUser(null);
  };

  const isAuthenticated = () => {
    return user && isTokenValid(user.token);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      loading,
      isAuthenticated,
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Custom hook to use the auth context
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
