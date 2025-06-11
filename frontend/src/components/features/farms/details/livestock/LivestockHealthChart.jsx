import { Heart } from "lucide-react";
import React from "react";
import Card, { CardContent } from "../../../../ui/card";

function LivestockHealthChart({ healthStats }) {
  // Calculate total animals and percentages for donut chart visualization
  const totalAnimals =
    healthStats.excellent + healthStats.good + healthStats.needsAttention;

  // Calculate individual percentages for each health category
  const excellentPercentage =
    totalAnimals > 0 ? (healthStats.excellent / totalAnimals) * 100 : 0;
  const goodPercentage =
    totalAnimals > 0 ? (healthStats.good / totalAnimals) * 100 : 0;
  const needsAttentionPercentage =
    totalAnimals > 0 ? (healthStats.needsAttention / totalAnimals) * 100 : 0;

  // Calculate healthy percentage for center display
  const healthyPercentage =
    totalAnimals > 0
      ? Math.round(
          ((healthStats.excellent + healthStats.good) / totalAnimals) * 100,
        )
      : 0;

  // Determine dominant health category for center display
  const dominantCategory = Math.max(
    excellentPercentage,
    goodPercentage,
    needsAttentionPercentage,
  );
  const centerDisplayText =
    totalAnimals > 0 ? `${Math.round(dominantCategory)}%` : "0%";

  const centerLabel =
    totalAnimals > 0
      ? dominantCategory === excellentPercentage
        ? "Excellent"
        : dominantCategory === goodPercentage
          ? "Good"
          : "Attention"
      : "No Data";

  // SVG circle circumference calculation (2 * π * r = 2 * π * 40)
  const circumference = 2 * Math.PI * 40;

  // Calculate stroke lengths
  const excellentStroke = (excellentPercentage / 100) * circumference;
  const goodStroke = (goodPercentage / 100) * circumference;
  const needsAttentionStroke = (needsAttentionPercentage / 100) * circumference;

  return (
    <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center">
          <Heart className="mr-3 h-6 w-6 text-emerald-700" />
          <h3 className="text-xl font-semibold text-emerald-900">
            Overall Health Status
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Visual Donut Chart */}
          <div className="flex items-center justify-center">
            <div className="relative h-48 w-48">
              {/* Background circle */}
              <svg
                className="h-48 w-48 -rotate-90 transform"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Excellent health segment */}
                {excellentStroke > 0 && (
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#10b981"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${excellentStroke} ${circumference - excellentStroke}`}
                    strokeDashoffset="0"
                    className="transition-all duration-1000"
                  />
                )}
                {/* Good health segment */}
                {goodStroke > 0 && (
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#f59e0b"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${goodStroke} ${circumference - goodStroke}`}
                    strokeDashoffset={`-${excellentStroke}`}
                    className="transition-all duration-1000"
                  />
                )}
                {/* Needs attention segment */}
                {needsAttentionStroke > 0 && (
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#ef4444"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${needsAttentionStroke} ${circumference - needsAttentionStroke}`}
                    strokeDashoffset={`-${excellentStroke + goodStroke}`}
                    className="transition-all duration-1000"
                  />
                )}
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-emerald-900">
                  {centerDisplayText}
                </span>
                <span className="text-sm text-emerald-700">{centerLabel}</span>
              </div>
            </div>
          </div>

          {/* Health Statistics */}
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white/70 p-3">
              <div className="flex items-center">
                <div className="mr-3 h-4 w-4 rounded-full bg-green-500"></div>
                <span className="font-medium text-gray-900">
                  Excellent Health
                </span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-green-600">
                  {healthStats.excellent}
                </span>
                <span className="ml-1 text-sm text-gray-500">animals</span>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white/70 p-3">
              <div className="flex items-center">
                <div className="mr-3 h-4 w-4 rounded-full bg-yellow-500"></div>
                <span className="font-medium text-gray-900">Good Health</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-yellow-600">
                  {healthStats.good}
                </span>
                <span className="ml-1 text-sm text-gray-500">animals</span>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white/70 p-3">
              <div className="flex items-center">
                <div className="mr-3 h-4 w-4 rounded-full bg-red-500"></div>
                <span className="font-medium text-gray-900">
                  Needs Attention
                </span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-red-600">
                  {healthStats.needsAttention}
                </span>
                <span className="ml-1 text-sm text-gray-500">animals</span>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-emerald-100 p-4">
              <p className="text-sm font-medium text-emerald-800">
                Health Trend: ↗{" "}
                {healthyPercentage >= 90
                  ? "Excellent"
                  : healthyPercentage >= 75
                    ? "Good"
                    : "Needs Attention"}
              </p>
              <p className="mt-1 text-xs text-emerald-700">
                {healthyPercentage}% of animals in excellent or good health
                condition
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LivestockHealthChart;
