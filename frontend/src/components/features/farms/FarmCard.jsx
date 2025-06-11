import { Building2, Check, Eye, Loader2, Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";

/**
 * Card to display a farm with its actions
 * @param {Object} props
 * @param {Object} props.farm - Farm data to be displayed
 * @param {Function} props.onViewDetails - Function to view farm details
 * @param {Function} props.onEdit - Function to edit the farm
 * @param {Function} props.onSelect - Function to select the farm
 * @param {Function} props.onDelete - Function to delete the farm
 * @param {boolean} props.isDeleting - Whether the farm is being deleted
 */
function FarmCard({
  farm,
  onViewDetails,
  onEdit,
  onSelect,
  onDelete,
  isDeleting = false,
}) {
  return (
    <div className="group overflow-hidden rounded-xl border border-amber-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg">
      {/* Farm image */}
      <div className="relative h-48 overflow-hidden bg-amber-50">
        {farm.imageUrl ? (
          <img
            src={farm.imageUrl}
            alt={farm.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-100 via-amber-50 to-orange-50">
            <Building2 className="h-16 w-16 text-amber-300 transition-transform duration-300 group-hover:scale-110" />
          </div>
        )}

        {/* Action buttons overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />

        {/* Action buttons in top right corner */}
        <div className="absolute right-2 top-2 flex gap-1 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-white/90 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white"
            title="Edit Farm"
            onClick={() => onEdit(farm)}
          >
            <Pencil className="h-4 w-4 text-amber-700" />
          </Button>

          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-white/90 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white"
            title="Delete Farm"
            onClick={() => onDelete(farm)}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <Loader2 className="h-4 w-4 animate-spin text-red-600" />
            ) : (
              <Trash2 className="h-4 w-4 text-red-600" />
            )}
          </Button>
        </div>

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Card content */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="truncate text-lg font-semibold text-amber-900 transition-colors group-hover:text-amber-800">
            {farm.name}
          </h3>
          <p className="flex items-center truncate text-sm text-amber-700">
            <Building2 className="mr-1 h-3 w-3" />
            {farm.location || "Location not provided"}
          </p>
        </div>

        {/* Farm statistics with improved styling */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-gradient-to-r from-amber-100 to-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
            📏 {farm.size} hectares
          </span>
          <span className="inline-flex items-center rounded-full border border-green-200 bg-gradient-to-r from-green-100 to-green-50 px-3 py-1 text-xs font-medium text-green-800">
            🐄 {farm.animalCount || 0} animals
          </span>
          {farm.userCount !== undefined && (
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-gradient-to-r from-blue-100 to-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
              👥 {farm.userCount} users
            </span>
          )}
        </div>

        {/* Farm description */}
        {farm.description && (
          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-600">
            {farm.description}
          </p>
        )}

        {/* Action buttons with improved design */}
        <div className="flex gap-2">
          <Button
            className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white transition-all duration-200 hover:from-amber-700 hover:to-amber-800 hover:shadow-md"
            onClick={() => onSelect(farm)}
            size="sm"
          >
            <Check className="mr-1 h-4 w-4" />
            Select
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="border-2 border-amber-200 text-amber-700 transition-all duration-200 hover:scale-105 hover:border-amber-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 hover:shadow-md"
            onClick={() => onViewDetails(farm)}
            title="View Farm Details"
          >
            <Eye className="mr-1 h-4 w-4" />
            <span className="font-medium">Details</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FarmCard;
