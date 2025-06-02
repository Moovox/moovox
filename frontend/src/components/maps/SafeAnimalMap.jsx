import React, { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Lazy load do componente AnimalMap
const AnimalMap = lazy(() => import("./AnimalMap"));

function SafeAnimalMap({
  altura = "400px",
  alturaSm = "",
  alturaMd = "",
  alturaLg = "",
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const navigate = useNavigate();

  // Determina a altura baseada no viewport atual
  const getResponsiveHeight = () => {
    // Por padrão, usa a altura base
    let currentHeight = altura;

    // Substitui com altura específica para tela pequena se fornecida
    if (alturaSm && window.innerWidth >= 640) {
      currentHeight = alturaSm;
    }

    // Substitui com altura específica para tela média se fornecida
    if (alturaMd && window.innerWidth >= 768) {
      currentHeight = alturaMd;
    }

    // Substitui com altura específica para tela grande se fornecida
    if (alturaLg && window.innerWidth >= 1024) {
      currentHeight = alturaLg;
    }

    return currentHeight;
  };

  useEffect(() => {
    // Carregar Leaflet dinamicamente
    const loadLeaflet = async () => {
      try {
        if (typeof window !== "undefined") {
          // Verifica se o Leaflet já está carregado
          if (!window.L) {
            await import("leaflet/dist/leaflet.css");
            const L = await import("leaflet");
            window.L = L;
          }
          setLeafletLoaded(true);
        }
      } catch (error) {
        console.error("Error loading Leaflet:", error);
        setHasError(true);
      }
    };

    loadLeaflet();
  }, []);

  const handleTryAgain = () => {
    setHasError(false);
    window.location.reload();
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const responsiveHeight = getResponsiveHeight();

  if (hasError) {
    return (
      <div className="overflow-hidden rounded-xl bg-white p-2 shadow-sm sm:p-4">
        <div
          className="flex w-full flex-col items-center justify-center"
          style={{ height: responsiveHeight }}
        >
          <div className="mb-2 text-sm font-semibold text-amber-900 sm:mb-3 sm:text-base">
            Failed to load map
          </div>
          <p className="mb-3 px-2 text-center text-xs text-gray-600 sm:mb-4 sm:text-sm">
            There was a problem rendering the map. This could be due to issues
            with Leaflet or location data.
          </p>
          <div className="flex w-full max-w-xs flex-col space-y-2 px-4 sm:space-y-3">
            <button
              onClick={handleTryAgain}
              type="button"
              className="w-full rounded-md bg-amber-700 px-3 py-1.5 text-xs text-white transition-colors hover:bg-amber-800 sm:px-4 sm:py-2 sm:text-sm"
            >
              Try again
            </button>
            <button
              onClick={handleDashboardClick}
              type="button"
              className="w-full rounded-md border border-amber-700 px-3 py-1.5 text-xs text-amber-700 transition-colors hover:bg-amber-50 sm:px-4 sm:py-2 sm:text-sm"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!leafletLoaded) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: responsiveHeight }}
      >
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-amber-700 sm:h-10 sm:w-10"></div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div
          className="flex items-center justify-center"
          style={{ height: responsiveHeight }}
        >
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-amber-700 sm:h-10 sm:w-10"></div>
        </div>
      }
    >
      <ErrorCatcher setHasError={setHasError}>
        <AnimalMap
          altura={altura}
          alturaSm={alturaSm}
          alturaMd={alturaMd}
          alturaLg={alturaLg}
          {...props}
        />
      </ErrorCatcher>
    </Suspense>
  );
}

// Component that catches errors only for AnimalMap
class ErrorCatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in AnimalMap component:", error, errorInfo);
    this.props.setHasError(true);
  }

  render() {
    if (this.state.hasError) {
      // The error will be handled by the parent component
      return null;
    }

    return this.props.children;
  }
}

export default SafeAnimalMap;
