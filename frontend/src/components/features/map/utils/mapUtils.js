/**
 * Generate random location around a base point
 * @param {number} base - Base coordinate
 * @param {number} variation - Maximum variation from base (default 0.1)
 * @returns {number} New coordinate
 */
export const generateRandomLocation = (base, variation = 0.1) => {
  return base + (Math.random() - 0.5) * variation;
};

/**
 * Keep coordinate within sensible limits
 * @param {number} coordinate - The coordinate to validate
 * @param {string} type - Type of coordinate ('lat' or 'lng')
 * @returns {number} Valid coordinate
 */
export const keepCoordinateWithinLimits = (coordinate, type) => {
  if (type === "lat") {
    // Latitude: -90 to 90
    return Math.max(-90, Math.min(90, coordinate));
  } else {
    // Longitude: -180 to 180
    return Math.max(-180, Math.min(180, coordinate));
  }
};

/**
 * Calculate distance between two coordinates using Haversine formula
 * @param {number} lat1 - First latitude
 * @param {number} lon1 - First longitude
 * @param {number} lat2 - Second latitude
 * @param {number} lon2 - Second longitude
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

/**
 * Linear interpolation between two values
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} t - Progress (0-1)
 * @returns {number} Interpolated value
 */
export const lerp = (start, end, t) => {
  return start + (end - start) * t;
};

/**
 * Get responsive height based on viewport size
 * @param {string} height - Default height
 * @param {string} heightSm - Small screen height
 * @param {string} heightMd - Medium screen height
 * @param {string} heightLg - Large screen height
 * @returns {string} Appropriate height for current viewport
 */
export const getResponsiveHeight = (height, heightSm, heightMd, heightLg) => {
  let currentHeight = height;

  if (heightSm && window.innerWidth >= 640) {
    currentHeight = heightSm;
  }

  if (heightMd && window.innerWidth >= 768) {
    currentHeight = heightMd;
  }

  if (heightLg && window.innerWidth >= 1024) {
    currentHeight = heightLg;
  }

  return currentHeight;
};
