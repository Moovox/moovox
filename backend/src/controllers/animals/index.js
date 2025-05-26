const animalsServices = require('../../services/animals');

const animalsController = {
    async getAllAnimals(req, res) {
        try {
            const animals = await animalsServices.getAllAnimals();
            res.status(200).json(animals);
        } catch (error) {
            console.log("demonstrando o erro aqui:", error)
            const msg = error.message.toLowerCase()
            if (msg.includes("nenhum") && msg.includes("encontrado")) {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: 'Não foi possível buscar animais no momento.' });
        }
    }
}

module.exports = animalsController; 