import { AlertCircle, Users } from "lucide-react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { farmService } from "../../services/farmService";
import { Button } from "../ui/button";
import FormModal from "../ui/form-modal";

/**
 * Modal inteligente para exclusão de fazenda com verificação de dependências
 * @param {Object} props
 * @param {boolean} props.open - Se o modal está aberto
 * @param {Function} props.onOpenChange - Função para alterar estado do modal
 * @param {Function} props.onConfirm - Função para confirmar exclusão
 * @param {boolean} props.loading - Se operação está em andamento
 * @param {Object} props.farm - Dados da fazenda a ser excluída
 */
function SmartFarmDeleteModal({
  open,
  onOpenChange,
  onConfirm,
  loading,
  farm,
}) {
  const [farmStats, setFarmStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(false);
  const [hasAnimals, setHasAnimals] = useState(false);
  const [hasUsers, setHasUsers] = useState(false);

  // Carrega estatísticas da fazenda quando o modal abre
  useEffect(() => {
    if (open && farm?.id) {
      loadFarmStats();
    }
  }, [open, farm?.id]);

  const loadFarmStats = async () => {
    try {
      setLoadingStats(true);
      const stats = await farmService.getFarmStats(farm.id);
      setFarmStats(stats);

      // Verifica se há animais ou usuários
      setHasAnimals(stats?.animalCount > 0 || false);
      setHasUsers(stats?.userCount > 0 || false);
    } catch (error) {
      console.error("Erro ao carregar estatísticas da fazenda:", error);
      // Em caso de erro, assume que há dependências para ser conservador
      setHasAnimals(true);
      setHasUsers(false);
    } finally {
      setLoadingStats(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm();
  };

  const canDelete = !hasAnimals && !hasUsers;

  return (
    <FormModal
      title="Confirmar Exclusão de Fazenda"
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={handleSubmit}
      loading={loading}
      submitText={canDelete ? "Excluir Fazenda" : "Não é Possível Excluir"}
      cancelText="Cancelar"
      submitDisabled={!canDelete}
    >
      <div className="flex flex-col items-center p-2 text-center">
        <AlertCircle
          className={`mb-4 h-16 w-16 ${canDelete ? "text-red-500" : "text-orange-500"}`}
        />

        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {canDelete
            ? `Tem certeza que deseja excluir a fazenda "${farm?.name}"?`
            : "Não é possível excluir esta fazenda"}
        </h3>

        {loadingStats ? (
          <div className="mb-4 flex items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-amber-300 border-t-amber-600"></div>
            <span className="ml-2 text-sm text-gray-600">
              Verificando dependências...
            </span>
          </div>
        ) : (
          <div className="mb-4 w-full space-y-3">
            {/* Estatísticas da fazenda */}
            {farmStats && (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <h4 className="mb-2 text-sm font-medium text-gray-700">
                  Status da Fazenda:
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {" "}
                  <div
                    className={`flex items-center ${hasAnimals ? "text-red-600" : "text-green-600"}`}
                  >
                    <cowHead className="mr-1 h-4 w-4" />
                    <span>{farmStats.animalCount || 0} animais</span>
                  </div>
                  <div
                    className={`flex items-center ${hasUsers ? "text-red-600" : "text-green-600"}`}
                  >
                    <Users className="mr-1 h-4 w-4" />
                    <span>{farmStats.userCount || 0} usuários</span>
                  </div>
                </div>
              </div>
            )}

            {/* Mensagens de aviso baseadas nas dependências */}
            {hasAnimals && (
              <div className="rounded-md border border-red-200 bg-red-50 p-3 text-left">
                <p className="text-sm text-red-800">
                  <strong>Atenção:</strong> Esta fazenda possui{" "}
                  {farmStats?.animalCount || "alguns"} animais vinculados. Para
                  excluir a fazenda, você deve primeiro:
                </p>
                <ul className="mt-2 list-inside list-disc text-sm text-red-700">
                  <li>Transferir os animais para outra fazenda, ou</li>
                  <li>Remover todos os animais desta fazenda</li>
                </ul>
              </div>
            )}

            {hasUsers && (
              <div className="rounded-md border border-orange-200 bg-orange-50 p-3 text-left">
                <p className="text-sm text-orange-800">
                  <strong>Atenção:</strong> Esta fazenda possui{" "}
                  {farmStats?.userCount || "alguns"} usuários com acesso.
                  Considere revogar o acesso destes usuários antes da exclusão.
                </p>
              </div>
            )}

            {canDelete && (
              <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-left">
                <p className="text-sm text-amber-800">
                  <strong>Aviso:</strong> Esta ação não pode ser desfeita. Todos
                  os dados associados à fazenda serão permanentemente excluídos.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Ações sugeridas quando não pode excluir */}
        {!canDelete && !loadingStats && (
          <div className="w-full space-y-2">
            <p className="mb-3 text-sm text-gray-600">Ações recomendadas:</p>
            <div className="space-y-2">
              {hasAnimals && (
                <Button
                  variant="outline"
                  className="w-full border-blue-300 text-blue-700 hover:bg-blue-50"
                  onClick={() => {
                    // Aqui você poderia abrir uma página de gerenciamento de animais
                    onOpenChange(false);
                    window.open(`/animals?farm=${farm.id}`, "_blank");
                  }}
                >
                  {" "}
                  <cowHead className="mr-2 h-4 w-4" />
                  Gerenciar Animais desta Fazenda
                </Button>
              )}
              {hasUsers && (
                <Button
                  variant="outline"
                  className="w-full border-purple-300 text-purple-700 hover:bg-purple-50"
                  onClick={() => {
                    // Aqui você poderia abrir uma página de gerenciamento de usuários
                    onOpenChange(false);
                    console.log(
                      "Abrir gerenciamento de usuários para fazenda:",
                      farm.id,
                    );
                  }}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Gerenciar Acesso de Usuários
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </FormModal>
  );
}

SmartFarmDeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  farm: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
  }),
};

SmartFarmDeleteModal.defaultProps = {
  loading: false,
  farm: null,
};

export default SmartFarmDeleteModal;
