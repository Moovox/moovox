import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../ui/badge";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";

const CalendarHeader = ({
  currentDate,
  onDateChange,
  filters,
  onFiltersChange,
  animals = [],
  vaccines = [],
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchDate, setSearchDate] = useState("");

  const goToPreviousMonth = () => {
    onDateChange(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const goToNextMonth = () => {
    onDateChange(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const goToToday = () => {
    onDateChange(new Date());
  };

  const handleMonthChange = (month) => {
    onDateChange(new Date(currentDate.getFullYear(), parseInt(month), 1));
  };

  const handleYearChange = (year) => {
    onDateChange(new Date(parseInt(year), currentDate.getMonth(), 1));
  };

  const handleDateSearch = () => {
    if (searchDate) {
      const date = new Date(searchDate);
      if (!isNaN(date.getTime())) {
        onDateChange(date);
      }
    }
  };

  const clearFilters = () => {
    onFiltersChange({
      animal: "",
      vaccine: "",
      status: "",
    });
  };

  const formatMonthYear = () => {
    return currentDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - 5 + i);

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="space-y-4">
      {/* Main Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Title and Navigation */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Vaccine Calendar
            </h2>
          </div>

          {/* Month/Year Selectors */}
          <div className="flex items-center gap-2">
            <Select
              value={currentDate.getMonth().toString()}
              onValueChange={handleMonthChange}
            >
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Mês" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={currentDate.getFullYear().toString()}
              onValueChange={handleYearChange}
            >
              <SelectTrigger className="w-20">
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Navigation and Controls */}
        <div className="flex items-center gap-2">
          {/* Date Search */}
          <div className="flex items-center gap-2">
            <Input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className="w-40"
              placeholder="Search date..."
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handleDateSearch}
              disabled={!searchDate}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPreviousMonth}
              className="h-9 w-9 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={goToToday}
              className="px-3"
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={goToNextMonth}
              className="h-9 w-9 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Filter Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="relative"
          >
            <Filter className="h-4 w-4" />
            {activeFiltersCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs"
              >
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Filters</h3>
            <div className="flex items-center gap-2">
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-red-600 hover:text-red-700"
                >
                  Clear All
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Animal Filter */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Animal
              </label>
              <Select
                value={filters.animal}
                onValueChange={(value) =>
                  onFiltersChange({ ...filters, animal: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="All animals" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All animals</SelectItem>
                  {animals.map((animal) => (
                    <SelectItem key={animal.id} value={animal.id.toString()}>
                      {animal.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Vaccine Filter */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Vaccine
              </label>
              <Select
                value={filters.vaccine}
                onValueChange={(value) =>
                  onFiltersChange({ ...filters, vaccine: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="All vaccines" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All vaccines</SelectItem>
                  {vaccines.map((vaccine) => (
                    <SelectItem key={vaccine.id} value={vaccine.id.toString()}>
                      {vaccine.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Status
              </label>
              <Select
                value={filters.status}
                onValueChange={(value) =>
                  onFiltersChange({ ...filters, status: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All statuses</SelectItem>
                  <SelectItem value="APPLIED">Applied</SelectItem>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="OVERDUE">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters Display */}
          {activeFiltersCount > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {filters.animal && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Animal:{" "}
                  {
                    animals.find((a) => a.id.toString() === filters.animal)
                      ?.name
                  }
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => onFiltersChange({ ...filters, animal: "" })}
                  />
                </Badge>
              )}
              {filters.vaccine && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Vaccine:{" "}
                  {
                    vaccines.find((v) => v.id.toString() === filters.vaccine)
                      ?.name
                  }
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => onFiltersChange({ ...filters, vaccine: "" })}
                  />
                </Badge>
              )}
              {filters.status && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Status: {filters.status}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => onFiltersChange({ ...filters, status: "" })}
                  />
                </Badge>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarHeader;
