import { format } from "date-fns";
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
} from "lucide-react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { farmService } from "../../services/farmService";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useToast } from "../ui/use-toast";

/**
 * Component to display farm details
 * @param {Object} props
 * @param {number|string} props.farmId - ID of the farm to display
 * @param {Function} props.onClose - Function to call when the user wants to close details
 */
function FarmDetails({ farmId, onClose }) {
  const [farm, setFarm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadFarm = async () => {
      if (!farmId) {
        setError("No farm ID provided");
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

    loadFarm();
  }, [farmId, toast]);

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
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Mock data for demonstration - in a real app this would come from the API
  const sustainabilityData = {
    preservationArea: "45.5",
    renewableSources: ["Solar Energy", "Biomass", "Wind Power"],
  };

  const farmingPractices = [
    {
      name: "Crop Rotation",
      description: "Alternating crops to maintain soil fertility",
    },
    {
      name: "Reduced Tillage",
      description: "Minimizing soil disturbance to prevent erosion",
    },
    {
      name: "Precision Agriculture",
      description: "Using technology to optimize resource use",
    },
  ];

  // Format dates for display
  const formattedCreationDate = farm.createdAt
    ? format(new Date(farm.createdAt), "MMMM d, yyyy")
    : "Not available";

  return (
    <div className="space-y-6 p-4">
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
          className="border-amber-300 text-amber-800 hover:bg-amber-50"
          onClick={onClose}
        >
          Back to List
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Basic Information Card */}
        <Card className="border-amber-200">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center">
              <Building2 className="mr-2 h-5 w-5 text-amber-700" />
              <h3 className="text-lg font-semibold text-amber-900">
                Farm Information
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-amber-800">ID:</span>
                <span className="font-medium">{farm.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">Size:</span>
                <div className="flex items-center">
                  <Ruler className="mr-1 h-4 w-4 text-amber-600" />
                  <span className="font-medium">{farm.size} hectares</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-800">Created:</span>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4 text-amber-600" />
                  <span className="font-medium">{formattedCreationDate}</span>
                </div>
              </div>
            </div>

            {farm.description && (
              <div className="mt-4 border-t border-amber-100 pt-4">
                <h4 className="mb-2 text-sm font-medium text-amber-800">
                  Description
                </h4>
                <p className="text-sm text-gray-700">{farm.description}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Animals Card */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center">
              <Tractor className="mr-2 h-5 w-5 text-green-700" />
              <h3 className="text-lg font-semibold text-green-900">
                Animal Statistics
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-green-100 bg-white p-3 shadow-sm">
                <span className="mb-1 block text-sm text-green-700">
                  Total Animals
                </span>
                <span className="text-xl font-bold text-green-800">
                  {farm.animalCount || 0}
                </span>
              </div>
              <div className="rounded-lg border border-green-100 bg-white p-3 shadow-sm">
                <span className="mb-1 block text-sm text-green-700">
                  Species
                </span>
                <span className="text-xl font-bold text-green-800">
                  {farm.speciesCount || 0}
                </span>
              </div>

              {farm.animalTypes && farm.animalTypes.length > 0 && (
                <div className="col-span-2 rounded-lg border border-green-100 bg-white p-3 shadow-sm">
                  <span className="mb-2 block text-sm text-green-700">
                    Distribution
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {farm.animalTypes.map((type, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
                      >
                        {type.name}: {type.count}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Users Card */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center">
              <Users2 className="mr-2 h-5 w-5 text-blue-700" />
              <h3 className="text-lg font-semibold text-blue-900">
                User Access
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-blue-800">Total Users:</span>
                <span className="font-medium">{farm.userCount || 0}</span>
              </div>

              {farm.userRoles && (
                <div className="border-t border-blue-100 pt-3">
                  <h4 className="mb-2 text-sm font-medium text-blue-800">
                    Access By Role
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(farm.userRoles).map(([role, count]) => (
                      <div
                        key={role}
                        className="flex items-center justify-between"
                      >
                        <span className="text-blue-700">{role}:</span>
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <Button
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
                size="sm"
              >
                Manage Users
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sustainability Card */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center">
              <Leaf className="mr-2 h-5 w-5 text-green-700" />
              <h3 className="text-lg font-semibold text-green-900">
                Sustainability
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-green-800">Preservation Area:</span>
                <span className="rounded-full bg-green-700 px-2 py-1 text-xs font-medium text-white">
                  {sustainabilityData.preservationArea} hectares
                </span>
              </div>
              <div>
                <span className="mb-2 block text-green-800">
                  Energy sources:
                </span>
                <div className="flex flex-wrap gap-2">
                  {sustainabilityData.renewableSources.map((source, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-green-700 px-2 py-1 text-xs text-white"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Farming Practices */}
      <Card className="border-amber-200">
        <CardContent className="p-4">
          <div className="mb-4 flex items-center">
            <BarChart3 className="mr-2 h-5 w-5 text-amber-700" />
            <h3 className="text-lg font-semibold text-amber-900">
              Farming Practices
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {farmingPractices.map((practice, index) => (
              <div
                key={index}
                className="rounded-lg border border-amber-100 bg-amber-50 p-3"
              >
                <h4 className="mb-1 font-medium text-amber-800">
                  {practice.name}
                </h4>
                <p className="text-sm text-amber-700">{practice.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

FarmDetails.propTypes = {
  farmId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FarmDetails;
