const { PrismaClient } = require('../../../generated/prisma');
const prisma = new PrismaClient();

const getStats = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: 'Usuário não autenticado' });
        }

        let whereClause = {};
        let applicationWhereClause = {};
        
        if (req.user.role !== 'ADMIN') {
            whereClause.farm_id = req.user.farm_id;
            applicationWhereClause = {
                animal: {
                    farm_id: req.user.farm_id
                }
            };
        }

        const [totalUsers, totalAnimals, pendingVaccines, healthAlerts] = await Promise.all([
            prisma.Users.count({
                where: req.user.role === 'ADMIN' ? {} : { farm_id: req.user.farm_id }
            }),
            prisma.Animals.count({
                where: whereClause
            }),
            prisma.Applications.count({
                where: {
                    ...applicationWhereClause,
                    status_vaccine_application: 'PENDING',
                    application_date: {
                        lte: new Date()
                    }
                }
            }),
            prisma.Animals.count({
                where: {
                    ...whereClause,
                    health_status: 'ALERT'
                }
            })
        ]);

        res.json({
            totalUsers,
            totalAnimals,
            pendingVaccines,
            healthAlerts
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estatísticas do dashboard' });
    }
};

const getLatestUsers = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: 'Usuário não autenticado' });
        }

        let whereClause = {};
        if (req.user.role !== 'ADMIN') {
            whereClause.farm_id = req.user.farm_id;
        }

        const users = await prisma.Users.findMany({
            where: whereClause,
            take: 5,
            orderBy: {
                created_at: 'desc'
            },
            select: {
                id: true,
                name: true,
                role: true,
                created_at: true,
                farm: {
                    select: {
                        name: true
                    }
                }
            }
        });

        res.json({
            users: users.map(user => ({
                nome: user.name,
                papel: user.role.toLowerCase(),
                dataCadastro: user.created_at,
                fazenda: user.farm.name
            }))
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar últimos usuários' });
    }
};

const getPendingVaccines = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: 'Usuário não autenticado' });
        }

        let whereClause = {};
        if (req.user.role !== 'ADMIN') {
            whereClause = {
                animal: {
                    farm_id: req.user.farm_id
                }
            };
        }

        const pendingVaccines = await prisma.Applications.findMany({
            where: {
                ...whereClause,
                status_vaccine_application: 'PENDING',
                application_date: {
                    lte: new Date()
                }
            },
            select: {
                id: true,
                application_date: true,
                animal: {
                    select: {
                        name: true,
                        farm: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                vaccine: {
                    select: {
                        name: true
                    }
                }
            },
            orderBy: {
                application_date: 'asc'
            },
            take: 5
        });

        res.json({
            pendingVaccines: pendingVaccines.map(pv => ({
                id: pv.id,
                animalNome: pv.animal.name,
                vacinaNome: pv.vaccine.name,
                dataAplicacao: pv.application_date,
                fazenda: pv.animal.farm.name
            }))
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar vacinas pendentes' });
    }
};

const getHealthAlerts = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: 'Usuário não autenticado' });
        }

        const alertsQuery = {
            where: {
                health_status: 'ALERT'
            },
            take: 5,
            orderBy: {
                updated_at: 'desc'
            },
            include: {
                species: true,
                breed: true,
                farm: true
            }
        };

        if (req.user.role !== 'ADMIN') {
            alertsQuery.where.farm_id = req.user.farm_id;
        }

        const alerts = await prisma.Animals.findMany(alertsQuery);

        res.json({
            alerts: alerts.map(alert => ({
                id: alert.id,
                nome: alert.name,
                especie: alert.species.name,
                raca: alert.breed.name,
                fazenda: alert.farm.name,
                dataAlerta: alert.updated_at
            }))
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar alertas de saúde' });
    }
};

const getAnimalTelemetry = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: 'Usuário não autenticado' });
        }

        const telemetryQuery = {
            orderBy: {
                captured_at: 'desc'
            },
            include: {
                animal: {
                    include: {
                        farm: true
                    }
                }
            }
        };

        if (req.user.role !== 'ADMIN') {
            telemetryQuery.where = {
                animal: {
                    farm_id: req.user.farm_id
                }
            };
        }

        const latest = await prisma.Locations.findFirst(telemetryQuery);

        if (!latest) {
            return res.json({ latest: null });
        }

        res.json({
            latest: {
                animalNome: latest.animal.name,
                latitude: latest.latitude,
                longitude: latest.longitude,
                timestamp: latest.captured_at,
                fazenda: latest.animal.farm.name
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados de telemetria' });
    }
};

module.exports = {
    getStats,
    getLatestUsers,
    getPendingVaccines,
    getHealthAlerts,
    getAnimalTelemetry
}; 