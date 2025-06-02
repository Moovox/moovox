import { Building2, Check, Pencil, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

/**
 * Card to display a farm with its actions
 * @param {Object} props
 * @param {Object} props.farm - Farm data to be displayed
 * @param {Function} props.onViewDetails - Function to view farm details
 * @param {Function} props.onEdit - Function to edit the farm
 * @param {Function} props.onSelect - Function to select the farm
 * @param {Function} props.onDelete - Function to delete the farm
 */
function FarmCard({ farm, onViewDetails, onEdit, onSelect, onDelete }) {
  return (
    <div className="overflow-hidden rounded-xl border border-amber-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="border-b border-amber-100 bg-amber-50 p-2 sm:p-3">
        <h3 className="truncate text-base font-semibold text-amber-900 sm:text-lg">
          {farm.name}
        </h3>
        <p className="text-xs text-amber-700 sm:text-sm">{farm.location}</p>
      </div>
      <div className="p-3 sm:p-4">
        <div className="mb-3 space-y-1.5 sm:mb-4 sm:space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-amber-800 sm:text-sm">Size:</span>
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium sm:text-sm">
              {farm.size} hectares
            </span>
          </div>
          {farm.animalCount !== undefined && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-amber-800 sm:text-sm">
                Animals:
              </span>
              <span className="text-xs font-medium sm:text-sm">
                {farm.animalCount || 0}
              </span>
            </div>
          )}
          {farm.userCount !== undefined && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-amber-800 sm:text-sm">Users:</span>
              <span className="text-xs font-medium sm:text-sm">
                {farm.userCount || 0}
              </span>
            </div>
          )}
        </div>

        {farm.description && (
          <p className="mb-3 line-clamp-2 text-xs text-amber-600 sm:mb-4 sm:text-sm">
            {farm.description}
          </p>
        )}

        <div className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-3 sm:gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex h-auto items-center justify-center space-x-1 py-1 text-xs"
            onClick={() => onViewDetails(farm)}
          >
            <Building2 className="h-3 w-3" />
            <span>Details</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="flex h-auto items-center justify-center space-x-1 py-1 text-xs"
            onClick={() => onEdit(farm)}
          >
            <Pencil className="h-3 w-3" />
            <span>Edit</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="flex h-auto items-center justify-center space-x-1 border-green-300 bg-green-50 py-1 text-xs text-green-700 hover:bg-green-100"
            onClick={() => onSelect(farm)}
          >
            <Check className="h-3 w-3" />
            <span>Select</span>
          </Button>

          <Button
            variant="destructive"
            size="sm"
            className="flex h-auto items-center justify-center space-x-1 py-1 text-xs"
            onClick={() => onDelete(farm)}
          >
            <Trash2 className="h-3 w-3" />
            <span>Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FarmCard;
