import React, { useState } from "react";
import FarmDeleteModal from "../components/features/farms/FarmDeleteModal";
import FarmDetailsModal from "../components/features/farms/FarmDetailsModal";
import FarmEditModal from "../components/features/farms/FarmEditModal";
import FarmsHeader from "../components/features/farms/FarmsHeader";
import FarmsList from "../components/features/farms/FarmsList";
import PageContainer from "../components/layout/PageContainer";
import { useFarms } from "../hooks/useFarms";

function Farms() {
  const {
    farms,
    loading,
    error,
    deletingId,
    loadFarms,
    handleSelectFarm,
    handleDeleteFarm,
  } = useFarms();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [farmToDelete, setFarmToDelete] = useState(null);
  const [farmToEdit, setFarmToEdit] = useState(null);
  const [farmToView, setFarmToView] = useState(null);

  const handleDeleteClick = (farm) => {
    setFarmToDelete(farm);
    setDeleteModalOpen(true);
  };

  const handleEditClick = (farm) => {
    setFarmToEdit(farm);
    setEditModalOpen(true);
  };

  const handleViewDetails = (farm) => {
    setFarmToView(farm);
    setDetailsModalOpen(true);
  };

  const confirmDeleteFarm = async () => {
    if (!farmToDelete) return;

    await handleDeleteFarm(farmToDelete.id);
    setDeleteModalOpen(false);
    setFarmToDelete(null);
  };

  const handleEditSuccess = () => {
    setEditModalOpen(false);
    setFarmToEdit(null);
    loadFarms();
  };

  const handleDetailsClose = () => {
    setDetailsModalOpen(false);
    setFarmToView(null);
  };

  return (
    <PageContainer
      title="Fazendas"
      description="Gerenciamento de Fazendas"
      loading={loading}
      error={error}
      onRetry={loadFarms}
    >
      <FarmsHeader farms={farms} onRefresh={loadFarms} />

      <FarmsList
        farms={farms}
        onSelectFarm={handleSelectFarm}
        onEditFarm={handleEditClick}
        onDeleteFarm={handleDeleteClick}
        onViewDetails={handleViewDetails}
        onRefresh={loadFarms}
        deletingId={deletingId}
      />

      {/* Modal de exclusão */}
      <FarmDeleteModal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        onConfirm={confirmDeleteFarm}
        loading={deletingId !== null}
        farm={farmToDelete}
      />

      {/* Modal de edição */}
      {farmToEdit && (
        <FarmEditModal
          open={editModalOpen}
          onOpenChange={setEditModalOpen}
          farm={farmToEdit}
          onSuccess={handleEditSuccess}
        />
      )}

      {/* Modal de detalhes */}
      <FarmDetailsModal
        farm={farmToView}
        open={detailsModalOpen}
        onOpenChange={setDetailsModalOpen}
      />
    </PageContainer>
  );
}

export default Farms;
