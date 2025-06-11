import api from "../utils/api";

export const dashboardService = {
  getStats: async () => {
    const response = await api.get("/dashboard/stats");
    return response.data;
  },

  getLatestUsers: async () => {
    const response = await api.get("/dashboard/latest-users");
    return response.data;
  },

  getPendingVaccines: async () => {
    const response = await api.get("/dashboard/pending-vaccines");
    return response.data;
  },

  getHealthAlerts: async () => {
    const response = await api.get("/dashboard/health-alerts");
    return response.data;
  },

  getAnimalTelemetry: async () => {
    const response = await api.get("/dashboard/telemetry");
    return response.data;
  },
};
