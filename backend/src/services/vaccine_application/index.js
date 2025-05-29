const prisma = require('../../config/database');


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
                            name: true,
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
                            name: true,
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
    }
}



module.exports = vaccineApplicationService;