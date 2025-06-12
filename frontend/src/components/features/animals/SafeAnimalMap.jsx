import { Suspense, lazy } from "react";

// Lazy load the new optimized CleanMapPage
const CleanMapPage = lazy(() => import("../../../pages/features/CleanMapPage"));

/**
 * SafeAnimalMap - Wrapper with error boundaries for the new clean map
 * @param {*} props - Props to pass to the map component
 */
const SafeAnimalMap = (props) => {
  return (
    <div className="h-screen w-screen">
      {/* Loading fallback */}
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
              <p className="text-gray-600">Carregando mapa otimizado...</p>
            </div>
          </div>
        }
      >
        {/* Error boundary wrapper */}
        <div className="h-full w-full">
          <CleanMapPage {...props} />
        </div>
      </Suspense>
    </div>
  );
};

export default SafeAnimalMap;
