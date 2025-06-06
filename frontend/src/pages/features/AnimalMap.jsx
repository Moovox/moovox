import { Filter, MapPin, Search } from "lucide-react";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { SimpleMap } from "../../components/features/map/SimpleMap";
import { MapLegend } from "../../components/features/map/components/MapLegend";
import MainLayout from "../../components/layout/MainLayout";

/**
 * Clean and organized version of the animal map page
 */
const AnimalMap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [mapData, setMapData] = useState({ animals: [], loading: true, error: null });

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleCloseAnimalDetails = () => {
    setSelectedAnimal(null);
  };

  const handleMapDataUpdate = (data) => {
    setMapData(data);
  };

  return (
    <>
      <Helmet>
        <title>Moovox | Animal Map</title>
        <meta name="description" content="Real-time animal location visualization" />
      </Helmet>

      <MainLayout
        title="Animal Map"
        className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
      >
        <div className="space-y-4">
          {/* Controls bar */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-amber-200/50 p-4 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-600" />
                <span className="font-medium text-gray-700">
                  Real-time visualization
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search animal..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  />
                </div>

                {/* Filters button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Container with side legend */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Main map */}
            <div className="lg:col-span-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-amber-200/50 overflow-hidden shadow-lg">
                <SimpleMap
                  height="calc(100vh - 280px)"
                  showControls={true}
                  showLegend={false}
                  showVirtualFences={true}
                  onAnimalClick={handleAnimalClick}
                  onDataUpdate={handleMapDataUpdate}
                  className="w-full"
                />
              </div>
            </div>

            {/* Side legend */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <MapLegend 
                  animals={mapData.animals} 
                  loading={mapData.loading} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Animal details modal */}
        {selectedAnimal && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden">
              <div className="bg-amber-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    🐾 {selectedAnimal.identification}
                  </h3>
                  <button
                    onClick={handleCloseAnimalDetails}
                    className="text-white hover:text-amber-200 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-500">Nome:</span>
                  <p className="text-gray-800">{selectedAnimal.name}</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-500">Species:</span>
                  <p className="text-gray-800">
                    {selectedAnimal.species === "cattle" ? "Bovino" :
                     selectedAnimal.species === "swine" ? "Suíno" :
                     selectedAnimal.species === "poultry" ? "Ave" : selectedAnimal.species}
                  </p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-500">Weight:</span>
                  <p className="text-gray-800">{selectedAnimal.weight} kg</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-500">Status:</span>
                  <p className={`font-medium ${
                    selectedAnimal.status?.includes("Tratamento") ? "text-red-600" : "text-green-600"
                  }`}>
                    {selectedAnimal.status}
                  </p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-500">Location:</span>
                  <p className="text-xs text-gray-600">
                    {selectedAnimal.latitude.toFixed(6)}, {selectedAnimal.longitude.toFixed(6)}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4">
                <button
                  onClick={handleCloseAnimalDetails}
                  className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </MainLayout>
    </>
  );
};

export default AnimalMap; 