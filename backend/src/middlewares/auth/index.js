const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "minhachaveultrasecreta123";

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log('Headers recebidos:', req.headers);

    if (!authHeader) {
        console.log('Nenhum header de autorização encontrado');
        return res.status(401).json({ error: 'Token não fornecido.' });
    }

    if (!authHeader.startsWith('Bearer ')) {
        console.log('Header de autorização não está no formato Bearer');
        return res.status(401).json({ error: 'Formato de token inválido.' });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token extraído:', token ? 'Presente' : 'Ausente');

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log('Token decodificado:', decoded);
        
        // Configurar req.user com as informações do token
        req.user = {
            id: decoded.id,
            role: decoded.role,
            iat: decoded.iat,
            exp: decoded.exp
        };
        
        console.log('req.user configurado:', req.user);
        next();
    } catch (error) {
        console.error('Erro ao verificar token:', error);
        return res.status(401).json({ error: 'Token inválido.' });
    }
}

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



























































































































