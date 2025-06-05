/**
 * Virtual fences configuration for rural pasture areas
 * Using coordinates from rural areas in Goiás, Brazil
 * Colors match the animal species legend
 */

// Base coordinates for rural farm area in Goiás
export const FARM_BASE_COORDINATES = {
  latitude: -16.288, // Região rural de Goiás
  longitude: -49.264,
};

/**
 * Virtual fences data for rural pasture areas
 * Positioned to avoid overlap and organized by function
 * Colors match the species legend: cattle=green, swine=red, poultry=yellow, goats=blue, sheep=purple
 */
export const virtualFencesData = [
  {
    id: 1,
    name: "Pasto Principal",
    type: "Main Farm",
    center: [FARM_BASE_COORDINATES.latitude, FARM_BASE_COORDINATES.longitude],
    radius: 800, // 800m - área principal
    color: "#16a34a", // Verde (cattle) - Tailwind green-600
    fillColor: "#16a34a",
    description: "Área principal de pastagem para gado bovino",
    species: "cattle",
    priority: "high", // High priority for permanent tooltip
  },
  {
    id: 2,
    name: "Pasto Norte",
    type: "Pasture Area",
    center: [
      FARM_BASE_COORDINATES.latitude + 0.02, // Mais distante ao norte
      FARM_BASE_COORDINATES.longitude + 0.015,
    ],
    radius: 600, // 600m
    color: "#2563eb", // Azul (goats) - Tailwind blue-600
    fillColor: "#2563eb",
    description: "Área de pastagem rotativa para caprinos",
    species: "goats",
    priority: "medium", // Medium priority - show on hover
  },
  {
    id: 3,
    name: "Pasto Sul",
    type: "Pasture Area",
    center: [
      FARM_BASE_COORDINATES.latitude - 0.022, // Mais distante ao sul
      FARM_BASE_COORDINATES.longitude + 0.018,
    ],
    radius: 550, // 550m
    color: "#9333ea", // Roxo (sheep) - Tailwind purple-600
    fillColor: "#9333ea",
    description: "Área de pastagem para ovinos",
    species: "sheep",
    priority: "medium", // Medium priority - show on hover
  },
  {
    id: 4,
    name: "Área de Suínos",
    type: "Livestock Zone",
    center: [
      FARM_BASE_COORDINATES.latitude - 0.015,
      FARM_BASE_COORDINATES.longitude - 0.025, // Mais distante ao oeste
    ],
    radius: 500, // 500m
    color: "#dc2626", // Vermelho (swine) - Tailwind red-600
    fillColor: "#dc2626",
    description: "Área específica para criação de suínos",
    species: "swine",
    priority: "medium", // Medium priority - show on hover
  },
  {
    id: 5,
    name: "Aviário",
    type: "Livestock Zone",
    center: [
      FARM_BASE_COORDINATES.latitude + 0.012,
      FARM_BASE_COORDINATES.longitude - 0.02, // Noroeste
    ],
    radius: 300, // 300m
    color: "#ca8a04", // Amarelo (poultry) - Tailwind yellow-600
    fillColor: "#ca8a04",
    description: "Área do aviário para aves domésticas",
    species: "poultry",
    priority: "low", // Low priority - hover only
  },
  {
    id: 6,
    name: "Centro de Manejo",
    type: "Management Area",
    center: [
      FARM_BASE_COORDINATES.latitude - 0.008,
      FARM_BASE_COORDINATES.longitude + 0.005, // Sudeste próximo
    ],
    radius: 250, // 250m
    color: "#6b7280", // Cinza para área neutra - Tailwind gray-500
    fillColor: "#6b7280",
    description: "Centro de manejo e administração da fazenda",
    species: "management",
    priority: "low", // Low priority - hover only
  },
  {
    id: 7,
    name: "Área de Quarentena",
    type: "Restricted Zone",
    center: [
      FARM_BASE_COORDINATES.latitude - 0.03, // Bem isolada ao sul
      FARM_BASE_COORDINATES.longitude - 0.01,
    ],
    radius: 350, // 350m
    color: "#ef4444", // Vermelho claro para quarentena
    fillColor: "#ef4444",
    description: "Área isolada para animais em tratamento ou quarentena",
    species: "quarantine",
    priority: "high", // High priority for safety
  },
  {
    id: 8,
    name: "Depósito de Ração",
    type: "Storage Area",
    center: [
      FARM_BASE_COORDINATES.latitude + 0.008,
      FARM_BASE_COORDINATES.longitude + 0.03, // Leste
    ],
    radius: 200, // 200m
    color: "#f97316", // Laranja - Tailwind orange-500
    fillColor: "#f97316",
    description: "Área de armazenamento de ração e suprimentos",
    species: "storage",
    priority: "low", // Low priority - hover only
  },
  {
    id: 9,
    name: "Área Veterinária",
    type: "Medical Area",
    center: [
      FARM_BASE_COORDINATES.latitude - 0.005,
      FARM_BASE_COORDINATES.longitude - 0.008, // Próximo ao centro
    ],
    radius: 180, // 180m
    color: "#10b981", // Verde esmeralda - Tailwind emerald-500
    fillColor: "#10b981",
    description: "Área para atendimento veterinário e tratamentos",
    species: "medical",
    priority: "medium", // Medium priority for health
  },
];

/**
 * Fence types for legend organization
 */
export const fenceTypes = [
  {
    key: "Main Farm",
    label: "Fazenda Principal",
    color: "bg-green-600",
    description: "Área principal da propriedade",
  },
  {
    key: "Pasture Area",
    label: "Área de Pastagem",
    color: "bg-blue-600",
    description: "Áreas de pastagem rotativa",
  },
  {
    key: "Livestock Zone",
    label: "Zona de Criação",
    color: "bg-yellow-600",
    description: "Áreas específicas por espécie",
  },
  {
    key: "Restricted Zone",
    label: "Zona Restrita",
    color: "bg-red-600",
    description: "Áreas de acesso controlado",
  },
  {
    key: "Management Area",
    label: "Área de Manejo",
    color: "bg-gray-500",
    description: "Administração e controle",
  },
  {
    key: "Storage Area",
    label: "Área de Armazenamento",
    color: "bg-orange-500",
    description: "Depósitos e suprimentos",
  },
  {
    key: "Medical Area",
    label: "Área Médica",
    color: "bg-emerald-500",
    description: "Atendimento veterinário",
  },
];

/**
 * Get random coordinates within a specific virtual fence
 * @param {Object} fence - Virtual fence object
 * @param {number} marginFactor - Factor to reduce the radius (0.8 = 80% of radius)
 * @returns {Object} Random coordinates within the fence
 */
export const getRandomCoordinatesInFence = (fence, marginFactor = 0.8) => {
  // Convert radius from meters to degrees (approximately)
  const radiusInDegrees = (fence.radius * marginFactor) / 111320; // 1 degree ≈ 111,320 meters

  // Generate random angle
  const angle = Math.random() * 2 * Math.PI;

  // Generate random distance from center (0 to radius)
  const distance = Math.random() * radiusInDegrees;

  // Calculate coordinates
  const latitude = fence.center[0] + distance * Math.cos(angle);
  const longitude = fence.center[1] + distance * Math.sin(angle);

  return { latitude, longitude };
};

/**
 * Get appropriate fence for animal species
 * @param {string} species - Animal species
 * @returns {Object} Virtual fence object
 */
export const getFenceForSpecies = (species) => {
  const speciesFenceMap = {
    cattle: virtualFencesData[0], // Pasto Principal (verde)
    goats: virtualFencesData[1], // Pasto Norte (azul)
    sheep: virtualFencesData[2], // Pasto Sul (roxo)
    swine: virtualFencesData[3], // Área dos Suínos (vermelho)
    poultry: virtualFencesData[4], // Aviário (amarelo)
  };

  return speciesFenceMap[species] || virtualFencesData[0]; // Default to main farm
};

/**
 * Get fence for animals with specific status
 * @param {string} status - Animal status
 * @returns {Object} Virtual fence object
 */
export const getFenceForStatus = (status) => {
  if (
    status?.toLowerCase().includes("tratamento") ||
    status?.toLowerCase().includes("quarentena") ||
    status?.toLowerCase().includes("doente")
  ) {
    return virtualFencesData[6]; // Área de Quarentena
  }
  return null; // Use species-based fence
};

/**
 * Get fence for animal considering both species and status
 * @param {string} species - Animal species
 * @param {string} status - Animal status
 * @returns {Object} Virtual fence object
 */
export const getFenceForAnimal = (species, status) => {
  // Priority to status-based fence (quarantine)
  const statusFence = getFenceForStatus(status);
  if (statusFence) {
    return statusFence;
  }

  // Otherwise use species-based fence
  return getFenceForSpecies(species);
};
