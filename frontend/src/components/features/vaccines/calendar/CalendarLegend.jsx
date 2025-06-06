import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Syringe,
  XCircle,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../ui/badge";
import Card from "../../../ui/Card";

const CalendarLegend = () => {
  return (
    <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="p-4">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Calendar Legend
        </h3>

        <div className="space-y-4">
          {/* Alert Levels */}
          <div>
            <h4 className="mb-2 text-sm font-medium text-gray-700">
              Alert Levels
            </h4>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-red-200 bg-red-50 text-red-800"
              >
                <AlertTriangle className="mr-2 h-3 w-3" />
                Urgent (≤1 day)
              </Badge>
              <Badge
                variant="outline"
                className="border-orange-200 bg-orange-50 text-orange-800"
              >
                <Clock className="mr-2 h-3 w-3" />
                Warning (≤3 days)
              </Badge>
              <Badge
                variant="outline"
                className="border-blue-200 bg-blue-50 text-blue-800"
              >
                <Syringe className="mr-2 h-3 w-3" />
                Info (≤7 days)
              </Badge>
            </div>
          </div>

          {/* Status Indicators */}
          <div>
            <h4 className="mb-2 text-sm font-medium text-gray-700">
              Status Indicators
            </h4>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-green-200 bg-green-50 text-green-700"
              >
                <CheckCircle className="mr-2 h-3 w-3" />
                Applied
              </Badge>
              <Badge
                variant="outline"
                className="border-yellow-200 bg-yellow-50 text-yellow-700"
              >
                <Clock className="mr-2 h-3 w-3" />
                Pending
              </Badge>
              <Badge
                variant="outline"
                className="border-red-200 bg-red-50 text-red-700"
              >
                <XCircle className="mr-2 h-3 w-3" />
                Overdue
              </Badge>
            </div>
          </div>

          {/* Visual Indicators */}
          <div>
            <h4 className="mb-2 text-sm font-medium text-gray-700">
              Visual Indicators
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded border-2 border-blue-300 bg-blue-100" />
                <span>Today</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded border-2 border-blue-500 bg-blue-200" />
                <span>Selected date</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <span>Number indicates count of applications</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="border-t border-gray-200 pt-3">
            <h4 className="mb-2 text-sm font-medium text-gray-700">
              How to Use
            </h4>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Click on any date to view scheduled applications</li>
              <li>
                • Use filters to narrow down by animal, vaccine, or status
              </li>
              <li>• Search for specific dates using the date picker</li>
              <li>
                • Navigate months using dropdown selectors or arrow buttons
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CalendarLegend;
