const animalsServices = require('../../services/animals');

const animalsController = {
    async getAllAnimals(req, res) {
        try {
            const animals = await animalsServices.getAllAnimals();
            res.status(200).json(animals);
        } catch (error) {
            res.status(500).json({ message: 'Não foi possível buscar animais no momento.' });
        }
    }
}

module.exports = animalsController; 