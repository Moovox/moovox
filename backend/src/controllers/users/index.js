const usersService = require('../../services/users');

const usersController = {
    async getAllUsers(req, res) {
        try {
            const users = await usersService.getAllUsers();
            res.status(200).json(users);

        } catch (error) {
            const msg = error.message.toLowerCase()
            if (msg.includes("nenhum") && msg.includes("encontrado")) {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: 'Não foi possível buscar usuários no momento.' });

        }
    }
}

module.exports = usersController; 