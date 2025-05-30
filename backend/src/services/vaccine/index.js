const prisma = require('../../config/database');

const vaccineService = {
    async getAllVaccines() {
        try {
            const vaccines = await prisma.vaccines.findMany({
                include: {
                    manufacturer: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    type_of_vaccine: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });

            if (!vaccines || vaccines.length === 0) {
                throw new Error("Nenhuma vacina encontrada.");
            }

            return vaccines;
        } catch (error) {
            console.error("Erro ao buscar vacinas", error);
            throw error;
        }
    },
    async getVaccineByID(id) {
        try {
            const vaccine = await prisma.vaccines.findUnique({
                where: { id: Number(id) },
                include: {
                    manufacturer: {
                        select: {
                            id: true,
                            name: true
                        },

                    },
                    type_of_vaccine: {
                        select: {
                            id: true,
                            name: true

                        }
                    }
                }
            });
            if (!vaccine) {
                throw new Error(`Vacina com ID ${id} não encontrado.`);
            }
            return vaccine;
        } catch (error) {
            console.error(`Erro ao buscar vacina com ID ${id}`, error);
            throw error;

        }
    },
    async createVaccine(data) {
        try {
            const requiredFields = ['name', 'target_disease', 'manufacturer_id', 'batch', 'expiration_date', 'required_doses', 'type_of_vaccine_id', 'notes'];
            for (const field of requiredFields) {
                if (data[field] === undefined || data[field] === null || data[field] === '') {
                    throw new Error(`O campo '${field}' é obrigatório.`);
                }
            }

            if (typeof data.name !== 'string' || data.name.trim().length === 0) {
                throw new Error("O campo 'name' deve ser uma string não vazia.")
            }
            if (typeof data.target_disease !== 'string' || data.target_disease.trim().length === 0) {
                throw new Error("O campo 'target_disease' deve ser uma string não vazia.")
            }
            if (typeof data.batch !== 'string' || data.batch.trim().length === 0) {
                throw new Error("O campo 'batch' deve ser uma string não vazia.")
            }
            if (isNaN(Number(data.manufacturer_id))) {
                throw new Error("O campo 'manufacturer_id' deve ser um número.");
            }
            if (isNaN(Number(data.required_doses))) {
                throw new Error("O campo 'required_doses' deve ser um número.");
            }
            if (data.required_doses <= 0) {
                throw new Error("O campo 'required_doses' deve ser maior que zero.");

            }
            if (isNaN(Number(data.type_of_vaccine_id))) {
                throw new Error("O campo 'type_of_vaccine_id' deve ser um número.");
            }

            const expiration_date = new Date(data.expiration_date);

            if (isNaN(expiration_date.getTime())) {
                throw new Error("O campo 'expiration_date' deve ser uma data válida.");
            }
            if (expiration_date < new Date()) {
                throw new Error("O campo 'expiration_date' não pode ser uma data passada.");
            }
            if (typeof data.notes !== 'string' || data.notes.trim().length === 0) {
                throw new Error("O campo 'notes' deve ser uma string não vazia.")
            }

            if (data.dosing_interval !== undefined && isNaN(Number(data.dosing_interval))) {
                throw new Error("O campo 'dosing_interval' deve ser um número, se fornecido.");
            }
            const newVaccine = await prisma.vaccines.create({
                data: {
                    name: data.name.trim(),
                    target_disease: data.target_disease.trim(),
                    manufacturer_id: Number(data.manufacturer_id),
                    batch: data.batch.trim(),
                    expiration_date: expiration_date,
                    required_doses: Number(data.required_doses),
                    dosing_interval: Number(data.dosing_interval) || 0,
                    type_of_vaccine_id: Number(data.type_of_vaccine_id),
                    notes: data.notes,
                }
            });
            return newVaccine;
        } catch (error) {
            console.error("Erro ao criar vacina", error);
            throw error;
        }
    }, 
    async updateVaccine(id, data) {
        try {
            const existingVaccine = await prisma.vaccines.findUnique({
                where: { id: Number(id) },
            });

            if (!existingVaccine) {
                throw new Error(`Vacina com ID ${id} não encontrada.`);
            }

            const updateData = {};

            if (data.name !== undefined) {
                if (typeof data.name !== 'string' || data.name.trim().length === 0) {
                    throw new Error("O campo 'name' deve ser uma string não vazia.");
                }
                updateData.name = data.name.trim();
            }

            if (data.target_disease !== undefined) {
                if (typeof data.target_disease !== 'string' || data.target_disease.trim().length === 0) {
                    throw new Error("O campo 'target_disease' deve ser uma string não vazia.");
                }
                updateData.target_disease = data.target_disease.trim();
            }

            if (data.manufacturer_id !== undefined) {
                if (isNaN(Number(data.manufacturer_id))) {
                    throw new Error("O campo 'manufacturer_id' deve ser um número.");
                }
                updateData.manufacturer_id = Number(data.manufacturer_id);
            }

            if (data.batch !== undefined) {
                if (typeof data.batch !== 'string' || data.batch.trim().length === 0) {
                    throw new Error("O campo 'batch' deve ser uma string não vazia.");
                }
                updateData.batch = data.batch.trim();
            }

            if (data.expiration_date !== undefined) {
                const expiration_date = new Date(data.expiration_date);
                if (isNaN(expiration_date.getTime())) {
                    throw new Error("O campo 'expiration_date' deve ser uma data válida.");
                }
                if (expiration_date < new Date()) {
                    throw new Error("O campo 'expiration_date' não pode ser uma data passada.");
                }
                updateData.expiration_date = expiration_date;
            }

            if (data.required_doses !== undefined) {
                const doses = Number(data.required_doses);
                if (isNaN(doses) || doses <= 0) {
                    throw new Error("O campo 'required_doses' deve ser um número maior que zero.");
                }
                updateData.required_doses = doses;
            }

            if (data.dosing_interval !== undefined) {
                if (isNaN(Number(data.dosing_interval))) {
                    throw new Error("O campo 'dosing_interval' deve ser um número.");
                }
                updateData.dosing_interval = Number(data.dosing_interval);
            }

            if (data.type_of_vaccine_id !== undefined) {
                if (isNaN(Number(data.type_of_vaccine_id))) {
                    throw new Error("O campo 'type_of_vaccine_id' deve ser um número.");
                }
                updateData.type_of_vaccine_id = Number(data.type_of_vaccine_id);
            }

            if (data.notes !== undefined) {
                if (typeof data.notes !== 'string' || data.notes.trim().length === 0) {
                    throw new Error("O campo 'notes' deve ser uma string não vazia.");
                }
                updateData.notes = data.notes.trim();
            }

            const updatedVaccine = await prisma.vaccines.update({
                where: { id: Number(id) },
                data: updateData,
            });

            return updatedVaccine;
        } catch (error) {
            console.error(`Erro ao atualizar vacina com ID ${id}`, error);
            throw error;
        }
    }

}

module.exports = vaccineService;