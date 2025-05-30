const prisma = require('../../config/database');
const VALID_STATUS_VACCINE_APPLICATIONS = ['APPLIED', 'PENDING', 'OVERDUE'];

const vaccineApplicationService = {
    async getAllVaccineApplications() {
        try {
            const vaccine_applications = await prisma.applications.findMany({

                include: {
                    animal: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                    vaccine: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                    veterinary: {
                        select: {
                            id: true,
                            user: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            });

            if (!vaccine_applications || vaccine_applications.length === 0) {
                throw new Error("Nenhuma aplicação de vacina encontrada.");
            }

            return vaccine_applications;
        } catch (error) {
            console.error("Erro ao buscar aplicações vacinas", error);
            throw error;
        }
    },
    async getVaccineApplicationByID(id) {
        try {
            const vaccine_application = await prisma.applications.findUnique({
                where: { id: Number(id) },
                include: {
                    animal: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                    vaccine: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                    veterinary: {
                        select: {
                            id: true,
                            user: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            });
            if (!vaccine_application) {
                throw new Error(`Aplicação de Vacina com ID ${id} não encontrado.`);
            }
            return vaccine_application;
        } catch (error) {
            console.error(`Erro ao buscar aplicação de vacina com ID ${id}`, error);
            throw error;

        }
    },
    async createVaccineApplication(data) {
        try {
            const requiredFields = ['animal_id', 'vaccine_id', 'veterinary_id', 'application_date', 'status_vaccine_application'];
            for (const field of requiredFields) {
                if (data[field] === undefined || data[field] === null || data[field] === '') {
                    throw new Error(`O campo '${field}' é obrigatório.`);
                }
            }
            if (isNaN(Number(data.animal_id))) {
                throw new Error("O campo 'animal_id' deve ser um número.");
            }
            if (isNaN(Number(data.vaccine_id))) {
                throw new Error("O campo 'vaccine_id' deve ser um número.");
            }
            if (isNaN(Number(data.veterinary_id))) {
                throw new Error("O campo 'veterinary_id' deve ser um número.");
            }
            if(data.animal_id <= 0 ) {
                throw new Error("O campo 'animal_id' deve ser positivo e maior que zero.")
            }
            if(data.vaccine_id <= 0 ) {
                throw new Error("O campo 'vaccine_id' deve ser positivo e maior que zero.")
            }
            if(data.veterinary_id <= 0 ) {
                throw new Error("O campo 'veterinary_id' deve ser positivo e maior que zero.")
            }

            const application_date = new Date(data.application_date);

            if (isNaN(application_date.getTime())) {
                throw new Error("O campo 'application_date' deve ser uma data válida.");
            }
            if (application_date > new Date()) {
                throw new Error("O campo 'application_date' não pode ser uma data futura.");
            }

            let next_application_date = null;
            if (data.next_application_date) {
                next_application_date = new Date(data.next_application_date);
                if (isNaN(next_application_date.getTime())) {
                    throw new Error("O campo 'next_application_date' deve ser uma data válida, se fornecido.");
                }
            }

            const status_vaccine_application = data.status_vaccine_application.toUpperCase();

            if (!VALID_STATUS_VACCINE_APPLICATIONS.includes(status_vaccine_application)) {
                throw new Error(`O campo 'health_status' deve ser um dos seguintes valores: ${VALID_STATUS_VACCINE_APPLICATIONS.join(', ')}`);
            }

            const newVaccineApplication = await prisma.applications.create({
                data: {
                    animal_id: Number(data.animal_id),
                    vaccine_id: Number(data.vaccine_id),
                    veterinary_id: Number(data.veterinary_id),
                    application_date: application_date,
                    next_application_date: next_application_date,
                    status_vaccine_application: status_vaccine_application
                }
            });


            return newVaccineApplication;
        } catch (error) {
            console.error("Erro ao criar animal", error);
            throw error;
        }
    }, 
    async updateVaccineApplication(id, data) {
        try {
            const existing = await prisma.applications.findUnique({ where: { id: Number(id) } });

            if (!existing) {
                throw new Error(`Aplicação de vacina com ID ${id} não encontrada.`);
            }

            const updateData = {};

            if (data.animal_id !== undefined) {
                if (isNaN(Number(data.animal_id)) || data.animal_id <= 0) {
                    throw new Error("O campo 'animal_id' deve ser um número positivo.");
                }
                updateData.animal_id = Number(data.animal_id);
            }

            if (data.vaccine_id !== undefined) {
                if (isNaN(Number(data.vaccine_id)) || data.vaccine_id <= 0) {
                    throw new Error("O campo 'vaccine_id' deve ser um número positivo.");
                }
                updateData.vaccine_id = Number(data.vaccine_id);
            }

            if (data.veterinary_id !== undefined) {
                if (isNaN(Number(data.veterinary_id)) || data.veterinary_id <= 0) {
                    throw new Error("O campo 'veterinary_id' deve ser um número positivo.");
                }
                updateData.veterinary_id = Number(data.veterinary_id);
            }

            if (data.application_date !== undefined) {
                const application_date = new Date(data.application_date);
                if (isNaN(application_date.getTime())) {
                    throw new Error("O campo 'application_date' deve ser uma data válida.");
                }
                if (application_date > new Date()) {
                    throw new Error("O campo 'application_date' não pode ser uma data futura.");
                }
                updateData.application_date = application_date;
            }

            if (data.next_application_date !== undefined) {
                const next_application_date = new Date(data.next_application_date);
                if (isNaN(next_application_date.getTime())) {
                    throw new Error("O campo 'next_application_date' deve ser uma data válida.");
                }
                updateData.next_application_date = next_application_date;
            }

            if (data.status_vaccine_application !== undefined) {
                const status = data.status_vaccine_application.toUpperCase();
                if (!VALID_STATUS_VACCINE_APPLICATIONS.includes(status)) {
                    throw new Error(`O campo 'status_vaccine_application' deve ser um dos seguintes valores: ${VALID_STATUS_VACCINE_APPLICATIONS.join(', ')}`);
                }
                updateData.status_vaccine_application = status;
            }

            const updatedApplication = await prisma.applications.update({
                where: { id: Number(id) },
                data: updateData
            });

            return updatedApplication;
        } catch (error) {
            console.error(`Erro ao atualizar aplicação de vacina com ID ${id}`, error);
            throw error;
        }
    }
}



module.exports = vaccineApplicationService;