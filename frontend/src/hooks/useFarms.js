import { useEffect, useState } from "react";
import { useToast } from "../components/ui/use-toast";
import { useFarm } from "../context/FarmContext";
import { farmService } from "../services/farmService";

export function useFarms() {
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const { toast } = useToast();
  const { selectFarm } = useFarm();

  const loadFarms = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await farmService.listFarms();
      setFarms(response || []);
    } catch (error) {
      console.error("Error loading farms:", error);
      const errorMessage = error.message || "Falha ao carregar fazendas";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Erro",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSelectFarm = async (farm) => {
    if (!farm.id) return;

    const success = await selectFarm(farm.id);

    if (success) {
      toast({
        title: "Fazenda Selecionada",
        description: `Agora você está trabalhando com "${farm.name}"`,
        variant: "success",
      });
    } else {
      toast({
        title: "Erro",
        description: "Falha ao selecionar fazenda. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteFarm = async (farmId) => {
    setDeletingId(farmId);

    try {
      await farmService.deleteFarm(farmId);
      const farm = farms.find((f) => f.id === farmId);

      toast({
        title: "Sucesso",
        description: `Fazenda "${farm?.name}" deletada com sucesso!`,
        variant: "success",
      });

      // Recarrega a lista de fazendas
      await loadFarms();
    } catch (error) {
      console.error("Error deleting farm:", error);

      let errorMessage = "Ocorreu um erro ao deletar a fazenda";
      if (error.message) {
        errorMessage = error.message;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      toast({
        title: "Erro",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setDeletingId(null);
    }
  };

  // Função simplificada para usar com DeleteConfirmationModal
  const handleSimpleDeleteFarm = async (farm) => {
    if (!farm?.id) return false;

    setDeletingId(farm.id);

    try {
      await farmService.deleteFarm(farm.id);

      toast({
        title: "Sucesso",
        description: `Fazenda "${farm.name}" deletada com sucesso!`,
        variant: "success",
      });

      // Recarrega a lista de fazendas
      await loadFarms();
      return true;
    } catch (error) {
      console.error("Error deleting farm:", error);

      let errorMessage = "Ocorreu um erro ao deletar a fazenda";
      if (error.message) {
        errorMessage = error.message;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      toast({
        title: "Erro",
        description: errorMessage,
        variant: "destructive",
      });
      return false;
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    loadFarms();
  }, []);

  return {
    farms,
    loading,
    error,
    deletingId,
    loadFarms,
    handleSelectFarm,
    handleDeleteFarm,
    handleSimpleDeleteFarm,
  };
}
