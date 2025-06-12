import { Users } from "lucide-react";
import React from "react";
import Card, { CardContent } from "../../../../ui/Card";

function LivestockCategoriesGrid({ categories }) {
  return (
    <Card className="border-green-200">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center">
          <Users className="mr-3 h-6 w-6 text-green-700" />
          <h3 className="text-xl font-semibold text-green-900">
            Livestock by Category
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <h4 className="font-semibold text-gray-900">{category.name}</h4>
                <div className={`h-3 w-3 rounded-full ${category.color}`}></div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Count:</span>
                  <span className="font-semibold">{category.count}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Health:</span>
                  <span className="font-semibold text-green-600">
                    {category.health}%
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-green-500 transition-all duration-300"
                    style={{ width: `${category.health}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default LivestockCategoriesGrid;
