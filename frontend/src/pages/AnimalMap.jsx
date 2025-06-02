import { Filter, MapPin, Search, ToggleLeft } from "lucide-react";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../components/layout/MainLayout";
import SafeAnimalMap from "../components/maps/SafeAnimalMap";

function AnimalMap() {
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");
  const [showFences, setShowFences] = useState(true);

  return (
    <>
      <Helmet>
        <title>Moovox | Animal Map</title>
        <meta name="description" content="Animal Location Map" />
      </Helmet>
      <MainLayout
        title="Animal Location Map"
        className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
      >
        <div className="mb-6 mt-6 space-y-4 md:mt-8 lg:mt-10">
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {/* Search */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search animal..."
                  className="block w-full rounded-md border border-gray-300 py-2 pl-10 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Species Filter */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full rounded-md border border-gray-300 py-2 pl-10 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={speciesFilter}
                  onChange={(e) => setSpeciesFilter(e.target.value)}
                >
                  {" "}
                  <option value="">All species</option>
                  <option value="cattle">Cattle</option>
                  <option value="swine">Swine</option>
                  <option value="poultry">Poultry</option>
                  <option value="goat">Goats</option>
                  <option value="sheep">Sheep</option>
                </select>
              </div>

              {/* Status Filter */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full rounded-md border border-gray-300 py-2 pl-10 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  {" "}
                  <option value="">All statuses</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="In Treatment">In treatment</option>
                  <option value="Quarantined">In quarantine</option>
                </select>
              </div>

              {/* Virtual Fences Toggle */}
              <div className="relative flex items-center">
                <div className="flex items-center space-x-3">
                  <ToggleLeft className="h-5 w-5 text-amber-700" />
                  <label className="text-sm font-medium">Virtual Fences</label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={showFences}
                      onChange={(e) => setShowFences(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-amber-600 focus:ring-amber-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700">
                      Show
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Screen Map */}
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow-sm">
            <div className="h-[700px] w-full">
              {" "}
              <SafeAnimalMap
                speciesFilter={speciesFilter}
                statusFilter={statusFilter}
                search={search}
                showFilters={false}
                height="680px"
                mapZoom={6}
                title="Real-Time Location Map"
                autoUpdate={true}
                updateInterval={120000}
                showVirtualFences={showFences}
                showInternalLegend={false}
              />
            </div>
          </div>

          {/* Animal Types Legend */}
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <Filter className="h-5 w-5 text-amber-800" />
              <h3 className="text-lg font-semibold text-amber-900">Legend</h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-amber-800">
                  Animal Types
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full bg-green-600"></div>
                    <span>Cattle</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full bg-red-600"></div>
                    <span>Swine</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                    <span>Poultry</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                    <span>Goats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full bg-purple-600"></div>
                    <span>Sheep</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold text-amber-800">
                  Virtual Fences
                </h4>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-lg bg-blue-500"></div>
                    <span>Main Farm</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-lg bg-green-500"></div>
                    <span>Pasture Area</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-lg bg-red-500"></div>
                    <span>Restricted Zone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Virtual Fences Information */}
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-800" />
              <h3 className="text-lg font-semibold text-amber-900">
                About Virtual Fences
              </h3>
            </div>

            <p className="mb-4 text-sm text-gray-700">
              Virtual fences define geographic boundaries for your animals. The
              system monitors when animals exit or enter these areas, allowing
              better herd control.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                <h4 className="font-semibold text-blue-800">Main Farm</h4>
                <p className="mt-1 text-xs text-gray-600">
                  Main farm area. All animals should remain within this
                  perimeter.
                </p>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-3">
                <h4 className="font-semibold text-green-800">Pasture Area</h4>
                <p className="mt-1 text-xs text-gray-600">
                  Area designated for grazing. Recommended for cattle and sheep.
                </p>
              </div>

              <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                <h4 className="font-semibold text-red-800">Restricted Zone</h4>
                <p className="mt-1 text-xs text-gray-600">
                  Restricted access area. Animals should not enter this zone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default AnimalMap;
