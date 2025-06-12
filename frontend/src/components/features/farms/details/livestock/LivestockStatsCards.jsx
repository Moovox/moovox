import { cowHead } from "@lucide/lab";
import { BarChart3, Heart, Icon, PieChart } from "lucide-react";
import React from "react";
import Card, { CardContent } from "../../../../ui/Card";

function LivestockStatsCards({ data, farm }) {
  // Calculate overall health percentage
  const totalAnimals =
    data.healthStats.excellent +
    data.healthStats.good +
    data.healthStats.needsAttention;
  const healthyPercentage =
    totalAnimals > 0
      ? Math.round(
          ((data.healthStats.excellent + data.healthStats.good) /
            totalAnimals) *
            100,
        )
      : 97;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-800">
                Total Animals
              </p>
              <p className="text-2xl font-bold text-green-900">{data.total}</p>
            </div>
            <Icon iconNode={cowHead} className="h-8 w-8 text-green-600" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-800">
                Avg Health Score
              </p>
              <p className="text-2xl font-bold text-blue-900">
                {healthyPercentage}%
              </p>
            </div>
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-800">Density</p>
              <p className="text-2xl font-bold text-purple-900">
                {farm.size && data.total
                  ? (data.total / farm.size).toFixed(1)
                  : "0"}
                /ha
              </p>
            </div>
            <BarChart3 className="h-8 w-8 text-purple-600" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-800">Categories</p>
              <p className="text-2xl font-bold text-orange-900">
                {data.categories.length}
              </p>
            </div>
            <PieChart className="h-8 w-8 text-orange-600" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LivestockStatsCards;
