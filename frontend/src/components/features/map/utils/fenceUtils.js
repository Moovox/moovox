/**
 * Utility functions for virtual fence operations
 */

/**
 * Calculate distance between two points using Haversine formula
 * @param {number} lat1 - Latitude of first point
 * @param {number} lon1 - Longitude of first point
 * @param {number} lat2 - Latitude of second point
 * @param {number} lon2 - Longitude of second point
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Check if an animal is within a virtual fence
 * @param {Object} animal - Animal with latitude and longitude
 * @param {Object} fence - Fence with center coordinates and radius
 * @returns {boolean} True if animal is within fence
 */
export const isAnimalInFence = (animal, fence) => {
  if (!animal || !fence || !animal.latitude || !animal.longitude) {
    return false;
  }

  const distance = calculateDistance(
    animal.latitude,
    animal.longitude,
    fence.center[0], // fence center latitude
    fence.center[1], // fence center longitude
  );

  return distance * 1000 <= fence.radius;
};

/**
 * Get all animals within a specific fence
 * @param {Array} animals - Array of animals
 * @param {Object} fence - Virtual fence object
 * @returns {Array} Animals within the fence
 */
export const getAnimalsInFence = (animals, fence) => {
  if (!animals || !fence) return [];

  return animals.filter((animal) => {
    const distance = calculateDistance(
      animal.latitude,
      animal.longitude,
      fence.center[0],
      fence.center[1],
    );

    // Convert distance to meters and check if within fence radius
    return distance * 1000 <= fence.radius;
  });
};

/**
 * Get animals grouped by fence
 * @param {Array} animals - Array of animals
 * @param {Array} fences - Array of virtual fences
 * @returns {Object} Object with fence IDs as keys and arrays of animals as values
 */
export const getAnimalsByFence = (animals, fences) => {
  if (!animals || !fences) {
    return {};
  }

  const result = {};

  fences.forEach((fence) => {
    result[fence.id] = getAnimalsInFence(animals, fence);
  });

  return result;
};

/**
 * Get fence statistics
 * @param {Array} animals - Array of animals
 * @param {Object} fence - Virtual fence object
 * @returns {Object} Statistics about the fence
 */
export const getFenceStats = (animals, fence) => {
  const animalsInFence = getAnimalsInFence(animals, fence);

  const speciesCount = animalsInFence.reduce((acc, animal) => {
    acc[animal.species] = (acc[animal.species] || 0) + 1;
    return acc;
  }, {});

  const statusCount = animalsInFence.reduce((acc, animal) => {
    acc[animal.status] = (acc[animal.status] || 0) + 1;
    return acc;
  }, {});

  return {
    totalAnimals: animalsInFence.length,
    speciesCount,
    statusCount,
    animals: animalsInFence,
  };
};
