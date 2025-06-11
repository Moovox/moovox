import { Activity, Search, TrendingUp } from "lucide-react";
import React, { useMemo, useState } from "react";
import PaginationInfo from "../../../../shared/PaginationInfo";
import { Button } from "../../../../ui/button";
import Card, { CardContent } from "../../../../ui/card";
import { Input } from "../../../../ui/input";

function LivestockAnimalsTable({ animals, categories }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter animals based on search and category
  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesSearch = animal.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" ||
        animal.type.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    });
  }, [animals, searchTerm, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredAnimals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAnimals = filteredAnimals.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const getStatusColor = (status) => {
    switch (status) {
      case "healthy":
        return "text-green-600 bg-green-100";
      case "attention":
        return "text-orange-600 bg-orange-100";
      case "sick":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <Card className="border-slate-200">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <Activity className="mr-3 h-6 w-6 text-slate-700" />
            <h3 className="text-xl font-semibold text-slate-900">
              Animal Records
            </h3>
            <span className="ml-2 text-sm text-gray-500">
              ({filteredAnimals.length} animals)
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-slate-700 hover:bg-slate-100"
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            View All
          </Button>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search animals by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category.name.toLowerCase()}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Animals Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 text-left font-medium text-gray-900">
                  Name
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">
                  Age
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">
                  Health Status
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-900">
                  Last Checkup
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedAnimals.map((animal) => (
                <tr
                  key={animal.id}
                  className="border-b border-gray-100 transition-colors hover:bg-gray-50"
                >
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {animal.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{animal.type}</td>
                  <td className="px-4 py-3 text-gray-600">{animal.age}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                        animal.status,
                      )}`}
                    >
                      {animal.health}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {animal.lastCheckup}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredAnimals.length === 0 && (
          <div className="py-8 text-center text-gray-500">
            <Activity className="mx-auto mb-3 h-12 w-12 text-gray-300" />
            <p className="mb-1 text-lg font-medium text-gray-600">
              No animals found
            </p>
            <p className="text-sm text-gray-500">
              {searchTerm || selectedCategory !== "all"
                ? "Try adjusting your search criteria"
                : "No animals have been added to this farm yet"}
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredAnimals.length > 0 && (
          <PaginationInfo
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredAnimals.length}
            itemName="animals"
          />
        )}
      </CardContent>
    </Card>
  );
}

export default LivestockAnimalsTable;
