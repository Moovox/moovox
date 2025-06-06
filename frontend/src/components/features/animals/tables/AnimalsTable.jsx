import { Filter, Heart, Map, Search } from "lucide-react";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { animalService } from "../../../../services/animalService";
import FilterSection from "../../../shared/FilterSection";
import PageHeader from "../../../shared/PageHeader";
import PageLayout from "../../../shared/PageLayout";
import PaginationInfo from "../../../shared/PaginationInfo";
import { StatsCard, StatsGrid } from "../../../shared/StatsCard";
import TableContainer from "../../../shared/TableContainer";
import {
  TableEmptyState,
  TableLoadingState,
} from "../../../shared/TableStates";
import { Button } from "../../../ui/button";
import { TableHead, TableRow } from "../../../ui/table";
import { useToast } from "../../../ui/use-toast";
import AnimalCreateModalStandardized from "../modals/AnimalCreateModalStandardized";
import AnimalEditModal from "../modals/AnimalEditModal";
import AnimalTableRow from "./AnimalTableRow";

const species = [
  { value: "all", label: "Todas as espécies" },
  { value: "bovine", label: "Bovinos" },
  { value: "swine", label: "Suínos" },
  { value: "poultry", label: "Aves" },
  { value: "goat", label: "Caprinos" },
  { value: "sheep", label: "Ovinos" },
];

const statusMap = {
  healthy: {
    label: "Saudável",
    className: "bg-green-100 text-green-800 border-green-200",
    dot: "bg-green-500",
  },
  in_treatment: {
    label: "Em Tratamento",
    className: "bg-yellow-100 text-yellow-800 border-yellow-200",
    dot: "bg-yellow-500",
  },
  recovering: {
    label: "Recuperando",
    className: "bg-blue-100 text-blue-800 border-blue-200",
    dot: "bg-blue-500",
  },
  sick: {
    label: "Doente",
    className: "bg-red-100 text-red-800 border-red-200",
    dot: "bg-red-500",
  },
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
      console.error("Erro ao carregar animais:", error);
      toast({
        variant: "destructive",
        title: "Erro ao carregar animais",
        description:
          "Não foi possível carregar a lista de animais. Tente novamente.",
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

  useEffect(() => {
    loadAnimals();
  }, [farmId, loadAnimals]);

  useEffect(() => {
    let eventTimeout = null;

    const handleFarmChange = (event) => {
      if (eventTimeout) {
        clearTimeout(eventTimeout);
      }

      const newFarmId = event.detail?.farmId;
      if (newFarmId !== farmId) {
        eventTimeout = setTimeout(() => {
          loadAnimals();
        }, 150);
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

  useEffect(() => {
    setCurrentPage(1);
  }, [search, animalSpecies]);

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este animal?")) {
      setDeletingAnimalId(id);
      try {
        await animalService.deleteAnimal(id);
        toast({
          title: "Sucesso",
          description: "Animal excluído com sucesso!",
          variant: "success",
        });
        loadAnimals();
      } catch (error) {
        console.error("Erro ao excluir animal:", error);
        toast({
          variant: "destructive",
          title: "Erro ao excluir",
          description: "Não foi possível excluir o animal. Tente novamente.",
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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAnimals.length / itemsPerPage),
  );
  const paginatedAnimals = filteredAnimals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const renderTableContent = () => {
    if (loading) {
      return (
        <TableLoadingState
          colSpan={isMobile ? 4 : 8}
          message="Carregando animais..."
        />
      );
    }

    if (filteredAnimals.length === 0) {
      return (
        <TableEmptyState
          colSpan={isMobile ? 4 : 8}
          title="Nenhum animal encontrado"
          description="Tente ajustar os filtros ou adicionar um novo animal"
        />
      );
    }

    return paginatedAnimals.map((animal, index) => (
      <AnimalTableRow
        key={animal.id}
        animal={animal}
        index={index}
        isMobile={isMobile}
        onEdit={handleEdit}
        onDelete={handleDelete}
        deletingAnimalId={deletingAnimalId}
      />
    ));
  };

  const tableHeaders = (
    <TableRow className="hover:to-gray-150 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100">
      {!isMobile && (
        <TableHead className="font-semibold text-gray-700">ID</TableHead>
      )}
      <TableHead className="font-semibold text-gray-700">
        Identificação
      </TableHead>
      {!isMobile && (
        <TableHead className="font-semibold text-gray-700">Nome</TableHead>
      )}
      <TableHead className="font-semibold text-gray-700">Espécie</TableHead>
      {!isMobile && (
        <TableHead className="font-semibold text-gray-700">
          Data Nascimento
        </TableHead>
      )}
      {!isMobile && (
        <TableHead className="font-semibold text-gray-700">Peso</TableHead>
      )}
      <TableHead className="font-semibold text-gray-700">Status</TableHead>
      <TableHead className="text-center font-semibold text-gray-700">
        Ações
      </TableHead>
    </TableRow>
  );

  const filterActions = (
    <>
      <Button
        variant="outline"
        className="border-amber-300 bg-white text-amber-700 shadow-sm transition-all duration-200 hover:bg-amber-50"
        onClick={() => navigate("/animal-map")}
      >
        <Map className="mr-2 h-4 w-4" />
        Ver no Mapa
      </Button>
      <AnimalCreateModalStandardized onSuccess={loadAnimals} />
    </>
  );

  return (
    <PageLayout>
      <PageHeader
        icon={<Map className="h-5 w-5 text-white" />}
        title="Gestão de Animais"
        description="Gerencie todos os animais da sua fazenda"
      />

      <FilterSection
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Buscar por ID, nome ou identificação..."
        filterValue={animalSpecies}
        onFilterChange={setAnimalSpecies}
        filterOptions={species}
        filterPlaceholder="Filtrar por espécie"
        actions={filterActions}
      />

      <StatsGrid columns={3}>
        <StatsCard
          title="Total de Animais"
          value={animals.length}
          icon={<Filter />}
          bgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatsCard
          title="Filtrados"
          value={filteredAnimals.length}
          icon={<Search />}
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatsCard
          title="Saudáveis"
          value={animals.filter((a) => a.status === "healthy").length}
          icon={<Heart />}
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
      </StatsGrid>

      <TableContainer headers={tableHeaders} body={renderTableContent()} />

      <PaginationInfo
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredAnimals.length}
        itemName="animais"
      />

      {animalToEdit && (
        <AnimalEditModal
          animal={animalToEdit}
          open={editModalOpen}
          onOpenChange={setEditModalOpen}
          onSuccess={loadAnimals}
        />
      )}
    </PageLayout>
  );
}

AnimalsTable.propTypes = {
  farmId: PropTypes.string,
};

export default AnimalsTable;
