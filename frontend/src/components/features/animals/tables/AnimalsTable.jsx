import { Loader2, Map, Pencil, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { animalService } from "../../../../services/animalService";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Pagination } from "../../../ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import { useToast } from "../../../ui/use-toast";
import AnimalCreateModalStandardized from "../modals/AnimalCreateModalStandardized";
import AnimalEditModal from "../modals/AnimalEditModal";

const species = [
  { value: "all", label: "All species" },
  { value: "bovine", label: "Bovine" },
  { value: "swine", label: "Swine" },
  { value: "poultry", label: "Poultry" },
  { value: "goat", label: "Goat" },
  { value: "sheep", label: "Sheep" },
];

const statusMap = {
  healthy: { label: "Healthy", className: "text-green-600" },
  in_treatment: { label: "In Treatment", className: "text-yellow-600" },
  recovering: { label: "Recovering", className: "text-blue-600" },
  sick: { label: "Sick", className: "text-red-600" },
};

function AnimalsTable({ farmId }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [animalSpecies, setAnimalSpecies] = useState("all");
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animalToEdit, setAnimalToEdit] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deletingAnimalId, setDeletingAnimalId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const { toast } = useToast();
  const itemsPerPage = 10;

  const loadAnimals = useCallback(async () => {
    try {
      const data = await animalService.listAnimals();
      setAnimals(data);
    } catch (error) {
      console.error("Error loading animals:", error);
      toast({
        variant: "destructive",
        title: "Error loading animals",
        description: "Could not load the animal list. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    loadAnimals();

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, [loadAnimals]);

  // Load animals when the farm changes
  useEffect(() => {
    loadAnimals();
  }, [farmId, loadAnimals]);

  // Listen for farm change event (debounced)
  useEffect(() => {
    let eventTimeout = null;

    const handleFarmChange = (event) => {
      // Clear existing timeout
      if (eventTimeout) {
        clearTimeout(eventTimeout);
      }

      // Only reload if farm actually changed
      const newFarmId = event.detail?.farmId;
      if (newFarmId !== farmId) {
        eventTimeout = setTimeout(() => {
          loadAnimals();
        }, 150); // Slight delay to avoid rapid successive calls
      }
    };

    window.addEventListener("farmChanged", handleFarmChange);
    return () => {
      window.removeEventListener("farmChanged", handleFarmChange);
      if (eventTimeout) {
        clearTimeout(eventTimeout);
      }
    };
  }, [loadAnimals, farmId]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, animalSpecies]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this animal?")) {
      setDeletingAnimalId(id);
      try {
        await animalService.deleteAnimal(id);
        toast({
          title: "Success",
          description: "Animal deleted successfully!",
          variant: "success",
        });
        loadAnimals();
      } catch (error) {
        console.error("Error deleting animal:", error);
        toast({
          variant: "destructive",
          title: "Error deleting",
          description: "Could not delete the animal. Please try again later.",
        });
      } finally {
        setDeletingAnimalId(null);
      }
    }
  };

  const handleEdit = (animal) => {
    setAnimalToEdit(animal);
    setEditModalOpen(true);
  };
  const filteredAnimals = animals.filter(
    (animal) =>
      ((typeof animal.identification === "string"
        ? animal.identification.toLowerCase().includes(search.toLowerCase())
        : animal.identification?.toString().includes(search)) ||
        animal.name?.toLowerCase().includes(search.toLowerCase()) ||
        animal.id.toString().includes(search)) &&
      (animalSpecies === "all" ||
        (animal.species &&
          typeof animal.species === "string" &&
          animal.species.toLowerCase() === animalSpecies.toLowerCase())),
  );

  // Calculate total pages
  const totalPages = Math.max(
    1,
    Math.ceil(filteredAnimals.length / itemsPerPage),
  );

  // Get only animals for current page
  const paginatedAnimals = filteredAnimals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const renderTableRows = () => {
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={isMobile ? 4 : 8} className="h-24 text-center">
            <div className="flex items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-amber-700" />
            </div>
          </TableCell>
        </TableRow>
      );
    }

    if (filteredAnimals.length === 0) {
      return (
        <TableRow>
          <TableCell
            colSpan={isMobile ? 4 : 8}
            className="text-muted-foreground py-8 text-center"
          >
            No animals found.
          </TableCell>
        </TableRow>
      );
    }

    return paginatedAnimals.map((animal) => (
      <TableRow key={animal.id} className="hover:bg-amber-50/50">
        {!isMobile && <TableCell>{animal.id}</TableCell>}
        <TableCell className="font-medium">
          {typeof animal.identification === "string"
            ? animal.identification
            : String(animal.identification || "")}
        </TableCell>
        {!isMobile && <TableCell>{animal.name || "-"}</TableCell>}
        <TableCell className="capitalize">
          {typeof animal.species === "string"
            ? animal.species
            : String(animal.species || "")}
        </TableCell>
        {!isMobile && (
          <TableCell>
            {animal.birthDate
              ? new Date(animal.birthDate).toLocaleDateString()
              : "-"}
          </TableCell>
        )}
        {!isMobile && <TableCell>{animal.weight || "-"}</TableCell>}{" "}
        <TableCell>
          <span
            className={`font-medium ${(animal.status && statusMap[animal.status]?.className) || "text-gray-600"}`}
          >
            {(animal.status && statusMap[animal.status]?.label) ||
              animal.status ||
              "Unknown"}
          </span>
        </TableCell>
        <TableCell className="flex justify-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="text-amber-700 transition-colors hover:bg-amber-100 hover:text-amber-800"
            onClick={() => handleEdit(animal)}
            title="Edit"
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-red-500 transition-colors hover:bg-red-50 hover:text-red-600"
            onClick={() => handleDelete(animal.id)}
            title="Delete"
            disabled={deletingAnimalId === animal.id}
          >
            {deletingAnimalId === animal.id ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
          </Button>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="mb-2 flex flex-col justify-between gap-3 lg:flex-row">
        <div className="flex flex-col gap-3 md:flex-row">
          <Input
            placeholder="Search by ID, name or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white md:w-64"
          />
          <Select value={animalSpecies} onValueChange={setAnimalSpecies}>
            <SelectTrigger className="bg-white md:w-48">
              <SelectValue placeholder="Filter by species" />
            </SelectTrigger>
            <SelectContent>
              {species.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-amber-300 bg-white text-amber-800 hover:bg-amber-50"
            onClick={() => navigate("/animal-map")}
          >
            <Map className="mr-2 h-4 w-4" />
            View Map
          </Button>
          <AnimalCreateModalStandardized onSuccess={loadAnimals} />
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-amber-50">
              {!isMobile && <TableHead className="w-12">ID</TableHead>}
              <TableHead>Identification</TableHead>
              {!isMobile && <TableHead>Name</TableHead>}
              <TableHead>Species</TableHead>
              {!isMobile && <TableHead>Birth Date</TableHead>}
              {!isMobile && <TableHead>Weight (kg)</TableHead>}
              <TableHead>Status</TableHead>
              <TableHead className="w-24 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{renderTableRows()}</TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Pagination info */}
      <div className="text-center text-sm text-gray-500">
        {filteredAnimals.length > 0 ? (
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredAnimals.length)} of{" "}
            {filteredAnimals.length} animals
          </span>
        ) : null}
      </div>

      {/* Edit Modal */}
      {animalToEdit && (
        <AnimalEditModal
          animal={animalToEdit}
          open={editModalOpen}
          onOpenChange={setEditModalOpen}
          onSuccess={loadAnimals}
        />
      )}
    </div>
  );
}

AnimalsTable.propTypes = {
  farmId: PropTypes.string,
};

export default AnimalsTable;
