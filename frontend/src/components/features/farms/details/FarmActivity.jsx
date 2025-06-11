import {
  Calendar,
  Clock,
  Shield,
  Stethoscope,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../ui/button";
import Card, { CardContent } from "../../../ui/card";

function FarmActivity({ farm }) {
  const [timeFilter, setTimeFilter] = useState("week");

  // Mock activity data - in real app, this would come from API
  const activities = [
    {
      id: 1,
      type: "vaccination",
      title: "Cattle Vaccination",
      description: "Administered FMD vaccine to 12 dairy cows",
      timestamp: "2 hours ago",
      icon: Shield,
      color: "text-blue-600 bg-blue-100",
      priority: "routine",
    },
    {
      id: 2,
      type: "health_check",
      title: "Health Inspection",
      description: "Veterinary checkup completed for Bella (#001)",
      timestamp: "5 hours ago",
      icon: Stethoscope,
      color: "text-green-600 bg-green-100",
      priority: "high",
    },
    {
      id: 3,
      type: "transport",
      title: "Livestock Transport",
      description: "3 bulls transported to Market Block A",
      timestamp: "1 day ago",
      icon: Truck,
      color: "text-purple-600 bg-purple-100",
      priority: "medium",
    },
    {
      id: 4,
      type: "user_action",
      title: "User Access",
      description: "Dr. Sarah Johnson added as veterinarian",
      timestamp: "2 days ago",
      icon: Users,
      color: "text-orange-600 bg-orange-100",
      priority: "low",
    },
    {
      id: 5,
      type: "system",
      title: "System Update",
      description: "Farm metrics automatically updated",
      timestamp: "3 days ago",
      icon: Zap,
      color: "text-gray-600 bg-gray-100",
      priority: "routine",
    },
    {
      id: 6,
      type: "health_check",
      title: "Emergency Check",
      description: "Urgent health check for Daisy (#003) - infection treated",
      timestamp: "4 days ago",
      icon: Stethoscope,
      color: "text-red-600 bg-red-100",
      priority: "urgent",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "border-l-red-500 bg-red-50";
      case "high":
        return "border-l-orange-500 bg-orange-50";
      case "medium":
        return "border-l-yellow-500 bg-yellow-50";
      case "low":
        return "border-l-blue-500 bg-blue-50";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  const getPriorityBadge = (priority) => {
    const colors = {
      urgent: "bg-red-100 text-red-800",
      high: "bg-orange-100 text-orange-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-blue-100 text-blue-800",
      routine: "bg-gray-100 text-gray-800",
    };
    return colors[priority] || colors.routine;
  };

  const filteredActivities = activities.filter((activity) => {
    const now = new Date();
    const activityDate = new Date(
      now - Math.random() * 7 * 24 * 60 * 60 * 1000,
    ); // Mock dates

    switch (timeFilter) {
      case "day":
        return activityDate >= new Date(now - 24 * 60 * 60 * 1000);
      case "week":
        return activityDate >= new Date(now - 7 * 24 * 60 * 60 * 1000);
      case "month":
        return activityDate >= new Date(now - 30 * 24 * 60 * 60 * 1000);
      default:
        return true;
    }
  });

  return (
    <Card className="border-slate-200">
      <CardContent className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="mr-3 h-6 w-6 text-slate-700" />
            <h3 className="text-xl font-semibold text-slate-900">
              Recent Activity
            </h3>
          </div>

          {/* Time Filter */}
          <div className="flex rounded-lg border border-gray-200 bg-gray-50 p-1">
            {["day", "week", "month"].map((filter) => (
              <button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`rounded-md px-3 py-1 text-sm font-medium transition-all ${
                  timeFilter === filter
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="space-y-4">
          {filteredActivities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className={`rounded-lg border-l-4 p-4 ${getPriorityColor(
                  activity.priority,
                )}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${activity.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-gray-900">
                          {activity.title}
                        </h4>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getPriorityBadge(
                            activity.priority,
                          )}`}
                        >
                          {activity.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {activity.description}
                      </p>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <Calendar className="mr-1 h-3 w-3" />
                        {activity.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredActivities.length === 0 && (
          <div className="py-8 text-center text-gray-500">
            <Clock className="mx-auto mb-3 h-12 w-12 text-gray-300" />
            <p>No activities found for the selected time period.</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredActivities.length > 0 && (
          <div className="mt-6 text-center">
            <Button
              variant="outline"
              className="text-slate-700 hover:bg-slate-100"
            >
              Load More Activities
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default FarmActivity;
