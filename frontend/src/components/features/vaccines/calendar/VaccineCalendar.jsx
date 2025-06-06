import { AlertTriangle, Calendar as CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { useCalendarFilters } from "../../../../hooks/useCalendarFilters";
import { useVaccineApplications } from "../../../../hooks/useVaccineApplications";
import { cn } from "../../../../utils/cn";
import { Badge } from "../../../ui/badge";
import Card from "../../../ui/card";
import CalendarGrid from "./CalendarGrid";
import CalendarHeader from "./CalendarHeader";
import CalendarLegend from "./CalendarLegend";
import CalendarSidebar from "./CalendarSidebar";

const VaccineCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Get applications data
  const { applications, loading, error } = useVaccineApplications();

  // Filter functionality
  const {
    filters,
    setFilters,
    filteredApplications,
    getApplicationsForDate,
    getAlertLevelForDate,
    getFilteredAlerts,
    getUniqueAnimals,
    getUniqueVaccines,
  } = useCalendarFilters(applications);

  const selectedDateApplications = selectedDate
    ? getApplicationsForDate(selectedDate)
    : [];
  const alerts = getFilteredAlerts();
  const animals = getUniqueAnimals();
  const vaccines = getUniqueVaccines();

  const getAlertColor = (level) => {
    switch (level) {
      case "urgent":
        return "bg-red-100 border-red-300 text-red-800";
      case "warning":
        return "bg-orange-100 border-orange-300 text-orange-800";
      case "info":
        return "bg-blue-100 border-blue-300 text-blue-800";
      default:
        return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };

  const getAlertIcon = (level) => {
    switch (level) {
      case "urgent":
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case "info":
        return <CalendarIcon className="h-4 w-4 text-blue-600" />;
      default:
        return <CalendarIcon className="h-4 w-4 text-gray-600" />;
    }
  };

  const formatTime = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <CalendarIcon className="mx-auto h-12 w-12 animate-pulse text-blue-400" />
          <p className="mt-4 text-lg text-gray-600">Loading calendar...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="p-8">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <p className="mt-4 text-lg text-red-600">
            Error loading calendar: {error.message || "Unknown error"}
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Header with Navigation and Filters */}
      <CalendarHeader
        currentDate={currentDate}
        onDateChange={setCurrentDate}
        filters={filters}
        onFiltersChange={setFilters}
        animals={animals}
        vaccines={vaccines}
      />

      {/* Alerts Section */}
      {alerts.length > 0 && (
        <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 p-6">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <h3 className="text-xl font-bold text-orange-900">
              Upcoming Vaccine Applications
            </h3>
            {Object.values(filters).some(Boolean) && (
              <Badge variant="secondary" className="ml-2">
                Filtered Results
              </Badge>
            )}
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {alerts.slice(0, 6).map((app) => {
              const appDate = new Date(app.date);
              const alertLevel = getAlertLevelForDate(appDate);
              return (
                <div
                  key={app.id}
                  className={cn(
                    "flex cursor-pointer items-center justify-between rounded-xl border p-4 shadow-sm transition-all hover:shadow-md",
                    getAlertColor(alertLevel),
                  )}
                  onClick={() => {
                    setCurrentDate(appDate);
                    setSelectedDate(appDate);
                  }}
                >
                  <div className="flex items-center gap-3">
                    {getAlertIcon(alertLevel)}
                    <div>
                      <p className="font-semibold">
                        {app.animalName && typeof app.animalName === "string"
                          ? app.animalName
                          : app.animalName?.name || "Unknown Animal"}
                      </p>
                      <p className="text-sm opacity-80">
                        {app.vaccineName && typeof app.vaccineName === "string"
                          ? app.vaccineName
                          : app.vaccineName?.name || "Unknown Vaccine"}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-medium">
                      {appDate.toLocaleDateString()}
                    </p>
                    <p className="opacity-75">{formatTime(app.date)}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {alerts.length > 6 && (
            <p className="mt-4 text-center text-sm text-orange-700">
              +{alerts.length - 6} more applications pending
            </p>
          )}
        </Card>
      )}

      {/* Main Calendar Layout */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
        {/* Calendar Grid */}
        <div className="xl:col-span-3">
          <CalendarGrid
            currentDate={currentDate}
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            getApplicationsForDate={getApplicationsForDate}
            getAlertLevelForDate={getAlertLevelForDate}
            filteredApplications={filteredApplications}
          />
        </div>

        {/* Sidebar with Details */}
        <div className="space-y-6 xl:col-span-1">
          <CalendarSidebar
            selectedDate={selectedDate}
            applications={selectedDateApplications}
            onDateSelect={setSelectedDate}
          />

          <CalendarLegend />
        </div>
      </div>

      {/* Statistics Footer */}
      {filteredApplications.length > 0 && (
        <Card className="p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>
                <strong>{filteredApplications.length}</strong> total
                applications
              </span>
              <span>
                <strong>{alerts.length}</strong> upcoming (7 days)
              </span>
              <span>
                <strong>{animals.length}</strong> animals
              </span>
              <span>
                <strong>{vaccines.length}</strong> vaccines
              </span>
            </div>

            {Object.values(filters).some(Boolean) && (
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Filters Active</Badge>
                <button
                  onClick={() =>
                    setFilters({ animal: "", vaccine: "", status: "" })
                  }
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default VaccineCalendar;
