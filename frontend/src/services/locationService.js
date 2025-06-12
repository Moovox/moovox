import api from "../utils/api";

export const locationService = {
  /**
   * Buscar localizações dos animais por fazenda
   */
  getAnimalLocations: async (farmId = null) => {
    try {
      const endpoint = farmId ? `/farms/${farmId}/locations` : "/locations";
      const response = await api.get(endpoint);

      return response.data?.data || [];
    } catch (error) {
      console.error("Error fetching animal locations:", error);
      throw error.response?.data || error;
    }
  },

  /**
   * Buscar últimas localizações por animal
   */
  getLatestLocationsByAnimal: async (animalIds = []) => {
    try {
      const response = await api.post("/locations/latest", { animalIds });
      return response.data?.data || [];
    } catch (error) {
      console.error("Error fetching latest locations:", error);
      throw error.response?.data || error;
    }
  },

  /**
   * Atualizar posição de um animal
   */
  updateAnimalPosition: async (animalId, position) => {
    try {
      const locationData = {
        animal_id: animalId,
        latitude: position.latitude,
        longitude: position.longitude,
        altitude: position.altitude || 0,
        accuracy: position.accuracy || 5,
        captured_at: new Date().toISOString(),
        battery: position.battery || 100,
        temperature: position.temperature || 25,
        humidity: position.humidity || 60,
      };

      const response = await api.post("/locations", locationData);
      return response.data?.data;
    } catch (error) {
      console.error("Error updating animal position:", error);
      throw error.response?.data || error;
    }
  },

  /**
   * Buscar histórico de localizações de um animal
   */
  getAnimalLocationHistory: async (animalId, limit = 50) => {
    try {
      const response = await api.get(
        `/animals/${animalId}/locations?limit=${limit}`,
      );
      return response.data?.data || [];
    } catch (error) {
      console.error("Error fetching animal location history:", error);
      throw error.response?.data || error;
    }
  },

  /**
   * Buscar animais em uma área específica (geofencing)
   */
  getAnimalsInArea: async (bounds) => {
    try {
      const { north, south, east, west } = bounds;
      const response = await api.post("/locations/in-area", {
        north,
        south,
        east,
        west,
      });

      return response.data?.data || [];
    } catch (error) {
      console.error("Error fetching animals in area:", error);
      throw error.response?.data || error;
    }
  },
};
