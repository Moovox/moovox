import React from "react";
import CalendarDay from "./CalendarDay";

const CalendarGrid = ({
  currentDate,
  selectedDate,
  onDateSelect,
  getApplicationsForDate,
  getAlertLevelForDate,
  filteredApplications,
}) => {
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add previous month's trailing days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonth.getDate() - i),
        isCurrentMonth: false,
      });
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: new Date(year, month, day),
        isCurrentMonth: true,
      });
    }

    // Add next month's leading days to complete the grid
    const totalCells = Math.ceil(days.length / 7) * 7;
    let nextDay = 1;
    while (days.length < totalCells) {
      days.push({
        date: new Date(year, month + 1, nextDay),
        isCurrentMonth: false,
      });
      nextDay++;
    }

    return days;
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {/* Days of week header */}
      <div className="grid grid-cols-7 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        {[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ].map((day) => (
          <div
            key={day}
            className="p-4 text-center text-sm font-semibold text-gray-700"
          >
            <span className="hidden md:inline">{day}</span>
            <span className="md:hidden">{day.slice(0, 3)}</span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7">
        {getDaysInMonth().map((dayObj, index) => (
          <CalendarDay
            key={index}
            dayObj={dayObj}
            selectedDate={selectedDate}
            onDateSelect={onDateSelect}
            applications={getApplicationsForDate(dayObj.date)}
            alertLevel={getAlertLevelForDate(dayObj.date)}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
