import { AlertTriangle, Clock, Syringe } from "lucide-react";
import React from "react";
import { cn } from "../../../../utils/cn";

const CalendarDay = ({
  dayObj,
  selectedDate,
  onDateSelect,
  applications = [],
  alertLevel,
}) => {
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date) => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const getStatusCounts = () => {
    const counts = {
      applied: 0,
      pending: 0,
      overdue: 0,
    };

    applications.forEach((app) => {
      if (app.status) {
        const status = app.status.toLowerCase();
        if (status === "applied") counts.applied++;
        else if (status === "pending") counts.pending++;
        else if (status === "overdue") counts.overdue++;
      }
    });

    return counts;
  };

  const getAlertIcon = () => {
    switch (alertLevel) {
      case "urgent":
        return <AlertTriangle className="h-3 w-3 text-red-600" />;
      case "warning":
        return <Clock className="h-3 w-3 text-orange-600" />;
      case "info":
        return <Syringe className="h-3 w-3 text-blue-600" />;
      default:
        return null;
    }
  };

  const hasApplications = applications.length > 0;
  const statusCounts = getStatusCounts();

  return (
    <button
      onClick={() => onDateSelect(dayObj.date)}
      className={cn(
        "relative min-h-[100px] border-b border-r border-gray-100 p-2 text-left transition-all duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
        !dayObj.isCurrentMonth && "bg-gray-50 text-gray-400",
        isToday(dayObj.date) && "bg-blue-100 font-bold ring-2 ring-blue-300",
        isSelected(dayObj.date) && "bg-blue-200 ring-2 ring-blue-500",
        hasApplications && "bg-gradient-to-br",
        alertLevel === "urgent" &&
          hasApplications &&
          "hover:to-red-150 from-red-50 to-red-100 hover:from-red-100",
        alertLevel === "warning" &&
          hasApplications &&
          "hover:to-orange-150 from-orange-50 to-orange-100 hover:from-orange-100",
        alertLevel === "info" &&
          hasApplications &&
          "hover:to-blue-150 from-blue-50 to-blue-100 hover:from-blue-100",
      )}
    >
      <div className="flex h-full flex-col justify-between">
        {/* Day number and alert icon */}
        <div className="flex items-start justify-between">
          <span
            className={cn(
              "text-sm font-medium",
              isToday(dayObj.date) && "text-blue-900",
              !dayObj.isCurrentMonth && "text-gray-400",
            )}
          >
            {dayObj.date.getDate()}
          </span>

          {hasApplications && getAlertIcon() && (
            <div className="rounded-full bg-white p-1 shadow-sm">
              {getAlertIcon()}
            </div>
          )}
        </div>

        {/* Applications indicators */}
        {hasApplications && (
          <div className="space-y-1">
            {/* Total count */}
            <div className="flex items-center gap-1">
              <div
                className={cn(
                  "h-2 w-2 rounded-full",
                  alertLevel === "urgent" && "bg-red-500",
                  alertLevel === "warning" && "bg-orange-500",
                  alertLevel === "info" && "bg-blue-500",
                  !alertLevel && "bg-gray-500",
                )}
              />
              <span className="text-xs font-medium text-gray-700">
                {applications.length}
              </span>
            </div>

            {/* Status breakdown for days with multiple applications */}
            {applications.length > 1 && (
              <div className="flex gap-1">
                {statusCounts.applied > 0 && (
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span className="text-xs text-green-700">
                      {statusCounts.applied}
                    </span>
                  </div>
                )}
                {statusCounts.pending > 0 && (
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    <span className="text-xs text-yellow-700">
                      {statusCounts.pending}
                    </span>
                  </div>
                )}
                {statusCounts.overdue > 0 && (
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span className="text-xs text-red-700">
                      {statusCounts.overdue}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Quick preview of animals (max 2) */}
            {applications.length <= 2 && (
              <div className="space-y-0.5">
                {applications.slice(0, 2).map((app, index) => (
                  <div key={index} className="truncate text-xs text-gray-600">
                    {app.animalName && typeof app.animalName === "string"
                      ? app.animalName
                      : app.animalName?.name || "Unknown"}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Today indicator */}
        {isToday(dayObj.date) && (
          <div className="absolute bottom-1 right-1">
            <div className="h-2 w-2 rounded-full bg-blue-600" />
          </div>
        )}
      </div>
    </button>
  );
};

export default CalendarDay;
