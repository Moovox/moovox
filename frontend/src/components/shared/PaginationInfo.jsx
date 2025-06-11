import React from "react";
import { Pagination } from "../ui/pagination";

const PaginationInfo = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
  itemName = "itens",
}) => {
  return (
    <>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}

      {/* Pagination info */}
      {totalItems > 0 && (
        <div className="mt-4 text-center">
          <p className="inline-block rounded-lg border border-gray-100 bg-white px-4 py-2 text-sm text-gray-500 shadow-sm">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
            <span className="font-semibold text-amber-600">{totalItems}</span>{" "}
            {itemName}
          </p>
        </div>
      )}
    </>
  );
};

export default PaginationInfo;
