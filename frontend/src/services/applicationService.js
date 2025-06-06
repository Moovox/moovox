import api from "../utils/api";

export const applicationService = {
  async getAllApplications() {
    try {
      const response = await api.get("/vaccine-applications");

      if (!response.data) {
        return { data: [] };
      }

      const applicationsData = Array.isArray(response.data.data)
        ? response.data.data
        : [];

      const applications = applicationsData.map((application) => ({
        id: application.id,
        date: application.date || application.application_date,
        animalId: application.animal_id || application.animalId,
        animalName: application.animal_name || application.animalName || "-",
        animalIdentification:
          application.animal_identification ||
          application.animalIdentification ||
          "-",
        vaccineId: application.vaccine_id || application.vaccineId,
        vaccineName: application.vaccine_name || application.vaccineName || "-",
        dosage: application.dosage,
        appliedBy: application.applied_by || application.appliedBy || "-",
        notes: application.notes,
      }));

      return { data: applications };
    } catch (error) {
      console.error("Error fetching applications:", error);
      return { data: [], error };
    }
  },

  async createApplication(applicationData) {
    try {
      const formattedData = {
        animal_id: applicationData.animalId,
        vaccine_id: applicationData.vaccineId,
        application_date: applicationData.date,
        dosage: applicationData.dosage,
        applied_by: applicationData.appliedBy,
        notes: applicationData.notes,
      };

      const response = await api.post("/vaccine-applications", formattedData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async updateApplication(id, applicationData) {
    try {
      if (!id) throw new Error("Application ID not provided");

      const formattedData = {
        animal_id: applicationData.animalId,
        vaccine_id: applicationData.vaccineId,
        application_date: applicationData.date,
        dosage: applicationData.dosage,
        applied_by: applicationData.appliedBy,
        notes: applicationData.notes,
      };

      const response = await api.put(
        `/vaccine-applications/${id}`,
        formattedData,
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async deleteApplication(id) {
    try {
      if (!id) throw new Error("Application ID not provided");

      const response = await api.delete(`/vaccine-applications/${id}`);

      if (response.status === 204 || response.status === 200) {
        return { success: true, message: "Application deleted successfully" };
      }

      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("Application not found");
      }
      if (error.response?.status === 403) {
        throw new Error(
          "You do not have permission to delete this application",
        );
      }
      if (error.response?.status === 500) {
        throw new Error("Internal server error. Please try again later.");
      }

      throw error.response?.data?.message
        ? { message: error.response.data.message }
        : { message: error.message || "Error deleting application" };
    }
  },

  async getApplicationById(id) {
    try {
      if (!id) throw new Error("Application ID not provided");

      const response = await api.get(`/vaccine-applications/${id}`);
      return response.data.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("Application not found");
      }
      throw error.response?.data || error;
    }
  },
};

export default applicationService;
