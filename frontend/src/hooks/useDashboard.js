import { useCallback, useEffect, useState } from "react";
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
    location: "",
    fazenda: "",
    lastUpdate: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboardData = useCallback(async () => {
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

      const pendingCount = vaccinesData.pendingVaccines?.length || 0;

      setDosesMensagem(
        pendingCount > 0
          ? `${pendingCount} dose${pendingCount > 1 ? "s" : ""} pending for application.`
          : "No pending doses.",
      );

      if (telemetryData.latest) {
        const location =
          telemetryData.latest.latitude && telemetryData.latest.longitude
            ? `${telemetryData.latest.latitude.toFixed(6)}, ${telemetryData.latest.longitude.toFixed(6)}`
            : "Não disponível";

        setTelemetria({
          animal: telemetryData.latest.animalNome || "",
          location: location,
          fazenda: telemetryData.latest.fazenda || "",
          lastUpdate: telemetryData.latest.timestamp
            ? new Date(telemetryData.latest.timestamp).toLocaleString("pt-BR")
            : "",
        });
      } else {
        setTelemetria({
          animal: "",
          location: "",
          fazenda: "",
          lastUpdate: "",
        });
      }
    } catch (err) {
      console.error("Erro ao carregar dados do dashboard:", err);

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
  }, [user, logout, navigate, toast]);

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
  }, [user, fetchDashboardData]);

  return {
    stats,
    ultimosUsuarios,
    dosesMensagem,
    telemetria,
    loading,
    error,
    fetchDashboardData,
    refetch: fetchDashboardData,
  };
}
