const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "minhachaveultrasecreta123";

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ error: 'Token não fornecido.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido.' })
    }
}

function authorizeRole(requiredRole) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Não autenticado' });
        }

        if (req.user.role !== requiredRole) {
            return res.status(403).json({ message: 'Acesso negado: permissão insuficiente' })
        }

        next()
    }
}

module.exports = {
    authMiddleware,
    authorizeRole,
};