import React from "react";
import { Table, TableBody, TableHeader } from "../ui/table";

const TableContainer = ({ children, headers, body }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>{headers}</TableHeader>
          <TableBody>{body || children}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableContainer; 