import { useMemo, useState } from "react";

export function useCalendarFilters(applications = []) {
  const [filters, setFilters] = useState({
    animal: "",
    vaccine: "",
    status: "",
  });

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      // Animal filter
      if (filters.animal) {
        const animalMatch =
          app.animalId?.toString() === filters.animal ||
          app.animalName?.toString() === filters.animal ||
          (typeof app.animalName === "object" &&
            app.animalName?.id?.toString() === filters.animal);

        if (!animalMatch) return false;
      }

      // Vaccine filter
      if (filters.vaccine) {
        const vaccineMatch =
          app.vaccineId?.toString() === filters.vaccine ||
          app.vaccineName?.toString() === filters.vaccine ||
          (typeof app.vaccineName === "object" &&
            app.vaccineName?.id?.toString() === filters.vaccine);

        if (!vaccineMatch) return false;
      }

      // Status filter
      if (filters.status) {
        const statusMatch =
          app.status?.toUpperCase() === filters.status.toUpperCase();
        if (!statusMatch) return false;
      }

      return true;
    });
  }, [applications, filters]);

  const getApplicationsForDate = (date) => {
    const dateString = date.toISOString().split("T")[0];
    return filteredApplications.filter((app) => {
      if (!app.date) return false;
      const appDateString = new Date(app.date).toISOString().split("T")[0];
      return appDateString === dateString;
    });
  };

  const getAlertLevelForDate = (date) => {
    const applicationsForDate = getApplicationsForDate(date);
    if (applicationsForDate.length === 0) return null;

    const currentDate = new Date();
    const diffTime = date.getTime() - currentDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 1) return "urgent"; // Today or tomorrow
    if (diffDays <= 3) return "warning"; // Within 3 days
    if (diffDays <= 7) return "info"; // Within 7 days
    return null;
  };

  const getFilteredAlerts = () => {
    const currentDate = new Date();
    const sevenDaysFromNow = new Date(
      currentDate.getTime() + 7 * 24 * 60 * 60 * 1000,
    );

    return filteredApplications.filter((app) => {
      if (!app.date) return false;
      const appDate = new Date(app.date);
      return appDate >= currentDate && appDate <= sevenDaysFromNow;
    });
  };

  const getUniqueAnimals = () => {
    const animals = [];
    const seen = new Set();

    applications.forEach((app) => {
      let animalId, animalName;

      if (typeof app.animalName === "object" && app.animalName?.id) {
        animalId = app.animalName.id;
        animalName = app.animalName.name;
      } else {
        animalId = app.animalId;
        animalName = app.animalName;
      }

      if (animalId && !seen.has(animalId)) {
        seen.add(animalId);
        animals.push({
          id: animalId,
          name: animalName || `Animal ${animalId}`,
        });
      }
    });

    return animals.sort((a, b) => a.name.localeCompare(b.name));
  };

  const getUniqueVaccines = () => {
    const vaccines = [];
    const seen = new Set();

    applications.forEach((app) => {
      let vaccineId, vaccineName;

      if (typeof app.vaccineName === "object" && app.vaccineName?.id) {
        vaccineId = app.vaccineName.id;
        vaccineName = app.vaccineName.name;
      } else {
        vaccineId = app.vaccineId;
        vaccineName = app.vaccineName;
      }

      if (vaccineId && !seen.has(vaccineId)) {
        seen.add(vaccineId);
        vaccines.push({
          id: vaccineId,
          name: vaccineName || `Vaccine ${vaccineId}`,
        });
      }
    });

    return vaccines.sort((a, b) => a.name.localeCompare(b.name));
  };

  return {
    filters,
    setFilters,
    filteredApplications,
    getApplicationsForDate,
    getAlertLevelForDate,
    getFilteredAlerts,
    getUniqueAnimals,
    getUniqueVaccines,
  };
}
