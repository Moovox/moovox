const jwt = require('jsonwebtoken');
const config = require('../../config/env');

const JWT_SECRET = config.jwt.secret || process.env.JWT_SECRET || "minhachaveultrasecreta123";

/**
 * Middleware de autenticação que verifica a validade do token JWT
 */
function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido.' });
    }

    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Formato de token inválido.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // Configurar req.user com as informações do token
        req.user = {
            id: decoded.id,
            role: decoded.role,
            farmId: decoded.farmId,
            iat: decoded.iat,
            exp: decoded.exp
        };
        
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido.' });
    }
}

/**
 * Middleware para autorização baseada em roles
 * @param {string} requiredRole - O papel necessário para acessar o recurso
 */
function authorizeRole(requiredRole) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Não autenticado' });
        }

        if (req.user.role !== requiredRole) {
            return res.status(403).json({ message: 'Acesso negado: permissão insuficiente' });
        }

        next();
    };
}

module.exports = {
    authMiddleware,
    authorizeRole,
};



























































































































