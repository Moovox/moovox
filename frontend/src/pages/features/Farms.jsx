import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FarmDeleteModal from "../../components/features/farms/FarmDeleteModal";
import FarmEditModal from "../../components/features/farms/FarmEditModal";
import FarmsHeader from "../../components/features/farms/FarmsHeader";
import FarmsList from "../../components/features/farms/FarmsList";
import PageContainer from "../../components/layout/PageContainer";
import { useFarms } from "../../hooks/useFarms";

function Farms() {
  const navigate = useNavigate();
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
  const [farmToDelete, setFarmToDelete] = useState(null);
  const [farmToEdit, setFarmToEdit] = useState(null);

  const handleDeleteClick = (farm) => {
    setFarmToDelete(farm);
    setDeleteModalOpen(true);
  };

  const handleEditClick = (farm) => {
    setFarmToEdit(farm);
    setEditModalOpen(true);
  };

  const handleViewDetails = (farm) => {
    navigate(`/farms/${farm.id}`);
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

  return (
    <PageContainer
      title="Farms"
      description="Farms Management"
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

      {/* Delete modal */}
      <FarmDeleteModal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        onConfirm={confirmDeleteFarm}
        loading={deletingId !== null}
        farm={farmToDelete}
      />

      {/* Edit modal */}
      {farmToEdit && (
        <FarmEditModal
          open={editModalOpen}
          onOpenChange={setEditModalOpen}
          farm={farmToEdit}
          onSuccess={handleEditSuccess}
        />
      )}
    </PageContainer>
  );
}

export default Farms;
