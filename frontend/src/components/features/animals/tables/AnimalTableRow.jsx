import { Edit, Loader2, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../../../ui/button";
import { TableCell, TableRow } from "../../../ui/table";

const statusMap = {
  healthy: {
    label: "Healthy",
    className: "bg-green-100 text-green-800 border-green-200",
    dot: "bg-green-500",
  },
  in_treatment: {
    label: "In Treatment",
    className: "bg-yellow-100 text-yellow-800 border-yellow-200",
    dot: "bg-yellow-500",
  },
  recovering: {
    label: "Recovering",
    className: "bg-blue-100 text-blue-800 border-blue-200",
    dot: "bg-blue-500",
  },
  sick: {
    label: "Sick",
    className: "bg-red-100 text-red-800 border-red-200",
    dot: "bg-red-500",
  },
  HEALTHY: {
    label: "Healthy",
    className: "bg-green-100 text-green-800 border-green-200",
    dot: "bg-green-500",
  },
  GOOD: {
    label: "Good",
    className: "bg-green-100 text-green-800 border-green-200",
    dot: "bg-green-500",
  },
  FAIR: {
    label: "Fair",
    className: "bg-yellow-100 text-yellow-800 border-yellow-200",
    dot: "bg-yellow-500",
  },
  POOR: {
    label: "Poor",
    className: "bg-red-100 text-red-800 border-red-200",
    dot: "bg-red-500",
  },
};

const AnimalTableRow = ({
  animal,
  index,
  isMobile,
  onEdit,
  onDelete,
  deletingAnimalId,
}) => {
  return (
    <TableRow
      className={`transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-orange-50/30 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/30"} `}
    >
      {!isMobile && (
        <TableCell className="font-mono text-sm text-gray-500">
          #{animal.id}
        </TableCell>
      )}
      <TableCell className="font-semibold text-gray-900">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
          {typeof animal.identification === "string"
            ? animal.identification
            : String(animal.identification || "")}
        </div>
      </TableCell>
      {!isMobile && (
        <TableCell className="font-medium text-gray-700">
          {animal.name || <span className="italic text-gray-400">No name</span>}
        </TableCell>
      )}
      <TableCell>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
          {typeof animal.species === "string"
            ? animal.species
            : String(animal.species || "")}
        </span>
      </TableCell>
      {!isMobile && (
        <TableCell className="text-gray-600">
          {animal.birthDate ? (
            new Date(animal.birthDate).toLocaleDateString("en-US")
          ) : (
            <span className="text-gray-400">-</span>
          )}
        </TableCell>
      )}
      {!isMobile && (
        <TableCell className="font-medium text-gray-600">
          {animal.weight ? (
            `${animal.weight} kg`
          ) : (
            <span className="text-gray-400">-</span>
          )}
        </TableCell>
      )}
      <TableCell>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${(animal.status && statusMap[animal.status]?.className) || "border-gray-200 bg-gray-100 text-gray-600"} `}
        >
          <div
            className={`h-1.5 w-1.5 rounded-full ${(animal.status && statusMap[animal.status]?.dot) || "bg-gray-400"}`}
          ></div>
          {(animal.status && statusMap[animal.status]?.label) ||
            animal.status ||
            "Unknown"}
        </span>
      </TableCell>
      <TableCell>
        <div className="flex justify-center gap-1">
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 text-blue-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-700"
            onClick={() => onEdit(animal)}
            title="Edit animal"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 text-red-500 transition-all duration-200 hover:bg-red-100 hover:text-red-600"
            onClick={() => onDelete(animal.id)}
            title="Delete animal"
            disabled={deletingAnimalId === animal.id}
          >
            {deletingAnimalId === animal.id ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AnimalTableRow;
