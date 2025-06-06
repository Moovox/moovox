import { useCallback, useEffect, useState } from "react";
import { useToast } from "../components/ui/use-toast";
import { applicationService } from "../services/applicationService";

export function useVaccineApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const { toast } = useToast();

  const loadApplications = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await applicationService.getAllApplications();

      if (result.error) {
        throw result.error;
      }

      const applicationsData = result.data || [];
      setApplications(applicationsData);

      // Calculate alerts for applications within 7 days
      const currentDate = new Date();
      const sevenDaysFromNow = new Date(
        currentDate.getTime() + 7 * 24 * 60 * 60 * 1000,
      );

      const upcomingApplications = applicationsData.filter((app) => {
        if (!app.date) return false;
        const appDate = new Date(app.date);
        return appDate >= currentDate && appDate <= sevenDaysFromNow;
      });

      setAlerts(upcomingApplications);

      // Show toast notifications for urgent applications (next 3 days)
      const threeDaysFromNow = new Date(
        currentDate.getTime() + 3 * 24 * 60 * 60 * 1000,
      );
      const urgentApplications = upcomingApplications.filter((app) => {
        const appDate = new Date(app.date);
        return appDate <= threeDaysFromNow;
      });

      if (urgentApplications.length > 0) {
        toast({
          title: "Vaccine Applications Due Soon",
          description: `${urgentApplications.length} vaccine application(s) due within 3 days`,
          variant: "default",
        });
      }
    } catch (error) {
      console.error("Error loading vaccine applications:", error);
      setError(error);
      setApplications([]);
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const getApplicationsForDate = useCallback(
    (date) => {
      const dateString = date.toISOString().split("T")[0];
      return applications.filter((app) => {
        if (!app.date) return false;
        const appDateString = new Date(app.date).toISOString().split("T")[0];
        return appDateString === dateString;
      });
    },
    [applications],
  );

  const getAlertLevelForDate = useCallback(
    (date) => {
      const applicationsForDate = getApplicationsForDate(date);
      if (applicationsForDate.length === 0) return null;

      const currentDate = new Date();
      const diffTime = date.getTime() - currentDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays <= 1) return "urgent"; // Today or tomorrow
      if (diffDays <= 3) return "warning"; // Within 3 days
      if (diffDays <= 7) return "info"; // Within 7 days
      return null;
    },
    [getApplicationsForDate],
  );

  const createApplication = async (applicationData) => {
    try {
      await applicationService.createApplication(applicationData);
      await loadApplications(); // Reload applications
      toast({
        title: "Success",
        description: "Vaccine application scheduled successfully!",
        variant: "success",
      });
    } catch (error) {
      console.error("Error creating application:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to schedule vaccine application",
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    loadApplications();
  }, [loadApplications]);

  return {
    applications,
    loading,
    error,
    alerts,
    loadApplications,
    getApplicationsForDate,
    getAlertLevelForDate,
    createApplication,
    refetch: loadApplications,
  };
}
