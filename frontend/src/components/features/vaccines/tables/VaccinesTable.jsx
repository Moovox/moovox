import { Factory, Search, Shield, Syringe } from "lucide-react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { vaccineService } from "../../../../services/vaccineService";
import PageHeader from "../../../shared/PageHeader";
import PageLayout from "../../../shared/PageLayout";
import PaginationInfo from "../../../shared/PaginationInfo";
import { StatsCard, StatsGrid } from "../../../shared/StatsCard";
import TableContainer from "../../../shared/TableContainer";
import {
  TableEmptyState,
  TableErrorState,
  TableLoadingState,
} from "../../../shared/TableStates";
import { Input } from "../../../ui/input";
import { TableHead, TableRow } from "../../../ui/table";
import { useToast } from "../../../ui/use-toast";
import VaccineCreateModal from "../modals/VaccineCreateModal";
import VaccineEditModal from "../modals/VaccineEditModal";
import VaccineTableRow from "./VaccineTableRow";

function VaccinesTable({ vaccines, loading, onVaccineCreated, error }) {
  const [search, setSearch] = useState("");
  const [loadingDelete, setLoadingDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [editingVaccine, setEditingVaccine] = useState(null);
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

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filteredVaccines =
    vaccines?.filter((vaccine) => {
      const searchTerm = search.toLowerCase();
      return (
        vaccine?.name?.toLowerCase().includes(searchTerm) ||
        vaccine?.manufacturer?.name?.toLowerCase().includes(searchTerm) ||
        vaccine?.manufacturer?.toLowerCase().includes(searchTerm) ||
        vaccine?.batch?.toLowerCase().includes(searchTerm) ||
        vaccine?.batchNumber?.toLowerCase().includes(searchTerm) ||
        vaccine?.target_disease?.toLowerCase().includes(searchTerm)
      );
    }) || [];

  const totalPages = Math.max(
    1,
    Math.ceil(filteredVaccines.length / itemsPerPage),
  );
  const paginatedVaccines = filteredVaccines.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Calculate expiration statistics
  const today = new Date();
  const expiredVaccines =
    vaccines?.filter((vaccine) => {
      if (!vaccine.expirationDate) return false;
      return new Date(vaccine.expirationDate) < today;
    }).length || 0;

  const expiringIn30Days =
    vaccines?.filter((vaccine) => {
      if (!vaccine.expirationDate) return false;
      const expirationDate = new Date(vaccine.expirationDate);
      const thirtyDaysFromNow = new Date(
        today.getTime() + 30 * 24 * 60 * 60 * 1000,
      );
      return expirationDate >= today && expirationDate <= thirtyDaysFromNow;
    }).length || 0;

  const handleDelete = async (id, name) => {
    if (!id) {
      toast({
        title: "Error",
        description: "Invalid vaccine ID.",
        variant: "destructive",
      });
      return;
    }

    if (!window.confirm(`Are you sure you want to delete vaccine "${name}"?`)) {
      return;
    }

    setLoadingDelete(id);
    try {
      await vaccineService.deleteVaccine(id);
      toast({
        title: "Success",
        description: "Vaccine deleted successfully!",
        variant: "success",
      });

      if (onVaccineCreated) {
        await onVaccineCreated();
      }
    } catch (error) {
      console.error("Error deleting vaccine:", error);
      toast({
        title: "Error deleting vaccine",
        description:
          error.message || "An error occurred while deleting the vaccine",
        variant: "destructive",
      });
    } finally {
      setLoadingDelete(null);
    }
  };

  const handleEditVaccine = (vaccine) => {
    setEditingVaccine(vaccine);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setEditingVaccine(null);
  };

  const renderTableContent = () => {
    if (loading) {
      return (
        <TableLoadingState
          colSpan={isMobile ? 3 : 5}
          message="Loading vaccines..."
        />
      );
    }

    if (error) {
      return <TableErrorState colSpan={isMobile ? 3 : 5} error={error} />;
    }

    if (filteredVaccines.length === 0) {
      return (
        <TableEmptyState
          colSpan={isMobile ? 3 : 5}
          title="No vaccines found"
          description="Try adjusting the filters or add a new vaccine"
        />
      );
    }

    return paginatedVaccines.map((vaccine, index) => (
      <VaccineTableRow
        key={vaccine.id}
        vaccine={vaccine}
        index={index}
        isMobile={isMobile}
        onEdit={handleEditVaccine}
        onDelete={handleDelete}
        loadingDelete={loadingDelete}
      />
    ));
  };

  const tableHeaders = (
    <TableRow className="hover:to-gray-150 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100">
      <TableHead className="font-semibold text-gray-700">Name</TableHead>
      <TableHead className="font-semibold text-gray-700">
        Manufacturer
      </TableHead>
      {!isMobile && (
        <TableHead className="font-semibold text-gray-700">
          Batch Number
        </TableHead>
      )}
      {!isMobile && (
        <TableHead className="font-semibold text-gray-700">
          Expiration Date
        </TableHead>
      )}
      <TableHead className="text-center font-semibold text-gray-700">
        Actions
      </TableHead>
    </TableRow>
  );

  return (
    <PageLayout>
      <PageHeader
        icon={<Syringe />}
        title="Vaccine Management"
        description="Manage all vaccines in the system"
      />

      <div className="mb-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          <div className="flex flex-1 flex-col gap-4 md:flex-row">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <Input
                placeholder="Search by name, manufacturer, batch or disease..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-gray-200 bg-gray-50 pl-10 transition-colors focus:bg-white"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <VaccineCreateModal onSuccess={onVaccineCreated} />
          </div>
        </div>
      </div>

      <StatsGrid columns={4}>
        <StatsCard
          title="Total Vaccines"
          value={vaccines?.length || 0}
          icon={<Syringe />}
          bgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Filtered"
          value={filteredVaccines.length}
          icon={<Search />}
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatsCard
          title="Expired"
          value={expiredVaccines}
          icon={<Shield />}
          bgColor="bg-red-100"
          iconColor="text-red-600"
        />
        <StatsCard
          title="Expiring Soon"
          value={expiringIn30Days}
          icon={<Factory />}
          bgColor="bg-orange-100"
          iconColor="text-orange-600"
        />
      </StatsGrid>

      <TableContainer headers={tableHeaders} body={renderTableContent()} />

      <PaginationInfo
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredVaccines.length}
        itemName="vaccines"
      />

      {editingVaccine && (
        <VaccineEditModal
          vaccine={editingVaccine}
          open={editModalOpen}
          onOpenChange={setEditModalOpen}
          onSuccess={async () => {
            handleEditModalClose();
            if (onVaccineCreated) {
              await onVaccineCreated();
            }
          }}
        />
      )}
    </PageLayout>
  );
}

VaccinesTable.propTypes = {
  vaccines: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  onVaccineCreated: PropTypes.func,
};

export default VaccinesTable;
