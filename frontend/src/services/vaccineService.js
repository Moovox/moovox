import api from "../utils/api";

export const vaccineService = {
  async getAllVaccines() {
    try {
      // Use only the /vaccines endpoint as that's what's available in the backend
      const response = await api.get("/vaccines");

      if (!response.data) {
        return { data: [] };
      }

      const vaccinesData = Array.isArray(response.data.data)
        ? response.data.data
        : [];

      const vaccines = vaccinesData.map((vaccine) => ({
        id: vaccine.id,
        name: vaccine.name,
        target_disease: vaccine.target_disease,
        manufacturer_id: vaccine.manufacturer_id,
        manufacturer: vaccine.manufacturer,
        type_of_vaccine_id: vaccine.type_of_vaccine_id,
        type_of_vaccine: vaccine.type_of_vaccine,
        batch: vaccine.batch,
        expiration_date: vaccine.expiration_date,
        required_doses: vaccine.required_doses,
        dosing_interval: vaccine.dosing_interval,
        notes: vaccine.notes,
        created_at: vaccine.created_at,
        updated_at: vaccine.updated_at,
        // Manter campos antigos para compatibilidade
        batchNumber: vaccine.batch,
        expirationDate: vaccine.expiration_date,
        dosage: vaccine.dosage,
        description: vaccine.notes,
      }));

      return { data: vaccines };
    } catch (error) {
      console.error("Error fetching vaccines:", error);
      return { data: [], error };
    }
  },

  async createVaccine(vaccineData) {
    try {
      const response = await api.post("/vaccines", vaccineData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async updateVaccine(id, vaccineData) {
    try {
      if (!id) throw new Error("Vaccine ID not provided");

      const formattedData = {
        name: vaccineData.name,
        manufacturer: vaccineData.manufacturer,
        batch_number: vaccineData.batchNumber,
        expiration_date: vaccineData.expirationDate,
        dosage: vaccineData.dosage,
        description: vaccineData.description,
      };

      const response = await api.put(`/vaccines/${id}`, formattedData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async deleteVaccine(id) {
    try {
      if (!id) throw new Error("Vaccine ID not provided");

      const response = await api.delete(`/vaccines/${id}`);

      if (response.status === 204 || response.status === 200) {
        return { success: true, message: "Vaccine deleted successfully" };
      }

      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("Vaccine not found");
      }
      if (error.response?.status === 403) {
        throw new Error("You do not have permission to delete this vaccine");
      }
      if (error.response?.status === 500) {
        throw new Error("Internal server error. Please try again later.");
      }

      throw error.response?.data?.message
        ? { message: error.response.data.message }
        : { message: error.message || "Error deleting vaccine" };
    }
  },

  async getVaccineById(id) {
    try {
      if (!id) throw new Error("Vaccine ID not provided");

      const response = await api.get(`/vaccines/${id}`);
      return response.data.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("Vaccine not found");
      }
      throw error.response?.data || error;
    }
  },

  async getAllManufacturers() {
    try {
      const response = await api.get("/vaccines/manufacturers");
      return response.data.data || [];
    } catch (error) {
      console.error("Error fetching manufacturers:", error);
      return [];
    }
  },

  async getAllVaccineTypes() {
    try {
      const response = await api.get("/vaccines/types");
      return response.data.data || [];
    } catch (error) {
      console.error("Error fetching vaccine types:", error);
      return [];
    }
  },
};

export default vaccineService;
