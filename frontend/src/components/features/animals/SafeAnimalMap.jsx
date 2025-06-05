import React, { Suspense, lazy, useEffect, useState } from "react";

// Lazy load the new modular AnimalMap
const AnimalMap = lazy(() => import("../map/AnimalMap"));

/**
 * Safe wrapper for Animal Map with lazy loading and error boundaries
 * This component provides backward compatibility while using the new modular structure
 */
const SafeAnimalMap = (props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render on server side
  if (!isClient) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100">
        <div className="text-center">
          <div className="text-gray-500">Carregando mapa...</div>
        </div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100">
          <div className="text-center">
            <div className="mb-2 h-6 w-6 animate-spin rounded-full border-2 border-amber-700 border-t-transparent"></div>
            <div className="text-gray-500">Carregando mapa...</div>
          </div>
        </div>
      }
    >
      <AnimalMap {...props} />
    </Suspense>
  );
};

export default SafeAnimalMap;
