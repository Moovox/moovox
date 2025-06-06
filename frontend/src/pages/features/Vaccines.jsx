import { Calendar, List } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import VaccineCalendar from "../../components/features/vaccines/calendar/VaccineCalendar";
import VaccinesTable from "../../components/features/vaccines/tables/VaccinesTable";
import MainLayout from "../../components/layout/MainLayout";
import { Button } from "../../components/ui/button";
import { useToast } from "../../components/ui/use-toast";
import { useFarm } from "../../context/FarmContext";
import { vaccineService } from "../../services/vaccineService";

function Vaccines() {
  const [vaccines, setVaccines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("list"); // "list" or "calendar"
  const { toast } = useToast();
  const { currentFarmId } = useFarm();

  const loadVaccines = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await vaccineService.getAllVaccines();

      if (result.error) {
        throw result.error;
      }

      setVaccines(result.data || []);
    } catch (error) {
      console.error("Error loading vaccines:", error);
      setError(error);

      if (
        error.message &&
        !error.message.includes("No") &&
        !error.message.includes("not found")
      ) {
        let message = "Could not load the list of vaccines.";

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

      setVaccines([]);
    } finally {
      setLoading(false);
    }
  };

  // Load vaccines when the farm changes
  useEffect(() => {
    const handleFarmChange = () => {
      loadVaccines();
    };

    window.addEventListener("farmChanged", handleFarmChange);

    return () => window.removeEventListener("farmChanged", handleFarmChange);
  }, []);

  // Load vaccines when the component mounts or when the farm changes
  useEffect(() => {
    loadVaccines();
  }, [currentFarmId]);

  const handleVaccineCreated = () => {
    loadVaccines();
  };

  const TabButton = ({ id, label, icon, isActive, onClick }) => (
    <Button
      variant={isActive ? "default" : "outline"}
      onClick={() => onClick(id)}
      className="flex items-center gap-2"
    >
      {icon}
      {label}
    </Button>
  );

  return (
    <>
      <Helmet>
        <title>Moovox | Vaccines</title>
        <meta name="description" content="Vaccine Management" />
      </Helmet>
      <MainLayout
        title="Vaccines"
        className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
      >
        <div className="mt-6 md:mt-8 lg:mt-10" />

        {/* Tab Navigation */}
        <div className="mb-6 flex gap-2 p-4">
          <TabButton
            id="list"
            label="Vaccine List"
            icon={<List className="h-4 w-4" />}
            isActive={activeTab === "list"}
            onClick={setActiveTab}
          />
          <TabButton
            id="calendar"
            label="Application Calendar"
            icon={<Calendar className="h-4 w-4" />}
            isActive={activeTab === "calendar"}
            onClick={setActiveTab}
          />
        </div>

        {/* Tab Content */}
        {activeTab === "list" ? (
          <VaccinesTable
            vaccines={vaccines}
            loading={loading}
            error={error}
            onVaccineCreated={handleVaccineCreated}
          />
        ) : (
          <div className="px-4">
            <VaccineCalendar />
          </div>
        )}
      </MainLayout>
    </>
  );
}

export default Vaccines;
