const vaccinesService = require('../../services/vaccines');

const vaccinesController = {
    async getAllVaccines(req, res) {
        try {
            const vaccines = await vaccinesService.getAllVaccines();
            res.status(200).json(vaccines);

        } catch (error) {
            res.status(500).json({ message: 'Não foi possível buscar vacinas no momento.' });

        }
    }
}

module.exports = vaccinesController; 