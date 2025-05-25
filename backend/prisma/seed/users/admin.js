const createUser = require('./user');
const { logError } = require('../utils');

async function createAdmin() {
    try {
        const user = await createUser("ADMIN");
    } catch (error) {
        logError("createAdmin", error);
    }
}

module.exports = createAdmin; 