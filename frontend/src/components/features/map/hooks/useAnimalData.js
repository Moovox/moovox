import { useCallback, useEffect, useRef, useState } from "react";
import {
  getFenceForAnimal,
  getRandomCoordinatesInFence,
} from "../config/virtualFencesConfig";
import { keepCoordinateWithinLimits } from "../utils/mapUtils";

/**
 * Hook for managing animal data on the map
 */
export const useAnimalData = ({
  speciesFilter = "",
  statusFilter = "",
  search = "",
  autoUpdate = true,
  updateInterval = 120000,
}) => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  // Generate mock data with coordinates in reorganized virtual fences
  const generateMockAnimals = useCallback(() => {
    console.log("Generating mock animals with reorganized fences...");

    // Function to generate animal positioned in appropriate fence
    const generateAnimalInCorrectFence = (animal) => {
      const fence = getFenceForAnimal(animal.species, animal.status);
      const coordinates = getRandomCoordinatesInFence(fence);

      return {
        ...animal,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      };
    };

    const baseAnimals = [
      // Bovinos - Pasto Principal (Main Farm)
      {
        id: 1,
        identification: "BOV001",
        name: "Nelore Branco",
        species: "cattle",
        weight: 450,
        status: "Ativo",
        lastUpdate: "2023-07-15 14:30",
      },
      {
        id: 2,
        identification: "BOV002",
        name: "Angus Preto",
        species: "cattle",
        weight: 520,
        status: "Ativo",
        lastUpdate: "2023-07-15 14:25",
      },
      {
        id: 3,
        identification: "BOV003",
        name: "Zebu Gir",
        species: "cattle",
        weight: 380,
        status: "Em Tratamento", // Vai para quarentena
        lastUpdate: "2023-07-15 09:15",
      },
      // Caprinos - Pasto Norte
      {
        id: 4,
        identification: "CAB001",
        name: "Saanen",
        species: "goats",
        weight: 35,
        status: "Ativo",
        lastUpdate: "2023-07-15 11:00",
      },
      {
        id: 5,
        identification: "CAB002",
        name: "Boer",
        species: "goats",
        weight: 42,
        status: "Ativo",
        lastUpdate: "2023-07-15 10:55",
      },
      // Ovinos - Pasto Sul
      {
        id: 6,
        identification: "OVE001",
        name: "Santa Inês",
        species: "sheep",
        weight: 40,
        status: "Ativo",
        lastUpdate: "2023-07-15 12:10",
      },
      {
        id: 7,
        identification: "OVE002",
        name: "Dorper",
        species: "sheep",
        weight: 38,
        status: "Ativo",
        lastUpdate: "2023-07-15 12:05",
      },
      {
        id: 8,
        identification: "OVE003",
        name: "Morada Nova",
        species: "sheep",
        weight: 35,
        status: "Ativo",
        lastUpdate: "2023-07-15 11:45",
      },
      // Suínos - Área de Suínos
      {
        id: 9,
        identification: "POR001",
        name: "Landrace",
        species: "swine",
        weight: 120,
        status: "Ativo",
        lastUpdate: "2023-07-15 13:45",
      },
      {
        id: 10,
        identification: "POR002",
        name: "Duroc",
        species: "swine",
        weight: 95,
        status: "Ativo",
        lastUpdate: "2023-07-15 13:40",
      },
      {
        id: 11,
        identification: "POR003",
        name: "Hampshire",
        species: "swine",
        weight: 85,
        status: "Em Tratamento", // Vai para quarentena
        lastUpdate: "2023-07-15 08:30",
      },
      // Aves - Aviário
      {
        id: 12,
        identification: "GAL001",
        name: "Caipira",
        species: "poultry",
        weight: 2.5,
        status: "Ativo",
        lastUpdate: "2023-07-15 15:20",
      },
      {
        id: 13,
        identification: "GAL002",
        name: "Rhode Island",
        species: "poultry",
        weight: 3.2,
        status: "Ativo",
        lastUpdate: "2023-07-15 15:18",
      },
      {
        id: 14,
        identification: "GAL003",
        name: "Leghorn",
        species: "poultry",
        weight: 2.8,
        status: "Ativo",
        lastUpdate: "2023-07-15 15:10",
      },
      {
        id: 15,
        identification: "GAL004",
        name: "Sussex",
        species: "poultry",
        weight: 3.0,
        status: "Ativo",
        lastUpdate: "2023-07-15 14:50",
      },
    ];

    // Generate animals positioned in correct fences
    const mockAnimals = baseAnimals.map(generateAnimalInCorrectFence);

    console.log(
      "Generated mock animals with reorganized fence positioning:",
      mockAnimals,
    );
    return mockAnimals;
  }, []);

  // Load animals function
  const loadAnimals = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("Loading animals...");

      let animalsData = [];

      // For now, use mock data directly until API is working
      console.log("Using reorganized mock data for development");
      animalsData = generateMockAnimals();

      // Apply filters
      let filteredAnimals = animalsData || [];

      if (speciesFilter) {
        filteredAnimals = filteredAnimals.filter(
          (animal) =>
            animal.species?.toLowerCase() === speciesFilter.toLowerCase(),
        );
      }

      if (statusFilter) {
        filteredAnimals = filteredAnimals.filter(
          (animal) =>
            animal.status?.toLowerCase() === statusFilter.toLowerCase(),
        );
      }

      if (search) {
        const searchTermLower = search.toLowerCase();
        filteredAnimals = filteredAnimals.filter(
          (animal) =>
            animal.identification?.toLowerCase().includes(searchTermLower) ||
            animal.name?.toLowerCase().includes(searchTermLower),
        );
      }

      // Ensure valid coordinates
      filteredAnimals = filteredAnimals.map((animal) => ({
        ...animal,
        latitude: keepCoordinateWithinLimits(animal.latitude, "lat"),
        longitude: keepCoordinateWithinLimits(animal.longitude, "lng"),
      }));

      console.log("Final filtered animals:", filteredAnimals);
      setAnimals(filteredAnimals);
    } catch (error) {
      console.error("Error loading animals:", error);
      setError(error.message || "Ocorreu um erro ao carregar os animais");
      setAnimals([]);
    } finally {
      setLoading(false);
    }
  }, [speciesFilter, statusFilter, search, generateMockAnimals]);

  // Effect for initial load and filter changes
  useEffect(() => {
    loadAnimals();
  }, [loadAnimals]);

  // Effect for auto-update interval
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Set up auto-update interval if enabled
    if (autoUpdate && updateInterval > 0) {
      intervalRef.current = setInterval(loadAnimals, updateInterval);
    }

    // Cleanup interval on unmount or when dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoUpdate, updateInterval, loadAnimals]);

  return {
    animals,
    loading,
    error,
    loadAnimals,
  };
};
