import React, { useEffect, useState } from "react";
import { farmService } from "../../../../services/farmService";
import { Button } from "../../../ui/button";
import Card, { CardContent } from "../../../ui/card";
import { useToast } from "../../../ui/use-toast";
import {
  LivestockAnimalsTable,
  LivestockCategoriesGrid,
  LivestockHealthChart,
  LivestockStatsCards,
} from "./livestock";

function FarmLivestock({ farm, livestockData: propLivestockData }) {
  const [livestockData, setLivestockData] = useState(propLivestockData);
  const [loading, setLoading] = useState(!propLivestockData);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  // Use prop data if available, otherwise fetch
  useEffect(() => {
    if (propLivestockData) {
      setLivestockData(propLivestockData);
      setLoading(false);
      return;
    }

    const fetchLivestockData = async () => {
      if (!farm?.id) return;

      try {
        setLoading(true);
        setError(null);

        const data = await farmService.getFarmLivestockData(farm.id);
        setLivestockData(data);
      } catch (error) {
        console.error("Error fetching livestock data:", error);
        setError("Failed to load livestock data");

        // Fallback to mock data if API fails
        setLivestockData(getMockLivestockData());

        toast({
          variant: "destructive",
          title: "Warning",
          description: "Using sample data. Could not connect to server.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLivestockData();
  }, [farm?.id, propLivestockData, toast]);

  // Update data when prop changes
  useEffect(() => {
    if (propLivestockData) {
      setLivestockData(propLivestockData);
    }
  }, [propLivestockData]);

  // Mock data fallback function
  const getMockLivestockData = () => ({
    total: farm.animalCount || 0,
    categories: [
      { name: "Dairy Cows", count: 45, health: 98, color: "bg-blue-500" },
      { name: "Beef Cattle", count: 32, health: 95, color: "bg-red-500" },
      { name: "Calves", count: 18, health: 100, color: "bg-green-500" },
      { name: "Bulls", count: 3, health: 97, color: "bg-purple-500" },
    ],
    recentAnimals: [
      {
        id: 1,
        name: "Bella",
        type: "Dairy Cow",
        age: "3 years",
        health: "Excellent",
        lastCheckup: "2 days ago",
        status: "healthy",
      },
      {
        id: 2,
        name: "Thunder",
        type: "Bull",
        age: "5 years",
        health: "Good",
        lastCheckup: "1 week ago",
        status: "healthy",
      },
    ],
    healthStats: {
      excellent: 85,
      good: 12,
      needsAttention: 3,
    },
  });

  // Loading state
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="border-gray-200">
              <CardContent className="p-4">
                <div className="animate-pulse">
                  <div className="mb-2 h-4 rounded bg-gray-200"></div>
                  <div className="h-8 rounded bg-gray-200"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <div className="animate-pulse space-y-4">
              <div className="h-6 w-1/3 rounded bg-gray-200"></div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-24 rounded bg-gray-200"></div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Error state
  if (error && !livestockData) {
    return (
      <div className="p-8 text-center">
        <p className="mb-4 text-red-600">{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    );
  }

  // Use real data or fallback to mock
  const data = livestockData || getMockLivestockData();

  return (
    <div className="space-y-6">
      {/* Livestock Overview Stats */}
      <LivestockStatsCards data={data} farm={farm} />

      {/* Livestock Categories */}
      <LivestockCategoriesGrid categories={data.categories} />

      {/* Health Overview with Donut Chart */}
      <LivestockHealthChart healthStats={data.healthStats} />

      {/* Animals Table with Pagination */}
      <LivestockAnimalsTable
        animals={data.recentAnimals}
        categories={data.categories}
      />
    </div>
  );
}

export default FarmLivestock;
