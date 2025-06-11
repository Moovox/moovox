import api from "../utils/api";

// Debounce timer for farm change events
let farmChangeTimeout = null;

const dispatchFarmChangeEvent = (farmId) => {
  // Clear existing timeout
  if (farmChangeTimeout) {
    clearTimeout(farmChangeTimeout);
  }

  // Set new timeout to debounce the event
  farmChangeTimeout = setTimeout(() => {
    window.dispatchEvent(
      new CustomEvent("farmChanged", {
        detail: { farmId },
      }),
    );
  }, 100);
};

export const farmService = {
  listFarms: async () => {
    try {
      const response = await api.get("/farms");
      return response.data.data;
    } catch (error) {
      console.error("Error listing farms:", error);
      throw error.response?.data || error;
    }
  },

  createFarm: async (farm) => {
    try {
      const response = await api.post("/farms", farm);
      return response.data.data;
    } catch (error) {
      console.error("Error creating farm:", error);
      throw error.response?.data || error;
    }
  },

  updateFarm: async (id, farm) => {
    try {
      const response = await api.put(`/farms/${id}`, farm);
      return response.data.data;
    } catch (error) {
      console.error("Error updating farm:", error);
      throw error.response?.data || error;
    }
  },

  deleteFarm: async (id) => {
    try {
      console.log(`Sending DELETE request to /farms/${id}`);
      const response = await api.delete(`/farms/${id}`);
      console.log(`Delete response:`, response);
      return response.data;
    } catch (error) {
      console.error("Error deleting farm:", error);

      // Detailed error log
      if (error.response) {
        // Server responded with a status outside the 2xx range
        console.error("Error response data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Headers:", error.response.headers);

        // Return server error data
        throw error.response.data || { message: "Unknown server error" };
      } else if (error.request) {
        // Request was made but no response was received
        console.error("Request error without response:", error.request);
        throw { message: "Could not connect to server" };
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Request configuration error:", error.message);
        throw { message: error.message || "Error sending request" };
      }
    }
  },

  getFarmById: async (id) => {
    try {
      const response = await api.get(`/farms/${id}`);
      const farmData = response.data.data;

      // Try to get farm stats as well
      try {
        const stats = await farmService.getFarmStats(id);
        if (stats) {
          farmData.animalCount = stats.animalCount || 0;
          farmData.userCount = stats.userCount || 0;
        }
      } catch (statsError) {
        console.warn("Could not fetch farm stats:", statsError);
        // Set default values if stats are not available
        farmData.animalCount = 0;
        farmData.userCount = 0;
      }

      return farmData;
    } catch (error) {
      console.error("Error fetching farm:", error);
      throw error.response?.data || error;
    }
  },

  listAnimalsByFarm: async (farmId) => {
    try {
      const response = await api.get(`/farms/${farmId}/animals`);
      return response.data.data;
    } catch (error) {
      console.error("Error listing farm animals:", error);
      throw error.response?.data || error;
    }
  },

  listUsersByFarm: async (farmId) => {
    try {
      const response = await api.get(`/farms/${farmId}/users`);
      return response.data.data;
    } catch (error) {
      console.error("Error listing farm users:", error);
      throw error.response?.data || error;
    }
  },

  getFarmStats: async (farmId) => {
    try {
      const response = await api.get(`/farms/${farmId}/stats`);
      return response.data.data;
    } catch (error) {
      console.error("Error getting farm statistics:", error);
      throw error.response?.data || error;
    }
  },

  // Get livestock data for farm details page
  getFarmLivestockData: async (farmId) => {
    try {
      // Get all animals from the farm
      const animalsResponse = await api.get(`/farms/${farmId}/animals`);
      const animals = animalsResponse.data?.data || [];

      // Process animals data to create livestock statistics
      const livestockData = {
        total: animals.length,
        categories: [],
        recentAnimals: [],
        healthStats: {
          excellent: 0,
          good: 0,
          needsAttention: 0,
        },
      };

      // Group animals by species/breed
      const categoriesMap = new Map();

      animals.forEach((animal) => {
        // Categorize by species
        const speciesName = animal.species || "Unknown";
        const key = speciesName;

        if (!categoriesMap.has(key)) {
          categoriesMap.set(key, {
            name: speciesName,
            count: 0,
            healthScores: [],
            color: getSpeciesColor(speciesName),
          });
        }

        categoriesMap.get(key).count++;

        // Calculate health score (simplified)
        const healthScore = getHealthScore(
          animal.health_status || animal.status,
        );
        categoriesMap.get(key).healthScores.push(healthScore);

        // Count health stats
        if (healthScore >= 95) {
          livestockData.healthStats.excellent++;
        } else if (healthScore >= 80) {
          livestockData.healthStats.good++;
        } else {
          livestockData.healthStats.needsAttention++;
        }

        // Add to recent animals (convert to expected format)
        if (livestockData.recentAnimals.length < 20) {
          livestockData.recentAnimals.push({
            id: animal.id,
            name: animal.name || `Animal #${animal.id}`,
            type: speciesName,
            age: calculateAge(animal.birth_date) || "Unknown",
            health: mapHealthStatus(animal.health_status || animal.status),
            lastCheckup: "N/A", // This would come from a veterinary records endpoint
            status: mapHealthStatusToCategory(
              animal.health_status || animal.status,
            ),
          });
        }
      });

      // Convert categories map to array with calculated health averages
      livestockData.categories = Array.from(categoriesMap.values()).map(
        (category) => ({
          ...category,
          health:
            category.healthScores.length > 0
              ? Math.round(
                  category.healthScores.reduce((a, b) => a + b, 0) /
                    category.healthScores.length,
                )
              : 100,
          healthScores: undefined, // Remove temporary field
        }),
      );

      return livestockData;
    } catch (error) {
      console.error("Error getting farm livestock data:", error);
      throw error.response?.data || error;
    }
  },

  // Get farm users data
  getFarmUsersData: async (farmId) => {
    try {
      const response = await api.get(`/farms/${farmId}/users`);
      const users = response.data?.data || [];

      return {
        total: users.length,
        users: users.map((user) => ({
          id: user.id,
          name: user.name || user.nome,
          email: user.email,
          type: user.type || user.role || user.tipo,
          joinDate: user.created_at || user.createdAt,
          status: "active", // This could come from user status field
        })),
      };
    } catch (error) {
      console.error("Error getting farm users data:", error);
      throw error.response?.data || error;
    }
  },

  selectFarm: async (farmId) => {
    try {
      // Check if user has permission to access this farm
      const response = await api.get(`/farms/${farmId}`);

      if (response.data && response.data.data) {
        localStorage.setItem("farmId", farmId);

        // Dispatch farm change event to update tables (debounced)
        dispatchFarmChangeEvent(farmId);

        return {
          success: true,
          message: `Farm "${response.data.data.name}" selected successfully`,
          farm: response.data.data,
        };
      } else {
        throw new Error("Farm not found or not available");
      }
    } catch (error) {
      console.error("Error selecting farm:", error);

      if (error.response?.status === 403) {
        throw new Error("You do not have permission to access this farm");
      }

      if (error.response?.status === 404) {
        throw new Error("Farm not found");
      }

      throw error.response?.data?.message
        ? new Error(error.response.data.message)
        : error;
    }
  },

  getSelectedFarm: () => {
    return localStorage.getItem("farmId");
  },

  clearSelectedFarm: () => {
    localStorage.removeItem("farmId");

    // Dispatch farm clearing event (debounced)
    dispatchFarmChangeEvent(null);

    return true;
  },

  checkSelectedFarm: async () => {
    try {
      const farmId = localStorage.getItem("farmId");
      if (!farmId) {
        return { valid: false, message: "No farm selected" };
      }

      // Try to fetch the farm from the server
      const response = await api.get(`/farms/${farmId}`);
      if (response.data && response.data.data) {
        return { valid: true, farm: response.data.data };
      } else {
        // If no valid data was found, clear localStorage
        localStorage.removeItem("farmId");
        return {
          valid: false,
          message: "The selected farm does not exist or has been removed",
        };
      }
    } catch (error) {
      console.error("Error checking selected farm:", error);

      // If the error is 404, the farm doesn't exist
      if (error.response?.status === 404) {
        localStorage.removeItem("farmId");
        return {
          valid: false,
          message: "The selected farm does not exist in the system",
        };
      }

      // If the error is 403, the user doesn't have permission
      if (error.response?.status === 403) {
        localStorage.removeItem("farmId");
        return {
          valid: false,
          message: "You do not have permission to access this farm",
        };
      }

      // Other errors
      return {
        valid: false,
        message: "Error checking the selected farm",
        error: error.response?.data?.message || error.message,
      };
    }
  },
};

// Helper functions for livestock data processing
const getSpeciesColor = (species) => {
  const normalizedSpecies = species?.toUpperCase() || "UNKNOWN";

  const colorMap = {
    // Cattle variations
    CATTLE: "bg-blue-500",
    BOVINE: "bg-blue-500",
    COW: "bg-blue-500",
    COWS: "bg-blue-500",

    // Swine variations
    SWINE: "bg-red-500",
    PIG: "bg-red-500",
    PIGS: "bg-red-500",
    HOG: "bg-red-500",
    HOGS: "bg-red-500",

    // Equine variations
    EQUINE: "bg-purple-500",
    HORSE: "bg-purple-500",
    HORSES: "bg-purple-500",

    // Poultry variations
    POULTRY: "bg-yellow-500",
    CHICKEN: "bg-yellow-500",
    CHICKENS: "bg-yellow-500",
    HEN: "bg-yellow-500",
    HENS: "bg-yellow-500",

    // Goat variations
    CAPRINE: "bg-green-500",
    GOAT: "bg-green-500",
    GOATS: "bg-green-500",

    // Sheep variations
    OVINE: "bg-orange-500",
    SHEEP: "bg-orange-500",
  };

  return colorMap[normalizedSpecies] || "bg-gray-500";
};

const getHealthScore = (healthStatus) => {
  const statusMap = {
    Healthy: 100,
    HEALTHY: 100,
    Good: 95,
    GOOD: 95,
    Fair: 80,
    FAIR: 80,
    Poor: 60,
    POOR: 60,
    Sick: 40,
    SICK: 40,
  };
  return statusMap[healthStatus] || 85; // Default to 85 if unknown
};

const mapHealthStatus = (status) => {
  const statusMap = {
    HEALTHY: "Excellent",
    Healthy: "Excellent",
    GOOD: "Good",
    Good: "Good",
    FAIR: "Needs Attention",
    Fair: "Needs Attention",
    POOR: "Needs Attention",
    Poor: "Needs Attention",
    SICK: "Needs Attention",
    Sick: "Needs Attention",
  };
  return statusMap[status] || "Good";
};

const mapHealthStatusToCategory = (status) => {
  const categoryMap = {
    HEALTHY: "healthy",
    Healthy: "healthy",
    GOOD: "healthy",
    Good: "healthy",
    FAIR: "attention",
    Fair: "attention",
    POOR: "attention",
    Poor: "attention",
    SICK: "sick",
    Sick: "sick",
  };
  return categoryMap[status] || "healthy";
};

const calculateAge = (birthDate) => {
  if (!birthDate) return null;

  try {
    const birth = new Date(birthDate);
    const now = new Date();
    const ageInMilliseconds = now - birth;
    const ageInYears = Math.floor(
      ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25),
    );
    const ageInMonths = Math.floor(
      (ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * 30.44),
    );

    if (ageInYears > 0) {
      return `${ageInYears} year${ageInYears > 1 ? "s" : ""}`;
    } else if (ageInMonths > 0) {
      return `${ageInMonths} month${ageInMonths > 1 ? "s" : ""}`;
    } else {
      return "Less than 1 month";
    }
  } catch (error) {
    console.error("Error calculating age:", error);
    return null;
  }
};
