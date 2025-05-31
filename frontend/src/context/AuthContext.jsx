import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const AuthContext = createContext();

/**
 * Parse JWT token and extract payload
 * @param {string} token - JWT token to parse
 * @returns {Object} Parsed token payload
 */
function parseJwt(token) {
    if (!token) return {};
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
        );
        return JSON.parse(jsonPayload);
    } catch {
        return {};
    }
}

/**
 * Auth Provider component to manage authentication state
 */
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const payload = parseJwt(token);
            setUser({
                token,
                role: payload.role,
                email: payload.email,
                id: payload.id,
                farmId: payload.farmId || localStorage.getItem('farmId')
            });
        }
        setLoading(false);
    }, []);

    const login = (token, userData) => {
        localStorage.setItem('token', token);
        localStorage.setItem('farmId', userData.farmId);
        const payload = parseJwt(token);
        setUser({
            token,
            role: payload.role,
            email: payload.email,
            id: payload.id,
            farmId: userData.farmId
        });
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('farmId');
        setUser(null);
    };

    const value = useMemo(() => ({ 
        user, 
        login, 
        logout, 
        loading 
    }), [user, loading]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

/**
 * Custom hook to use the auth context
 */
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
