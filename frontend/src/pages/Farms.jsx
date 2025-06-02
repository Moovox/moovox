import {
  AlertCircle,
  BuildingIcon,
  Edit,
  Loader2,
  Map,
  Plus,
  Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../components/layout/MainLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useToast } from "../components/ui/use-toast";
import { useFarm } from "../context/FarmContext";
import { farmService } from "../services/farmService";

function Farms() {
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const { toast } = useToast();
  const { setCurrentFarm } = useFarm();

  const loadFarms = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await farmService.getAllFarms();
      setFarms(response.data || []);
    } catch (error) {
      console.error("Error loading farms:", error);
      setError(error.message || "Failed to load farms");

      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to load farms. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFarms();
  }, []);

  const handleSelectFarm = (farm) => {
    if (!farm.id) return;

    setCurrentFarm(farm);

    toast({
      title: "Farm Selected",
      description: `You are now working with "${farm.name}"`,
      variant: "success",
    });
  };

  const handleDeleteFarm = async (id, name) => {
    if (
      !window.confirm(
        `Are you sure you want to delete the farm "${name}"? This action cannot be undone.`,
      )
    ) {
      return;
    }

    setDeletingId(id);

    try {
      await farmService.deleteFarm(id);

      toast({
        title: "Success",
        description: "Farm deleted successfully!",
        variant: "success",
      });

      // Reload the farms list
      loadFarms();
    } catch (error) {
      console.error("Error deleting farm:", error);

      toast({
        title: "Error",
        description:
          error.message || "An error occurred while deleting the farm",
        variant: "destructive",
      });
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Moovox | Farms</title>
          <meta name="description" content="Farm Management" />
        </Helmet>
        <MainLayout
          title="Farms"
          className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
        >
          <div className="flex h-64 items-center justify-center">
            <div className="flex flex-col items-center">
              <Loader2 className="mb-4 h-12 w-12 animate-spin text-amber-700" />
              <p className="text-lg text-amber-800">Loading farms...</p>
            </div>
          </div>
        </MainLayout>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>Moovox | Farms</title>
          <meta name="description" content="Farm Management" />
        </Helmet>
        <MainLayout
          title="Farms"
          className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
        >
          <div className="flex h-64 items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <AlertCircle className="mb-4 h-12 w-12 text-red-600" />
              <p className="mb-2 text-lg font-semibold text-red-600">
                Error loading farms
              </p>
              <p className="max-w-md text-gray-700">{error}</p>
              <Button
                className="mt-4 bg-amber-600 hover:bg-amber-700"
                onClick={loadFarms}
              >
                Try Again
              </Button>
            </div>
          </div>
        </MainLayout>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Moovox | Farms</title>
        <meta name="description" content="Farm Management" />
      </Helmet>
      <MainLayout
        title="Farms"
        className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
      >
        <div className="mb-6 mt-6 space-y-6 md:mt-8 lg:mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-amber-900">Your Farms</h2>
            <Button className="bg-amber-600 text-white hover:bg-amber-700">
              <Plus className="mr-1 h-4 w-4" />
              Add Farm
            </Button>
          </div>

          {farms.length === 0 ? (
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <BuildingIcon className="mx-auto mb-4 h-12 w-12 text-amber-200" />
              <h3 className="mb-2 text-lg font-semibold text-amber-900">
                No Farms Found
              </h3>
              <p className="mb-6 text-gray-600">
                You don't have any farms registered yet.
              </p>
              <Button className="bg-amber-600 text-white hover:bg-amber-700">
                <Plus className="mr-1 h-4 w-4" />
                Register Your First Farm
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {farms.map((farm) => (
                <Card
                  key={farm.id}
                  className="flex flex-col overflow-hidden border border-amber-100"
                >
                  <div className="relative h-48 overflow-hidden bg-amber-50">
                    {farm.imageUrl ? (
                      <img
                        src={farm.imageUrl}
                        alt={farm.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-amber-100">
                        <BuildingIcon className="h-16 w-16 text-amber-300" />
                      </div>
                    )}

                    <div className="absolute right-2 top-2 flex gap-1">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-white/80 hover:bg-white"
                        title="Edit Farm"
                      >
                        <Edit className="h-4 w-4 text-amber-700" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-white/80 hover:bg-white"
                        title="Delete Farm"
                        onClick={() => handleDeleteFarm(farm.id, farm.name)}
                        disabled={deletingId === farm.id}
                      >
                        {deletingId === farm.id ? (
                          <Loader2 className="h-4 w-4 animate-spin text-red-600" />
                        ) : (
                          <Trash2 className="h-4 w-4 text-red-600" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="mb-1 text-lg font-semibold text-amber-900">
                      {farm.name}
                    </h3>
                    <p className="mb-2 line-clamp-2 flex-1 text-sm text-gray-600">
                      {farm.location || "No location information"}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                        {farm.size} hectares
                      </span>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        {farm.animalCount || 0} animals
                      </span>
                    </div>

                    <div className="mt-auto flex gap-2">
                      <Button
                        className="flex-1 bg-amber-600 text-white hover:bg-amber-700"
                        onClick={() => handleSelectFarm(farm)}
                      >
                        Select Farm
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-amber-200 text-amber-700 hover:bg-amber-50"
                        title="View Farm Map"
                      >
                        <Map className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
}

export default Farms;
