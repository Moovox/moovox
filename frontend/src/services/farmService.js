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
      return response.data.data;
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
