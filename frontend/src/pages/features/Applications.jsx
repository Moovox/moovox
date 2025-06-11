import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ApplicationsTable from "../../components/features/applications/tables/ApplicationsTable";
import MainLayout from "../../components/layout/MainLayout";
import { useToast } from "../../components/ui/use-toast";
import { useFarm } from "../../context/FarmContext";
import { applicationService } from "../../services/applicationService";

function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();
  const { currentFarmId } = useFarm();

  const loadApplications = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await applicationService.getAllApplications();

      if (result.error) {
        throw result.error;
      }

      setApplications(result.data || []);
    } catch (error) {
      console.error("Error loading applications:", error);
      setError(error);

      if (
        error.message &&
        !error.message.includes("No") &&
        !error.message.includes("not found")
      ) {
        let message = "Could not load the list of applications.";

        if (error.response?.status === 401) {
          message = "Session expired. Please login again.";
        } else if (error.message) {
          message = error.message;
        }

        toast({
          variant: "destructive",
          title: "Error",
          description: message,
        });
      }

      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  // Load applications when the farm changes
  useEffect(() => {
    const handleFarmChange = () => {
      loadApplications();
    };

    window.addEventListener("farmChanged", handleFarmChange);

    return () => window.removeEventListener("farmChanged", handleFarmChange);
  }, []);

  // Load applications when the component mounts or when the farm changes
  useEffect(() => {
    loadApplications();
  }, [currentFarmId]);

  const handleApplicationCreated = () => {
    loadApplications();
  };

  return (
    <>
      <Helmet>
        <title>Moovox | Applications</title>
        <meta name="description" content="Vaccine Applications Management" />
      </Helmet>
      <MainLayout
        title="Applications"
        className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
      >
        <div className="mt-6 md:mt-8 lg:mt-10" />
        <ApplicationsTable
          applications={applications}
          loading={loading}
          error={error}
          onApplicationCreated={handleApplicationCreated}
        />
      </MainLayout>
    </>
  );
}

export default Applications;
