import { AlertCircle, Loader2, Pencil, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { applicationService } from "../../services/applicationService";
import ApplicationCreateModal from "../modals/ApplicationCreateModal";
import ApplicationEditModal from "../modals/ApplicationEditModal";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Pagination } from "../ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useToast } from "../ui/use-toast";

function ApplicationsTable({
  applications,
  loading,
  error,
  onApplicationCreated,
}) {
  const [search, setSearch] = useState("");
  const [loadingDelete, setLoadingDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [applicationToEdit, setApplicationToEdit] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { toast } = useToast();
  const itemsPerPage = 10;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filteredApplications =
    applications?.filter(
      (application) =>
        application?.animalName?.toLowerCase().includes(search.toLowerCase()) ||
        application?.animalIdentification
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        application?.vaccineName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        application?.appliedBy?.toLowerCase().includes(search.toLowerCase()) ||
        application?.id?.toString().includes(search),
    ) || [];

  // Calculate total pages
  const totalPages = Math.max(
    1,
    Math.ceil(filteredApplications.length / itemsPerPage),
  );

  // Get only applications for current page
  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleDelete = async (id, animalName, vaccineName) => {
    if (!id) {
      toast({
        title: "Error",
        description: "Invalid application ID.",
        variant: "destructive",
      });
      return;
    }

    if (
      !window.confirm(
        `Are you sure you want to delete the application of "${vaccineName}" to "${animalName}"?`,
      )
    ) {
      return;
    }

    setLoadingDelete(id);
    try {
      await applicationService.deleteApplication(id);
      toast({
        title: "Success",
        description: "Application deleted successfully!",
        variant: "success",
      });

      if (onApplicationCreated) {
        await onApplicationCreated();
      }
    } catch (error) {
      console.error("Error deleting application:", error);
      toast({
        title: "Error deleting application",
        description:
          error.message || "An error occurred while deleting the application",
        variant: "destructive",
      });
    } finally {
      setLoadingDelete(null);
    }
  };

  const handleEdit = (application) => {
    setApplicationToEdit(application);
    setEditModalOpen(true);
  };

  const renderTableContent = () => {
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={isMobile ? 4 : 6} className="h-24 text-center">
            <div className="flex items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-amber-700" />
            </div>
          </TableCell>
        </TableRow>
      );
    }

    if (error) {
      return (
        <TableRow>
          <TableCell colSpan={isMobile ? 4 : 6} className="h-24">
            <Alert variant="destructive" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {error.message ||
                  "Error loading applications. Please try again."}
              </AlertDescription>
            </Alert>
          </TableCell>
        </TableRow>
      );
    }

    if (filteredApplications.length === 0) {
      return (
        <TableRow>
          <TableCell
            colSpan={isMobile ? 4 : 6}
            className="text-muted-foreground py-8 text-center"
          >
            No applications found.
          </TableCell>
        </TableRow>
      );
    }

    return paginatedApplications.map((application) => {
      const applicationDate = application.date
        ? new Date(application.date)
        : null;

      return (
        <TableRow key={application.id}>
          {!isMobile && <TableCell>{application.id}</TableCell>}
          <TableCell>
            {applicationDate ? applicationDate.toLocaleDateString() : "-"}
          </TableCell>
          <TableCell>
            <div className="font-medium">{application.animalName}</div>
            <div className="text-xs text-gray-500">
              {application.animalIdentification}
            </div>
          </TableCell>
          <TableCell>{application.vaccineName}</TableCell>
          {!isMobile && <TableCell>{application.appliedBy}</TableCell>}
          <TableCell>
            <div className="flex justify-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="text-amber-700 transition-colors hover:bg-amber-100 hover:text-amber-800"
                title="Edit"
                onClick={() => handleEdit(application)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-red-500 transition-colors hover:bg-red-50 hover:text-red-600"
                title="Delete"
                onClick={() =>
                  handleDelete(
                    application.id,
                    application.animalName,
                    application.vaccineName,
                  )
                }
                disabled={loadingDelete === application.id}
              >
                {loadingDelete === application.id ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4" />
                )}
              </Button>
            </div>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="mb-2 flex flex-col justify-between gap-3 md:flex-row">
        <Input
          placeholder="Search by animal, vaccine or person..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white md:w-64"
        />
        <ApplicationCreateModal onSuccess={onApplicationCreated} />
      </div>

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-amber-50">
              {!isMobile && <TableHead className="w-12">ID</TableHead>}
              <TableHead>Date</TableHead>
              <TableHead>Animal</TableHead>
              <TableHead>Vaccine</TableHead>
              {!isMobile && <TableHead>Applied By</TableHead>}
              <TableHead className="w-24 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{renderTableContent()}</TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Show pagination information */}
      <div className="text-center text-sm text-gray-500">
        {filteredApplications.length > 0 ? (
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredApplications.length)}{" "}
            of {filteredApplications.length} applications
          </span>
        ) : null}
      </div>

      {/* Edit Modal */}
      {applicationToEdit && (
        <ApplicationEditModal
          application={applicationToEdit}
          open={editModalOpen}
          onOpenChange={setEditModalOpen}
          onSuccess={onApplicationCreated}
        />
      )}
    </div>
  );
}

ApplicationsTable.propTypes = {
  applications: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  onApplicationCreated: PropTypes.func,
};

export default ApplicationsTable;
