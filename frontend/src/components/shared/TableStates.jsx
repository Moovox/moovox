import { Loader2, Search } from "lucide-react";
import React from "react";
import { Alert, AlertDescription } from "../ui/alert";
import { TableCell, TableRow } from "../ui/table";

const TableLoadingState = ({ colSpan, message = "Carregando..." }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="h-32 text-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="relative">
            <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
            <div className="absolute inset-0 h-8 w-8 animate-ping rounded-full bg-amber-200 opacity-30"></div>
          </div>
          <p className="text-sm font-medium text-gray-600">{message}</p>
        </div>
      </TableCell>
    </TableRow>
  );
};

const TableEmptyState = ({ colSpan, title, description }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="py-16 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <div>
            <p className="font-medium text-gray-500">{title}</p>
            <p className="mt-1 text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};

const TableErrorState = ({ colSpan, error }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="h-24">
        <Alert variant="destructive" className="flex items-center gap-2">
          <AlertDescription>
            {error?.message || "Erro ao carregar dados. Tente novamente."}
          </AlertDescription>
        </Alert>
      </TableCell>
    </TableRow>
  );
};

export { TableEmptyState, TableErrorState, TableLoadingState };
