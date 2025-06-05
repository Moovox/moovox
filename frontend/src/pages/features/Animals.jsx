import React from "react";
import { Helmet } from "react-helmet-async";
import AnimalsTable from "../../components/features/animals/tables/AnimalsTable";
import MainLayout from "../../components/layout/MainLayout";
import { useFarm } from "../../context/FarmContext";

function Animals() {
  const { currentFarmId } = useFarm();

  return (
    <>
      <Helmet>
        <title>Moovox | Animals</title>
        <meta name="description" content="Animal Management" />
      </Helmet>
      <MainLayout
        title="Animals"
        className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
      >
        <div className="mt-6 md:mt-8 lg:mt-10" />
        <AnimalsTable farmId={currentFarmId} />
      </MainLayout>
    </>
  );
}

export default Animals;
