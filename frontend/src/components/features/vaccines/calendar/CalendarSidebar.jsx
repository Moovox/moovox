import {
  AlertCircle,
  Calendar as CalendarIcon,
  CheckCircle,
  Clock,
  FileText,
  Stethoscope,
  Syringe,
  User,
  Users,
  XCircle,
} from "lucide-react";
import React from "react";
import { cn } from "../../../../utils/cn";
import { Badge } from "../../../ui/badge";
import Card from "../../../ui/card";

const CalendarSidebar = ({ selectedDate, applications = [], onDateSelect }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusIcon = (status) => {
    if (!status) return <Clock className="h-4 w-4 text-gray-500" />;

    switch (status.toUpperCase()) {
      case "APPLIED":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "PENDING":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case "OVERDUE":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status) => {
    if (!status) return null;

    const statusConfig = {
      APPLIED: {
        variant: "default",
        className: "bg-green-100 text-green-800 border-green-200",
      },
      PENDING: {
        variant: "secondary",
        className: "bg-yellow-100 text-yellow-800 border-yellow-200",
      },
      OVERDUE: {
        variant: "destructive",
        className: "bg-red-100 text-red-800 border-red-200",
      },
    };

    const config = statusConfig[status.toUpperCase()] || statusConfig.PENDING;

    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    );
  };

  const groupedApplications = applications.reduce((groups, app) => {
    const status = app.status?.toUpperCase() || "UNKNOWN";
    if (!groups[status]) groups[status] = [];
    groups[status].push(app);
    return groups;
  }, {});

  if (!selectedDate) {
    return (
      <Card className="h-fit bg-gradient-to-br from-white to-blue-50">
        <div className="p-8">
          <div className="text-center">
            <CalendarIcon className="mx-auto h-16 w-16 text-gray-300" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Select a Date
            </h3>
            <p className="mt-2 text-gray-500">
              Click on any date in the calendar to view scheduled vaccine
              applications
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="h-fit bg-gradient-to-br from-white to-green-50">
      {/* Header */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center gap-3">
          <Stethoscope className="h-6 w-6 text-green-600" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">
              {formatDate(selectedDate)}
            </h3>
            <p className="text-sm text-gray-600">
              {applications.length} application
              {applications.length !== 1 ? "s" : ""} scheduled
            </p>
          </div>
        </div>

        {/* Status Summary */}
        {applications.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(groupedApplications).map(([status, apps]) => (
              <Badge
                key={status}
                variant="outline"
                className={cn(
                  "flex items-center gap-1",
                  status === "APPLIED" &&
                    "border-green-200 bg-green-50 text-green-700",
                  status === "PENDING" &&
                    "border-yellow-200 bg-yellow-50 text-yellow-700",
                  status === "OVERDUE" &&
                    "border-red-200 bg-red-50 text-red-700",
                )}
              >
                {getStatusIcon(status)}
                {apps.length} {status.toLowerCase()}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {applications.length === 0 ? (
          <div className="py-12 text-center">
            <Syringe className="mx-auto h-16 w-16 text-gray-300" />
            <p className="mt-4 text-gray-500">
              No vaccine applications scheduled for this date
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Group by status */}
            {Object.entries(groupedApplications).map(([status, statusApps]) => (
              <div key={status} className="space-y-3">
                {Object.keys(groupedApplications).length > 1 && (
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    {getStatusIcon(status)}
                    {status} ({statusApps.length})
                  </h4>
                )}

                {statusApps.map((app) => (
                  <div
                    key={app.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="space-y-3">
                      {/* Animal and Vaccine Info */}
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-blue-600" />
                            <p className="font-semibold text-gray-900">
                              {app.animalName &&
                              typeof app.animalName === "string"
                                ? app.animalName
                                : app.animalName?.name || "Unknown Animal"}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <Syringe className="h-4 w-4 text-green-600" />
                            <p className="text-sm text-gray-600">
                              {app.vaccineName &&
                              typeof app.vaccineName === "string"
                                ? app.vaccineName
                                : app.vaccineName?.name || "Unknown Vaccine"}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            {formatTime(app.date)}
                          </p>
                          {getStatusBadge(app.status)}
                        </div>
                      </div>

                      {/* Additional Details */}
                      <div className="grid gap-2 text-sm">
                        {app.dosage && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                            <span className="font-medium">Dosage:</span>
                            <span>{app.dosage}</span>
                          </div>
                        )}

                        {app.appliedBy && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <User className="h-3.5 w-3.5" />
                            <span className="font-medium">Applied by:</span>
                            <span>{app.appliedBy}</span>
                          </div>
                        )}

                        {app.notes && (
                          <div className="flex items-start gap-2 text-gray-600">
                            <FileText className="mt-0.5 h-3.5 w-3.5" />
                            <div>
                              <span className="font-medium">Notes:</span>
                              <p className="mt-1 text-sm italic">{app.notes}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Animal ID if available */}
                      {app.animalIdentification && (
                        <div className="border-t border-gray-100 pt-2">
                          <p className="text-xs text-gray-500">
                            Animal ID: {app.animalIdentification}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Quick Actions */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex gap-2">
                <button
                  onClick={() => onDateSelect(new Date())}
                  className="flex-1 rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
                >
                  Go to Today
                </button>
                <button
                  onClick={() => onDateSelect(null)}
                  className="flex-1 rounded-md bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
                >
                  Clear Selection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CalendarSidebar;
