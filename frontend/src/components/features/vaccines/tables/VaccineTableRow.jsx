import { Loader2, Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../../../ui/button";
import { TableCell, TableRow } from "../../../ui/table";

// Utility function to safely render field values
const safeRender = (value, fallback = "Unknown") => {
  if (value === null || value === undefined) return fallback;
  if (typeof value === "string") return value;
  if (typeof value === "object" && value.name) return value.name;
  if (typeof value === "object" && value.id) return value.id;
  return fallback;
};

const VaccineTableRow = ({
  vaccine,
  index,
  isMobile,
  onEdit,
  onDelete,
  loadingDelete,
}) => {
  const expirationDate = vaccine.expirationDate
    ? new Date(vaccine.expirationDate)
    : null;
  const isExpired = expirationDate && expirationDate < new Date();

  // Check if expiring within 30 days
  const today = new Date();
  const thirtyDaysFromNow = new Date(
    today.getTime() + 30 * 24 * 60 * 60 * 1000,
  );
  const isExpiringSoon =
    expirationDate &&
    expirationDate >= today &&
    expirationDate <= thirtyDaysFromNow;

  const rowClassName = () => {
    if (isExpired) return "bg-red-50 hover:bg-red-100";
    if (isExpiringSoon) return "bg-orange-50 hover:bg-orange-100";
    return "hover:bg-gray-50";
  };

  return (
    <TableRow className={rowClassName()}>
      <TableCell className="font-semibold text-gray-800">
        {safeRender(vaccine.name)}
      </TableCell>

      <TableCell className="text-gray-700">
        {safeRender(vaccine.manufacturer, "Unknown Manufacturer")}
        {isMobile && vaccine.batchNumber && (
          <div className="mt-1 text-xs text-gray-500">
            Batch: {safeRender(vaccine.batchNumber)}
          </div>
        )}
      </TableCell>

      {!isMobile && (
        <TableCell className="text-gray-700">
          {safeRender(vaccine.batchNumber, "-")}
        </TableCell>
      )}

      {!isMobile && (
        <TableCell
          className={
            isExpired
              ? "font-medium text-red-600"
              : isExpiringSoon
                ? "font-medium text-orange-600"
                : "text-gray-700"
          }
        >
          {expirationDate ? (
            <div className="flex flex-col">
              <span>{expirationDate.toLocaleDateString()}</span>
              {isExpired && (
                <span className="text-xs text-red-500">Expired</span>
              )}
              {isExpiringSoon && !isExpired && (
                <span className="text-xs text-orange-500">Expiring Soon</span>
              )}
            </div>
          ) : (
            "-"
          )}
        </TableCell>
      )}

      <TableCell>
        <div className="flex justify-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
            title="Edit vaccine"
            onClick={() => onEdit(vaccine)}
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-red-600 hover:bg-red-100 hover:text-red-700"
            title="Delete vaccine"
            onClick={() => onDelete(vaccine.id, vaccine.name)}
            disabled={loadingDelete === vaccine.id}
          >
            {loadingDelete === vaccine.id ? (
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

export default VaccineTableRow;
