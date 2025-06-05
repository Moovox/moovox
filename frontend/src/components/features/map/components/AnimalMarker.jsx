import { useEffect, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { calculateDistance, lerp } from "../utils/mapUtils";

/**
 * Animated marker component for animals
 */
export const AnimalMarker = ({ animal, handleClick, icon }) => {
  const [position, setPosition] = useState([animal.latitude, animal.longitude]);
  const targetPositionRef = useRef([animal.latitude, animal.longitude]);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);
  const animationDurationRef = useRef(10000); // 10 seconds animation
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
      <Popup
        className="custom-animal-popup"
        offset={[0, -15]} // Move popup up to avoid covering the marker
        closeButton={true}
        autoClose={false}
        closeOnClick={false}
        maxWidth={280}
        minWidth={200}
      >
        <div className="p-2">
          <div className="mb-2 flex items-center gap-2">
            <div className="text-lg">🐾</div>
            <h3 className="text-lg font-bold text-gray-800">
              {typeof animal.identification === "string"
                ? animal.identification
                : String(animal.identification || "")}
            </h3>
          </div>

          {animal.name && (
            <div className="mb-2">
              <span className="font-semibold text-gray-700">Nome:</span>{" "}
              <span className="text-gray-600">{animal.name}</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Espécie:</span>
              <div className="text-gray-600">
                {typeof animal.species === "string"
                  ? animal.species === "cattle"
                    ? "Bovino"
                    : animal.species === "swine"
                      ? "Suíno"
                      : animal.species === "poultry"
                        ? "Ave"
                        : animal.species === "goats"
                          ? "Caprino"
                          : animal.species === "sheep"
                            ? "Ovino"
                            : animal.species
                  : String(animal.species || "Desconhecida")}
              </div>
            </div>

            <div>
              <span className="font-semibold text-gray-700">Peso:</span>
              <div className="text-gray-600">{animal.weight || 0} kg</div>
            </div>

            <div>
              <span className="font-semibold text-gray-700">Status:</span>
              <div
                className={`font-medium ${
                  animal.status?.includes("Tratamento")
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {animal.status || "Desconhecido"}
              </div>
            </div>

            <div>
              <span className="font-semibold text-gray-700">Atualização:</span>
              <div className="text-xs text-gray-500">
                {animal.lastUpdate || "Não disponível"}
              </div>
            </div>
          </div>

          <div className="mt-2 border-t border-gray-200 pt-2 text-xs text-gray-500">
            Coordenadas: {position[0].toFixed(6)}, {position[1].toFixed(6)}
          </div>
        </div>
      </Popup>
    </Marker>
  );
};
