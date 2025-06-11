import { AlertCircle, ArrowLeft, Building2, MapPin, X } from "lucide-react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { farmService } from "../../../services/farmService";
import { Button } from "../../ui/button";
import Card, { CardContent } from "../../ui/card";
import { useToast } from "../../ui/use-toast";
import { FarmActivity, FarmLivestock, FarmOverview } from "./details";

/**
 * Component to display comprehensive farm details
 * @param {Object} props
 * @param {number|string} props.farmId - ID of the farm to be displayed
 * @param {Function} props.onClose - Function to close the details
 * @param {boolean} props.isModal - Whether it should be displayed as a modal
 */
function FarmDetails({ farmId, onClose, isModal = false }) {
  const [farm, setFarm] = useState(null);
  const [livestockData, setLivestockData] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();

  useEffect(() => {
    const loadFarmData = async () => {
      if (!farmId) {
        setError("Farm ID not provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Convert farmId to number if it's a string
        const numericFarmId =
          typeof farmId === "string" ? parseInt(farmId, 10) : farmId;

        console.log("Loading farm with ID:", numericFarmId);

        // Load farm basic data
        const farmData = await farmService.getFarmById(numericFarmId);

        if (farmData) {
          setFarm(farmData);

          // Load livestock and users data in parallel
          try {
            const [livestock, users] = await Promise.all([
              farmService.getFarmLivestockData(numericFarmId),
              farmService.getFarmUsersData(numericFarmId),
            ]);

            setLivestockData(livestock);
            setUsersData(users);

            // Update farm data with real counts
            setFarm((prevFarm) => ({
              ...prevFarm,
              animalCount: livestock.total,
              userCount: users.total,
            }));
          } catch (dataError) {
            console.warn("Could not load additional farm data:", dataError);
            // Use fallback values if detailed data fails
            setLivestockData({
              total: farmData.animalCount || 0,
              categories: [],
              recentAnimals: [],
              healthStats: { excellent: 0, good: 0, needsAttention: 0 },
            });
            setUsersData({ total: farmData.userCount || 0, users: [] });
          }
        } else {
          throw new Error("Failed to load farm details");
        }
      } catch (error) {
        console.error("Error loading farm details:", error);
        setError(
          error.message || "An error occurred while loading farm details",
        );

        toast({
          variant: "destructive",
          title: "Error",
          description: error.message || "Failed to load farm details",
        });
      } finally {
        setLoading(false);
      }
    };

    loadFarmData();
  }, [farmId, toast]);

  // Function to format date in English
  const formatDate = (dateString) => {
    if (!dateString) return "Not available";

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return "Invalid date";
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-amber-200 border-t-amber-600"></div>
          <p className="text-amber-800">Loading farm details...</p>
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
                Error Loading Farm
              </h3>
              <p className="mb-4 text-red-600">{error || "Farm not found"}</p>
              <Button
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-100"
                onClick={onClose}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Sustainability data (simulated for demonstration)
  const sustainabilityData = {
    preservationArea: "45.5",
    renewableSources: ["Solar Energy", "Biomass", "Wind Energy"],
  };

  const farmingPractices = [
    {
      name: "Crop Rotation",
      description: "Alternating crops to maintain soil fertility",
    },
    {
      name: "No-Till Farming",
      description: "Minimizing soil disturbance to prevent erosion",
    },
    {
      name: "Precision Agriculture",
      description: "Using technology to optimize resource usage",
    },
  ];

  // Format dates for display
  const formattedCreationDate = formatDate(farm.createdAt);

  const tabs = [
    { id: "overview", label: "Overview", icon: Building2 },
    { id: "livestock", label: "Livestock", icon: Building2 },
    { id: "activity", label: "Activity", icon: Building2 },
  ];

  const containerClass = isModal
    ? "max-h-[80vh] overflow-y-auto"
    : "space-y-6 p-4";

  return (
    <div className={containerClass}>
      {/* Enhanced Header */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 p-6 text-white shadow-lg">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-2 flex items-center">
                <Building2 className="mr-3 h-8 w-8" />
                <h1 className="text-3xl font-bold">{farm.name}</h1>
              </div>
              <div className="flex items-center text-orange-100">
                <MapPin className="mr-2 h-5 w-5" />
                <span className="text-lg">{farm.location}</span>
              </div>
              {farm.description && (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-orange-100">
                  {farm.description}
                </p>
              )}
            </div>
            <Button
              variant="ghost"
              size={isModal ? "sm" : "default"}
              className="border-white/30 text-white hover:bg-white/20"
              onClick={onClose}
            >
              {isModal ? (
                <X className="h-5 w-5" />
              ) : (
                <>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Farms
                </>
              )}
            </Button>
          </div>

          {/* Quick Stats - Updated with real data */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white/20 p-4 backdrop-blur-sm">
              <p className="text-sm text-orange-100">Total Animals</p>
              <p className="text-2xl font-bold">
                {livestockData?.total ?? farm.animalCount ?? 0}
              </p>
            </div>
            <div className="rounded-lg bg-white/20 p-4 backdrop-blur-sm">
              <p className="text-sm text-orange-100">Farm Size</p>
              <p className="text-2xl font-bold">{farm.size} ha</p>
            </div>
            <div className="rounded-lg bg-white/20 p-4 backdrop-blur-sm">
              <p className="text-sm text-orange-100">Active Users</p>
              <p className="text-2xl font-bold">
                {usersData?.total ?? farm.userCount ?? 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Tab Navigation */}
      <div className="rounded-lg border-b border-gray-200 bg-white shadow-sm">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center border-b-2 px-1 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "border-amber-500 text-amber-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                <Icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content - Pass data to child components */}
      <div className="mt-6">
        {activeTab === "overview" && (
          <FarmOverview farm={farm} usersData={usersData} />
        )}
        {activeTab === "livestock" && (
          <FarmLivestock farm={farm} livestockData={livestockData} />
        )}
        {activeTab === "activity" && <FarmActivity farm={farm} />}
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
