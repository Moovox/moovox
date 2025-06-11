import api from "../utils/api";

export const animalService = {
  listAnimals: async () => {
    try {
      const farmId = localStorage.getItem("farmId");
      if (!farmId) {
        console.warn(
          "Warning: Farm ID not found in localStorage. Animals may not be filtered correctly.",
        );
      } // Use specific route /farms/:id/animals when farmId is available
      const endpoint = farmId ? `/farms/${farmId}/animals` : "/animals";
      const response = await api.get(endpoint);

      // Ensure we have an array of animals in the response
      const animalData =
        response.data && response.data.data ? response.data.data : [];

      // Ensure we're working with an array
      if (!Array.isArray(animalData)) {
        console.warn("Animal data is not an array, using empty array instead");
        return [];
      }

      // Map data to new property names with additional validation
      const animals = animalData.map((animal) => ({
        id: animal.id,
        identification: animal.identification || animal.tag || animal.id,
        name: animal.name,
        species: animal.species || animal.especie || "Unknown",
        breed: animal.breed || animal.raca || "Unknown",
        birthDate: animal.birth_date || animal.dataNascimento,
        weight: animal.weight || animal.peso || 0,
        status: animal.health_status || animal.status || "Unknown",
        // Generate random latitude/longitude for map if not available
        latitude: animal.latitude || Math.random() * 10 - 15.7801,
        longitude: animal.longitude || Math.random() * 10 - 47.9292,
        // Keep original data for compatibility
        ...animal,
      }));

      return animals;
    } catch (error) {
      console.error("Error listing animals:", error);
      throw error.response?.data || error;
    }
  },

  createAnimal: async (animal) => {
    try {
      const farmId = localStorage.getItem("farmId");
      if (!farmId) {
        throw new Error("Farm ID not found. Please select a farm first.");
      }

      // Map from frontend format to backend format
      const animalData = {
        name: animal.name,
        species_id: parseInt(animal.speciesId),
        breed_id: parseInt(animal.breedId),
        birth_date: animal.birthDate,
        weight: parseFloat(animal.weight),
        health_status: animal.status,
        farm_id: parseInt(farmId),
      };

      console.log("Sending to backend:", animalData);
      const response = await api.post("/animals", animalData);
      return response.data.data;
    } catch (error) {
      console.error("Error creating animal:", error);

      // Check error type to provide more specific messages
      if (error.response) {
        // Server responded with an error status
        if (
          error.response.status === 400 &&
          error.response.data?.code === "FARM_ERROR"
        ) {
          // Clear invalid farmId from localStorage
          localStorage.removeItem("farmId");
          throw new Error(
            error.response.data.message ||
              "The selected farm does not exist or is not available.",
          );
        }

        if (error.response.status === 404) {
          // Probably a route or resource not found error
          throw new Error("Resource not found. Check system configuration.");
        }

        if (error.response.status === 403) {
          throw new Error(
            "You do not have permission to access this resource.",
          );
        }

        // Other server errors
        throw (
          error.response.data ||
          new Error("Error processing request on server.")
        );
      } else if (error.request) {
        // Request was made but no response was received
        throw new Error(
          "Could not connect to server. Check your internet connection.",
        );
      } else {
        // Something happened in setting up the request that triggered an error
        throw error;
      }
    }
  },

  // Species mapping
  getSpecies: () => {
    return [
      { id: 1, name: "CATTLE", label: "Cattle" },
      { id: 2, name: "SWINE", label: "Swine" },
      { id: 3, name: "EQUINE", label: "Equine" },
      { id: 4, name: "POULTRY", label: "Poultry" },
      { id: 5, name: "CAPRINE", label: "Goats" },
      { id: 6, name: "OVINE", label: "Sheep" },
    ];
  },

  // Breed mapping by species
  getBreedsBySpecies: (speciesId) => {
    const breedsBySpecies = {
      // Cattle
      1: [
        { id: 1, name: "Angus" },
        { id: 2, name: "Brahman" },
        { id: 3, name: "Nelore" },
        { id: 4, name: "Holstein" },
      ],
      // Swine
      2: [
        { id: 5, name: "Pietrain" },
        { id: 6, name: "Landrace" },
        { id: 7, name: "Large White" },
        { id: 8, name: "Duroc" },
        { id: 9, name: "Moura" },
      ],
      // Equine
      3: [
        { id: 10, name: "Crioulo" },
        { id: 11, name: "Mangalarga Marchador" },
        { id: 12, name: "Quarter Horse" },
        { id: 13, name: "Percheron" },
      ],
      // Poultry
      4: [
        { id: 14, name: "Leghorn" },
        { id: 15, name: "Rhode Island Red" },
        { id: 16, name: "Plymouth Rock" },
        { id: 17, name: "Sussex" },
      ],
      // Goat
      5: [
        { id: 18, name: "Boer" },
        { id: 19, name: "Anglo-Nubian" },
        { id: 20, name: "Saanen" },
      ],
      // Sheep
      6: [
        { id: 21, name: "Suffolk" },
        { id: 22, name: "Santa Inês" },
        { id: 23, name: "Dorper" },
      ],
    };

    return breedsBySpecies[speciesId] || [];
  },

  updateAnimal: async (id, animal) => {
    try {
      const farmId = localStorage.getItem("farmId");
      if (!farmId) {
        throw new Error("Farm ID not found. Please login again.");
      }

      // Map from frontend format to backend format
      const animalData = {
        name: animal.name,
        species_id: parseInt(animal.speciesId),
        breed_id: parseInt(animal.breedId),
        birth_date: animal.birthDate,
        weight: parseFloat(animal.weight),
        health_status: animal.status,
        farm_id: parseInt(farmId),
      };

      const response = await api.put(`/animals/${id}`, animalData);
      return response.data.data;
    } catch (error) {
      console.error("Error updating animal:", error);
      if (error.response?.status === 404) {
        throw new Error("Animal not found");
      }
      if (error.response?.status === 403) {
        throw new Error("You do not have permission to edit this animal");
      }
      throw error.response?.data || error;
    }
  },

  deleteAnimal: async (id) => {
    try {
      const farmId = localStorage.getItem("farmId");
      if (!farmId) {
        throw new Error("Farm ID not found. Please login again.");
      }

      const response = await api.delete(`/animals/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting animal:", error);
      if (error.response?.status === 404) {
        throw new Error("Animal not found");
      }
      if (error.response?.status === 403) {
        throw new Error("You do not have permission to delete this animal");
      }
      throw error.response?.data || error;
    }
  },

  getAnimalById: async (id) => {
    try {
      const farmId = localStorage.getItem("farmId");
      if (!farmId) {
        throw new Error("Farm ID not found. Please login again.");
      }

      const response = await api.get(`/animals/${id}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching animal:", error);
      if (error.response?.status === 404) {
        throw new Error("Animal not found");
      }
      throw error.response?.data || error;
    }
  },
};

export default animalService;
