import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useRef, useState } from "react";
import {
  Circle,
  LayerGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import { animalService } from "../../services/animalService";

// Fix Leaflet icon issue
try {
  if (L && L.Icon && L.Icon.Default) {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }
} catch (e) {
  console.error("Error configuring Leaflet icons:", e);
}

// Custom colors for different animal types
const animalIcons = {
  cattle: new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  swine: new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  poultry: new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  goat: new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  sheep: new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  default: new L.Icon.Default(),
};

// Component to automatically adjust map zoom
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

// Custom style for virtual fence tooltips
const customTooltipStyle = {
  background: "white",
  border: "1px solid #666",
  padding: "2px 6px",
  borderRadius: "3px",
  boxShadow: "0 1px 5px rgba(0,0,0,0.4)",
  fontSize: "12px",
  fontWeight: "bold",
  opacity: "0.9",
};

// Component to animate animal movement
function AnimalMarker({ animal, handleClick, icon }) {
  const [position, setPosition] = useState([animal.latitude, animal.longitude]);
  const targetPositionRef = useRef([animal.latitude, animal.longitude]);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);
  const animationDurationRef = useRef(10000); // Animation duration increased to 10 seconds
  const previousPositionRef = useRef([animal.latitude, animal.longitude]);

  // Update target position when animal changes
  useEffect(() => {
    // If distance is too large (teleport), don't animate and update directly
    const distance = calculateDistance(
      previousPositionRef.current[0],
      previousPositionRef.current[1],
      animal.latitude,
      animal.longitude,
    );

    if (distance > 0.1) {
      // If distance is greater than ~10km, it's a teleport
      setPosition([animal.latitude, animal.longitude]);
      targetPositionRef.current = [animal.latitude, animal.longitude];
      previousPositionRef.current = [animal.latitude, animal.longitude];
      return;
    }

    targetPositionRef.current = [animal.latitude, animal.longitude];
    previousPositionRef.current = [animal.latitude, animal.longitude];

    if (!startTimeRef.current) {
      // If no animation is in progress, start immediately
      startTimeRef.current = performance.now();
      animateMovement();
    }
  }, [animal.latitude, animal.longitude]);

  // Function to calculate distance between coordinates (simplified Haversine formula)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
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

  // Function for linear interpolation between positions
  const lerp = (start, end, t) => {
    return start + (end - start) * t;
  };

  // Movement animation function using requestAnimationFrame
  const animateMovement = () => {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTimeRef.current;
    const progress = Math.min(elapsedTime / animationDurationRef.current, 1);

    if (progress < 1) {
      // Interpolate between current position and target position
      const newLat = lerp(position[0], targetPositionRef.current[0], progress);
      const newLng = lerp(position[1], targetPositionRef.current[1], progress);
      setPosition([newLat, newLng]);

      // Continue animation
      frameRef.current = requestAnimationFrame(animateMovement);
    } else {
      // Animation complete, update to final position
      setPosition(targetPositionRef.current);
      startTimeRef.current = null;
    }
  };

  // Clean up animation when unmounting
  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <Marker
      position={position}
      icon={icon}
      eventHandlers={{
        click: () => handleClick(animal),
      }}
      zIndexOffset={1000}
    >
      {" "}
      <Popup className="custom-popup">
        <div className="p-1">
          <h3 className="font-bold">
            {typeof animal.identification === "string"
              ? animal.identification
              : String(animal.identification || "")}
          </h3>
          {animal.name && (
            <p>
              <span className="font-semibold">Name:</span> {animal.name}
            </p>
          )}
          <p>
            <span className="font-semibold">Species:</span>{" "}
            {typeof animal.species === "string"
              ? animal.species
              : String(animal.species || "Unknown")}
          </p>
          <p>
            <span className="font-semibold">Weight:</span> {animal.weight || 0}{" "}
            kg
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            {animal.status || "Unknown"}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Last update: {animal.lastUpdate || "Not available"}
          </p>
        </div>
      </Popup>
    </Marker>
  );
}

function AnimalMap({
  speciesFilter = "",
  statusFilter = "",
  search = "",
  showFilters = true,
  height = "400px",
  heightSm = "",
  heightMd = "",
  heightLg = "",
  mapCenter = [-15.7801, -47.9292], // Center of Brazil
  mapZoom = 5,
  autoUpdate = true,
  updateInterval = 120000,
  title = "Animal Location",
  showVirtualFences = true,
  showInternalLegend = false,
}) {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [center, setCenter] = useState(mapCenter);
  const [zoom, setZoom] = useState(mapZoom);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const intervalRef = useRef(null);

  // Generate random location around a base point
  const generateRandomLocation = (base, variation = 0.1) => {
    return base + (Math.random() - 0.5) * variation;
  };

  // Keep coordinate within sensible limits
  const keepCoordinateWithinLimits = (coordinate, type) => {
    if (type === "lat") {
      // Latitude: -90 to 90
      return Math.max(-90, Math.min(90, coordinate));
    } else {
      // Longitude: -180 to 180
      return Math.max(-180, Math.min(180, coordinate));
    }
  };

  useEffect(() => {
    const loadAnimals = async () => {
      try {
        setLoading(true);
        setError(null);

        let response;
        try {
          // Use timeout to prevent hanging if API doesn't respond
          const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timeout")), 10000),
          );

          // Race the API call against the timeout
          response = await Promise.race([
            animalService.listAnimals(),
            timeoutPromise,
          ]);
        } catch (error) {
          console.error("Error fetching animals, using mock data:", error); // Generate mock data if API fails
          const mockAnimals = [
            {
              id: 1,
              identification: "BOV001",
              name: "Cattle 1",
              species: "cattle",
              weight: 450,
              status: "Active",
              latitude: generateRandomLocation(-15.7801, 0.3),
              longitude: generateRandomLocation(-47.9292, 0.3),
              lastUpdate: "2023-07-15 10:30",
            },
            {
              id: 2,
              identification: "PIG002",
              name: "Pig 1",
              species: "swine",
              weight: 120,
              status: "Active",
              latitude: generateRandomLocation(-15.7801, 0.3),
              longitude: generateRandomLocation(-47.9292, 0.3),
              lastUpdate: "2023-07-15 11:45",
            },
            {
              id: 3,
              identification: "CHICK003",
              name: "Chicken 1",
              species: "poultry",
              weight: 2.5,
              status: "Active",
              latitude: generateRandomLocation(-15.7801, 0.3),
              longitude: generateRandomLocation(-47.9292, 0.3),
              lastUpdate: "2023-07-15 09:15",
            },
            {
              id: 4,
              identification: "GOAT004",
              name: "Goat 1",
              species: "goat",
              weight: 35,
              status: "In treatment",
              latitude: generateRandomLocation(-15.7801, 0.3),
              longitude: generateRandomLocation(-47.9292, 0.3),
              lastUpdate: "2023-07-15 14:20",
            },
            {
              id: 5,
              identification: "SHEEP005",
              name: "Sheep 1",
              species: "sheep",
              weight: 40,
              status: "Active",
              latitude: generateRandomLocation(-15.7801, 0.3),
              longitude: generateRandomLocation(-47.9292, 0.3),
              lastUpdate: "2023-07-15 12:10",
            },
          ];

          response = { data: mockAnimals };
        }

        // Apply filters
        let filteredAnimals = response.data || [];
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

        setAnimals(filteredAnimals);
      } catch (error) {
        console.error("Error loading animals:", error);
        setError(error.message || "An error occurred while loading animals");
      } finally {
        setLoading(false);
      }
    };

    loadAnimals(); // Set up auto-update interval if enabled
    if (autoUpdate && updateInterval > 0) {
      intervalRef.current = setInterval(loadAnimals, updateInterval);
    }

    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [speciesFilter, statusFilter, search, autoUpdate, updateInterval]);

  // Get appropriate icon for animal species
  const getAnimalIcon = (species) => {
    return animalIcons[species] || animalIcons.default;
  };

  // Handle animal marker click
  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
    setCenter([animal.latitude, animal.longitude]);
    setZoom(14); // Zoom in when animal is selected
  };
  // Get height based on current viewport size
  const getResponsiveHeight = () => {
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

  // Mock virtual fences for demonstration
  const virtualFences = [
    {
      id: 1,
      name: "Main Farm",
      center: [-15.7801, -47.9292],
      radius: 2000,
      color: "#3388ff",
      fillColor: "#3388ff",
    },
    {
      id: 2,
      name: "Pasture Area",
      center: [-15.7701, -47.9192],
      radius: 1500,
      color: "#33cc33",
      fillColor: "#33cc33",
    },
    {
      id: 3,
      name: "Restricted Zone",
      center: [-15.7901, -47.9392],
      radius: 1000,
      color: "#ff3333",
      fillColor: "#ff3333",
    },
  ];
  return (
    <div className="overflow-hidden rounded-xl bg-white p-2 shadow-sm sm:p-4">
      {title && (
        <div className="mb-3 sm:mb-4">
          <h2 className="text-lg font-semibold text-amber-900 sm:text-xl">
            {title}
          </h2>
        </div>
      )}
      {showInternalLegend && (
        <div className="mb-3 grid grid-cols-2 gap-2 md:grid-cols-5">
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-green-600"></div>
            <span className="text-xs">Cattle</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-red-600"></div>
            <span className="text-xs">Swine</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-yellow-600"></div>
            <span className="text-xs">Poultry</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-blue-600"></div>
            <span className="text-xs">Goats</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-purple-600"></div>
            <span className="text-xs">Sheep</span>
          </div>
        </div>
      )}
      <div style={{ height: getResponsiveHeight() }}>
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: "100%", width: "100%" }}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />{" "}
          <ChangeView center={center} zoom={zoom} />
          {showVirtualFences && (
            <LayerGroup>
              {virtualFences.map((fence) => (
                <Circle
                  key={fence.id}
                  center={fence.center}
                  radius={fence.radius}
                  pathOptions={{
                    color: fence.color,
                    fillColor: fence.fillColor,
                    fillOpacity: 0.1,
                    weight: 2,
                  }}
                >
                  <Tooltip
                    permanent
                    direction="center"
                    className="custom-tooltip"
                  >
                    <div style={customTooltipStyle}>{fence.name}</div>
                  </Tooltip>
                </Circle>
              ))}
            </LayerGroup>
          )}
          {animals.map((animal) => (
            <AnimalMarker
              key={animal.id}
              animal={animal}
              handleClick={handleAnimalClick}
              icon={getAnimalIcon(animal.species)}
            />
          ))}
        </MapContainer>
      </div>
      {loading && (
        <div className="mt-2 flex justify-center">
          <div className="flex items-center text-sm text-amber-700">
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-amber-700 border-t-transparent"></div>
            Loading animals...
          </div>
        </div>
      )}{" "}
      {error && (
        <div className="mt-2 rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-700">
          {error}
        </div>
      )}
    </div>
  );
}

export default AnimalMap;
