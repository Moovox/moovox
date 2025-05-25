
const createUser = require('./user');
const { logError } = require('../utils');

async function createFarmer() {
    try {
        const user = await createUser("FARMER");
    } catch (error) {
        logError("createFarmer", error);
    }
}

module.exports = createFarmer; 