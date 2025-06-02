import api from "../lib/api";

const typeMap = {
  Administrator: "Administrator",
  Farmer: "Farmer",
  Farmhand: "Farmhand",
  Veterinarian: "Veterinarian",
  ADMIN: "Administrator",
  FARMER: "Farmer",
  FARMHAND: "Farmhand",
  VETERINARY: "Veterinarian",
};

export const userService = {
  async createUser(userData) {
    try {
      const response = await api.post("/users", userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async updateUser(id, userData) {
    try {
      if (!id) throw new Error("User ID not provided");

      const response = await api.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async deleteUser(id) {
    try {
      if (!id) throw new Error("User ID not provided");

      const response = await api.delete(`/users/${id}`);

      if (response.status === 204 || response.status === 200) {
        return { success: true, message: "User deleted successfully" };
      }

      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("User not found");
      }
      if (error.response?.status === 403) {
        throw new Error("You do not have permission to delete this user");
      }
      if (error.response?.status === 500) {
        throw new Error("Internal server error. Please try again later.");
      }

      throw error.response?.data?.message
        ? { message: error.response.data.message }
        : { message: error.message || "Error deleting user" };
    }
  },

  async removeFarmhandRole(id) {
    try {
      if (!id) throw new Error("User ID not provided");

      const response = await api.delete(`/users/${id}/farmhand`);

      if (response.status === 200) {
        return {
          success: true,
          message:
            response.data.message || "Farmhand role removed successfully",
        };
      }

      return response.data;
    } catch (error) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message || "Error removing farmhand role");
    }
  },

  async removeVeterinarianRole(id) {
    try {
      if (!id) throw new Error("User ID not provided");

      const response = await api.delete(`/users/${id}/veterinarian`);

      if (response.status === 200) {
        return {
          success: true,
          message:
            response.data.message || "Veterinarian role removed successfully",
        };
      }

      return response.data;
    } catch (error) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message || "Error removing veterinarian role");
    }
  },

  async transferVeterinarianApplications(sourceId, targetId) {
    try {
      if (!sourceId || !targetId) {
        throw new Error("Source and target IDs are required");
      }

      const response = await api.post(`/users/transfer-applications`, {
        sourceId,
        targetId,
      });

      if (response.status === 200) {
        return {
          success: true,
          transferredCount: response.data.transferredCount,
          message:
            response.data.message || "Applications transferred successfully",
        };
      }

      return response.data;
    } catch (error) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message || "Error transferring applications");
    }
  },

  async getAllUsers() {
    try {
      const farmId = localStorage.getItem("farmId");

      if (!farmId) {
        console.warn(
          "Warning: Farm ID not found in localStorage. Users may not be filtered correctly.",
        );
      }

      const endpoint = farmId ? `/farms/${farmId}/users` : "/users";
      const response = await api.get(endpoint);

      if (!response.data) {
        return { data: [] };
      }

      const usersData = Array.isArray(response.data.data)
        ? response.data.data
        : [];

      const users = usersData.map((user) => ({
        id: user.id,
        name: user.name || user.nome,
        email: user.email,
        type:
          typeMap[user.type || user.role || user.tipo] ||
          user.type ||
          user.role ||
          user.tipo,
        farm: user.farm || user.fazenda,
      }));

      return { data: users };
    } catch (error) {
      console.error("Error fetching users:", error);
      return { data: [], error };
    }
  },
};

export default userService;
