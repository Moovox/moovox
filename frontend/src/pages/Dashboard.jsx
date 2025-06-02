import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  CircleDot,
  MapPin,
  Syringe,
  User2 as Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import MainLayout from "../components/MainLayout";
import SafeAnimalMap from "../components/SafeAnimalMap";
import Card from "../components/ui/card";
import { useToast } from "../components/ui/use-toast";
import { dashboardService } from "../services/dashboardService";
import "../styles/dashboard.css";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    usuarios: 0,
    animais: 0,
    dosesPendentes: 0,
    alertas: 0,
  });
  const [ultimosUsuarios, setUltimosUsuarios] = useState([]);
  const [dosesMensagem, setDosesMensagem] = useState("");
  const [telemetria, setTelemetria] = useState({
    animal: "",
    temperature: "",
    heartRate: "",
    lastUpdate: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  const fetchDashboardData = async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);

      const [statsData, usersData, vaccinesData, telemetryData] =
        await Promise.all([
          dashboardService.getStats(),
          dashboardService.getLatestUsers(),
          dashboardService.getPendingVaccines(),
          dashboardService.getAnimalTelemetry(),
        ]);

      setStats({
        usuarios: statsData.totalUsers || 0,
        animais: statsData.totalAnimals || 0,
        dosesPendentes: statsData.pendingVaccines || 0,
        alertas: statsData.healthAlerts || 0,
      });

      setUltimosUsuarios(usersData.users || []);

      setDosesMensagem(
        vaccinesData.pendingCount > 0
          ? `${vaccinesData.pendingCount} doses pendentes para aplicação.`
          : "Nenhuma dose pendente.",
      );

      if (telemetryData.latest) {
        setTelemetria({
          animal: telemetryData.latest.animalName || "",
          temperature: telemetryData.latest.temperature
            ? `${telemetryData.latest.temperature}ºC`
            : "",
          heartRate: telemetryData.latest.heartRate
            ? `${telemetryData.latest.heartRate} bpm`
            : "",
          lastUpdate: telemetryData.latest.timestamp
            ? new Date(telemetryData.latest.timestamp).toLocaleString("pt-BR")
            : "",
        });
      }
    } catch (err) {
      if (err.response?.status === 401) {
        logout();
        navigate("/login");
        return;
      }

      setError("Não foi possível carregar alguns dados do dashboard.");
      toast({
        variant: "destructive",
        title: "Erro ao carregar dados",
        description: "Ocorreu um erro ao carregar as informações do dashboard.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchDashboardData();
      const interval = setInterval(fetchDashboardData, 5 * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [user]);

  const cardAnimation = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  const mainCards = [
    {
      variant: "terra",
      icon: <Users className="h-8 w-8 text-black" />,
      title: "Usuários",
      value: stats.usuarios.toString(),
    },
    {
      variant: "verde",
      icon: <CircleDot className="h-8 w-8 text-black" />,
      title: "Animais Registrados",
      value: stats.animais.toString(),
    },
    {
      variant: "palha",
      icon: <Syringe className="h-8 w-8 text-black" />,
      title: "Doses Pendentes",
      value: stats.dosesPendentes.toString(),
    },
    {
      variant: "alerta",
      icon: <AlertTriangle className="h-8 w-8 text-black" />,
      title: "Alertas de Saúde",
      value: stats.alertas.toString(),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Moovox | Dashboard</title>
        <meta name="description" content="Moovox Dashboard" />
      </Helmet>
      <div>
        <MainLayout
          title="Painel do Administrador"
          className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
        >
          <div className="mt-4 sm:mt-6 md:mt-8" />
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex min-h-[200px] w-full items-center justify-center sm:min-h-[300px]"
            >
              <span className="animate-pulse font-poppins text-base text-[#4e2e13] sm:text-lg">
                Carregando dados...
              </span>
            </motion.div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex min-h-[200px] w-full items-center justify-center sm:min-h-[300px]"
            >
              <span className="font-poppins text-base text-red-600 sm:text-lg">
                {error}
              </span>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 space-y-4 overflow-hidden pb-6 sm:mb-6 sm:space-y-6 sm:pb-10 md:space-y-8"
            >
              {/* Cards principais */}
              <div className="grid grid-cols-2 gap-3 overflow-visible sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-6">
                {mainCards.map((card) => (
                  <motion.div
                    key={card.title}
                    whileHover={cardAnimation.hover}
                    whileTap={cardAnimation.tap}
                    className="h-full"
                  >
                    <Card
                      variant={card.variant}
                      icon={card.icon}
                      title={card.title}
                      value={card.value}
                      className="h-full transform-gpu text-center sm:text-left"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Cards secundários */}
              <div className="grid grid-cols-1 gap-4 overflow-visible sm:gap-6 md:grid-cols-2">
                <motion.div
                  whileHover={cardAnimation.hover}
                  whileTap={cardAnimation.tap}
                >
                  <Card
                    variant="rural"
                    title="Últimos Usuários Cadastrados"
                    className="h-[240px] transform-gpu sm:h-[280px]"
                  >
                    <div className="custom-scrollbar h-full overflow-y-auto py-2 sm:py-4">
                      {ultimosUsuarios.length > 0 ? (
                        ultimosUsuarios.map((user, idx) => (
                          <motion.div
                            key={user.nome + idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="rounded-lg p-2 transition-colors hover:bg-black/5"
                          >
                            <span className="block font-poppins text-xs text-black sm:text-sm md:text-base">
                              {user.nome} -{" "}
                              <span className="font-semibold">
                                {user.papel}
                              </span>
                            </span>
                          </motion.div>
                        ))
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-sm text-gray-600">
                            Nenhum usuário cadastrado recentemente
                          </span>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={cardAnimation.hover}
                  whileTap={cardAnimation.tap}
                >
                  <Card
                    variant="rural"
                    title="Doses Pendentes"
                    className="h-[240px] transform-gpu sm:h-[280px]"
                  >
                    <div className="flex h-full items-center justify-center">
                      <span className="px-4 text-center font-poppins text-base text-[#3e2c1a] sm:text-lg">
                        {dosesMensagem}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Mapa e Telemetria */}
              <div className="grid grid-cols-1 gap-4 overflow-visible sm:gap-6 md:grid-cols-2">
                <motion.div
                  whileHover={cardAnimation.hover}
                  whileTap={cardAnimation.tap}
                  className="h-full"
                >
                  <Card
                    variant="rural"
                    title="Localização dos Animais"
                    icon={
                      <MapPin className="h-5 w-5 text-black sm:h-6 sm:w-6" />
                    }
                    className="h-[250px] transform-gpu overflow-hidden sm:h-[350px] md:h-[400px]"
                  >
                    <SafeAnimalMap
                      exibirFiltros={false}
                      altura="200px"
                      alturaMd="250px"
                      alturaLg="300px"
                      mapZoom={4}
                      titulo={null}
                      exibirLegendaInterna={false}
                    />
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={cardAnimation.hover}
                  whileTap={cardAnimation.tap}
                >
                  <Card
                    variant="rural"
                    title="Telemetria do Animal"
                    icon={
                      <Activity className="h-5 w-5 text-black sm:h-6 sm:w-6" />
                    }
                    className="h-[240px] transform-gpu sm:h-[280px] md:h-[400px]"
                  >
                    {telemetria.animal ? (
                      <div className="space-y-2 p-2 sm:space-y-4 sm:p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold sm:text-base">
                            Animal:
                          </span>
                          <span className="text-sm sm:text-base">
                            {telemetria.animal}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold sm:text-base">
                            Temperatura:
                          </span>
                          <span className="text-sm sm:text-base">
                            {telemetria.temperature}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold sm:text-base">
                            Batimentos:
                          </span>
                          <span className="text-sm sm:text-base">
                            {telemetria.heartRate}
                          </span>
                        </div>
                        <div className="mt-4 text-right text-xs text-gray-500 sm:text-sm">
                          Última atualização: {telemetria.lastUpdate}
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="px-4 text-center text-sm text-gray-600">
                          Nenhum dado de telemetria disponível
                        </span>
                      </div>
                    )}
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          )}
        </MainLayout>
      </div>
    </>
  );
}

export default Dashboard;
