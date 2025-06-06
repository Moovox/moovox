import { Edit, Loader2, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../../../ui/button";
import { TableCell, TableRow } from "../../../ui/table";

const typeMap = {
  Administrator: {
    label: "Administrador",
    className: "bg-purple-100 text-purple-800 border-purple-200",
    dot: "bg-purple-500",
  },
  Farmer: {
    label: "Fazendeiro",
    className: "bg-green-100 text-green-800 border-green-200",
    dot: "bg-green-500",
  },
  Farmhand: {
    label: "Funcionário",
    className: "bg-blue-100 text-blue-800 border-blue-200",
    dot: "bg-blue-500",
  },
  Veterinarian: {
    label: "Veterinário",
    className: "bg-orange-100 text-orange-800 border-orange-200",
    dot: "bg-orange-500",
  },
};

const UserTableRow = ({
  user,
  index,
  isMobile,
  onEdit,
  onDelete,
  loadingDelete,
}) => {
  return (
    <TableRow
      className={`transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-orange-50/30 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/30"} `}
    >
      {!isMobile && (
        <TableCell className="font-mono text-sm text-gray-500">
          #{user.id}
        </TableCell>
      )}
      <TableCell className="font-semibold text-gray-900">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
          {user.name}
        </div>
      </TableCell>
      {!isMobile && (
        <TableCell className="text-gray-600">{user.email}</TableCell>
      )}
      <TableCell>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${(user.type && typeMap[user.type]?.className) || "border-gray-200 bg-gray-100 text-gray-600"} `}
        >
          <div
            className={`h-1.5 w-1.5 rounded-full ${(user.type && typeMap[user.type]?.dot) || "bg-gray-400"}`}
          ></div>
          {(user.type && typeMap[user.type]?.label) ||
            user.type ||
            "Indefinido"}
        </span>
      </TableCell>
      <TableCell>
        <div className="flex justify-center gap-1">
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 text-blue-600 transition-all duration-200 hover:bg-blue-100 hover:text-blue-700"
            title="Editar usuário"
            onClick={() => onEdit(user)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 text-red-500 transition-all duration-200 hover:bg-red-100 hover:text-red-600"
            title="Excluir usuário"
            onClick={() => onDelete(user.id, user.name)}
            disabled={loadingDelete === user.id}
          >
            {loadingDelete === user.id ? (
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

export default UserTableRow;
