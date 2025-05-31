import { Building2, Pencil, Check, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';

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
        <div className="bg-white rounded-xl border border-amber-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="border-b border-amber-100 bg-amber-50 p-2 sm:p-3">
                <h3 className="font-semibold text-base sm:text-lg text-amber-900 truncate">{farm.name}</h3>
                <p className="text-amber-700 text-xs sm:text-sm">{farm.location}</p>
            </div>
            <div className="p-3 sm:p-4">
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    <div className="flex justify-between items-center">
                        <span className="text-amber-800 text-xs sm:text-sm">Size:</span>
                        <span className="font-medium text-xs sm:text-sm bg-amber-100 px-2 py-0.5 rounded-full">{farm.size} hectares</span>
                    </div>
                    {farm.animalCount !== undefined && (
                        <div className="flex justify-between items-center">
                            <span className="text-amber-800 text-xs sm:text-sm">Animals:</span>
                            <span className="font-medium text-xs sm:text-sm">{farm.animalCount || 0}</span>
                        </div>
                    )}
                    {farm.userCount !== undefined && (
                        <div className="flex justify-between items-center">
                            <span className="text-amber-800 text-xs sm:text-sm">Users:</span>
                            <span className="font-medium text-xs sm:text-sm">{farm.userCount || 0}</span>
                        </div>
                    )}
                </div>
                
                {farm.description && (
                    <p className="text-amber-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{farm.description}</p>
                )}
                
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center justify-center space-x-1 text-xs py-1 h-auto"
                        onClick={() => onViewDetails(farm)}
                    >
                        <Building2 className="h-3 w-3" />
                        <span>Details</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center justify-center space-x-1 text-xs py-1 h-auto"
                        onClick={() => onEdit(farm)}
                    >
                        <Pencil className="h-3 w-3" />
                        <span>Edit</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center justify-center space-x-1 text-xs py-1 h-auto bg-green-50 hover:bg-green-100 border-green-300 text-green-700"
                        onClick={() => onSelect(farm)}
                    >
                        <Check className="h-3 w-3" />
                        <span>Select</span>
                    </Button>

                    <Button
                        variant="destructive"
                        size="sm"
                        className="flex items-center justify-center space-x-1 text-xs py-1 h-auto"
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