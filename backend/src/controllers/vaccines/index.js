const vaccinesService = require('../../services/vaccines');

const vaccinesController = {
    async getAllVaccines(req, res) {
        try {
            const vaccines = await vaccinesService.getAllVaccines();
            res.status(200).json(vaccines);

        } catch (error) {
            const msg = error.message.toLowerCase()
            if (msg.includes("nenhum") && msg.includes("encontrado")) {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: 'Não foi possível buscar vacinas no momento.' });

        }
    }
}

module.exports = vaccinesController; 