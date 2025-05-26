const prisma = require('../../config/database');
const {ensureNonEmpty} = require('../../utils/validators/services'); 
const {logErrorAndThrow} = require('../../utils/log/services/');

const usersService = {
    async getAllUsers() {
        try {
            const users = await prisma.users.findMany();
            ensureNonEmpty(users, "Usuário")
            return users;
        } catch (error) {
            logErrorAndThrow("Usuário", error); 

        }
    }
}

module.exports = usersService; 