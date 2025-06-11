import {
  AlertCircle,
  BarChart3,
  Building2,
  Calendar,
  Leaf,
  MapPin,
  Ruler,
  Tractor,
  Users2,
  X,
} from "lucide-react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { farmService } from "../../../services/farmService";
import { Button } from "../../ui/button";
import Card, { CardContent } from "../../ui/card";
import { useToast } from "../../ui/use-toast";

/**
 * Componente para exibir detalhes da fazenda
 * @param {Object} props
 * @param {number|string} props.farmId - ID da fazenda a ser exibida
 * @param {Function} props.onClose - Função para fechar os detalhes
 * @param {boolean} props.isModal - Se deve ser exibido como modal
 */
function FarmDetails({ farmId, onClose, isModal = false }) {
  const [farm, setFarm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadFarm = async () => {
      if (!farmId) {
        setError("ID da fazenda não fornecido");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await farmService.getFarmById(farmId);

        if (response && response.data) {
          setFarm(response.data);
        } else {
          throw new Error("Falha ao carregar detalhes da fazenda");
        }
      } catch (error) {
        console.error("Error loading farm details:", error);
        setError(
          error.message || "Ocorreu um erro ao carregar os detalhes da fazenda",
        );

        toast({
          variant: "destructive",
          title: "Erro",
          description: error.message || "Falha ao carregar detalhes da fazenda",
        });
      } finally {
        setLoading(false);
      }
    };

    loadFarm();
  }, [farmId, toast]);

  // Função para formatar data em português
  const formatDate = (dateString) => {
    if (!dateString) return "Não disponível";

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return "Data inválida";
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-amber-200 border-t-amber-600"></div>
          <p className="text-amber-800">Carregando detalhes da fazenda...</p>
        </div>
      </div>
    );
  }

  if (error || !farm) {
    return (
      <div className="p-4">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <AlertCircle className="mb-4 h-12 w-12 text-red-500" />
              <h3 className="mb-2 text-lg font-semibold text-red-700">
                Erro ao Carregar Fazenda
              </h3>
              <p className="mb-4 text-red-600">
                {error || "Fazenda não encontrada"}
              </p>
              <Button
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-100"
                onClick={onClose}
              >
                Voltar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Dados de sustentabilidade (simulados para demonstração)
  const sustainabilityData = {
    preservationArea: "45.5",
    renewableSources: ["Energia Solar", "Biomassa", "Energia Eólica"],
  };

  const farmingPractices = [
    {
      name: "Rotação de Culturas",
      description: "Alternância de cultivos para manter a fertilidade do solo",
    },
    {
      name: "Plantio Direto",
      description: "Minimizando o distúrbio do solo para prevenir erosão",
    },
    {
      name: "Agricultura de Precisão",
      description: "Usando tecnologia para otimizar o uso de recursos",
    },
  ];

  // Formatar datas para exibição
  const formattedCreationDate = formatDate(farm.createdAt);

  const containerClass = isModal
    ? "max-h-[80vh] overflow-y-auto"
    : "space-y-6 p-4";

  return (
    <div className={containerClass}>
      {/* Cabeçalho */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-amber-900">{farm.name}</h2>
          <div className="flex items-center text-amber-700">
            <MapPin className="mr-1 h-4 w-4" />
            <span className="text-sm">{farm.location}</span>
          </div>
        </div>
        <Button
          variant="outline"
          size={isModal ? "sm" : "default"}
          className="border-amber-300 text-amber-800 hover:bg-amber-50"
          onClick={onClose}
        >
          {isModal ? <X className="h-4 w-4" /> : "Voltar à Lista"}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Card de Informações Básicas */}
        <Card className="border-amber-200">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center">
              <Building2 className="mr-2 h-5 w-5 text-amber-700" />
              <h3 className="text-lg font-semibold text-amber-900">
                Informações da Fazenda
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-amber-800">ID:</span>
                <span className="font-medium">{farm.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">Tamanho:</span>
                <div className="flex items-center">
                  <Ruler className="mr-1 h-4 w-4 text-amber-600" />
                  <span className="font-medium">{farm.size} hectares</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">Criado em:</span>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4 text-amber-600" />
                  <span className="font-medium">{formattedCreationDate}</span>
                </div>
              </div>
            </div>

            {farm.description && (
              <div className="mt-4 border-t border-amber-100 pt-4">
                <h4 className="mb-2 text-sm font-medium text-amber-800">
                  Descrição
                </h4>
                <p className="text-sm text-gray-700">{farm.description}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Card de Estatísticas de Animais */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center">
              <Tractor className="mr-2 h-5 w-5 text-green-700" />
              <h3 className="text-lg font-semibold text-green-900">
                Estatísticas de Animais
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-green-800">Total de Animais:</span>
                <span className="font-medium text-green-900">
                  {farm.animalCount || 0}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Usuários Vinculados:</span>
                <span className="font-medium text-green-900">
                  {farm.userCount || 0}
                </span>
              </div>
            </div>

            <div className="mt-4 rounded-md bg-green-100 p-3">
              <div className="flex items-center">
                <BarChart3 className="mr-2 h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">
                  Densidade:{" "}
                  {farm.animalCount && farm.size
                    ? (farm.animalCount / farm.size).toFixed(2)
                    : "0"}{" "}
                  animais/hectare
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Sustentabilidade */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center">
              <Leaf className="mr-2 h-5 w-5 text-blue-700" />
              <h3 className="text-lg font-semibold text-blue-900">
                Sustentabilidade
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-blue-800">
                  Área de Preservação:
                </span>
                <p className="text-sm text-blue-700">
                  {sustainabilityData.preservationArea}% da propriedade
                </p>
              </div>

              <div>
                <span className="text-sm font-medium text-blue-800">
                  Fontes Renováveis:
                </span>
                <ul className="mt-1 text-sm text-blue-700">
                  {sustainabilityData.renewableSources.map((source, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-1">•</span> {source}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card de Práticas Agrícolas */}
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center">
              <Users2 className="mr-2 h-5 w-5 text-purple-700" />
              <h3 className="text-lg font-semibold text-purple-900">
                Práticas Agrícolas
              </h3>
            </div>

            <div className="space-y-3">
              {farmingPractices.map((practice, index) => (
                <div
                  key={index}
                  className="border-b border-purple-100 pb-2 last:border-b-0"
                >
                  <h4 className="text-sm font-medium text-purple-800">
                    {practice.name}
                  </h4>
                  <p className="text-xs text-purple-600">
                    {practice.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

FarmDetails.propTypes = {
  farmId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClose: PropTypes.func.isRequired,
  isModal: PropTypes.bool,
};

export default FarmDetails;
