import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../components/ui/use-toast";
import { useAuth } from "../context/AuthContext";
import { dashboardService } from "../services/dashboardService";

export function useDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

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
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user) {
      fetchDashboardData();
      const interval = setInterval(fetchDashboardData, 5 * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [user]);

  return {
    stats,
    ultimosUsuarios,
    dosesMensagem,
    telemetria,
    loading,
    error,
    fetchDashboardData,
  };
}
