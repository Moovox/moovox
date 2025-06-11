import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import FarmDetails from "../../components/features/farms/FarmDetails";
import PageContainer from "../../components/layout/PageContainer";

function FarmDetailsPage() {
  const { farmId } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/farms");
  };

  return (
    <PageContainer
      title="Farm Details"
      description="View detailed information about the farm"
    >
      <FarmDetails farmId={farmId} onClose={handleClose} isModal={false} />
    </PageContainer>
  );
}

export default FarmDetailsPage;
