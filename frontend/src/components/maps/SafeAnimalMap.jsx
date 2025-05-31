import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Lazy load do componente AnimalMap
const AnimalMap = lazy(() => import('./AnimalMap'));

function SafeAnimalMap({
  altura = '400px',
  alturaSm = '',
  alturaMd = '',
  alturaLg = '',
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
        if (typeof window !== 'undefined') {
          // Verifica se o Leaflet já está carregado
          if (!window.L) {
            await import('leaflet/dist/leaflet.css');
            const L = await import('leaflet');
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
    navigate('/dashboard');
  };

  const responsiveHeight = getResponsiveHeight();

  if (hasError) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-2 sm:p-4 overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full" style={{ height: responsiveHeight }}>
          <div className="text-amber-900 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Failed to load map</div>
          <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 sm:mb-4 px-2">
            There was a problem rendering the map. This could be due to issues with Leaflet or location data.
          </p>
          <div className="flex flex-col space-y-2 sm:space-y-3 w-full max-w-xs px-4">
            <button 
              onClick={handleTryAgain}
              type="button"
              className="bg-amber-700 hover:bg-amber-800 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm transition-colors w-full"
            >
              Try again
            </button>
            <button 
              onClick={handleDashboardClick}
              type="button"
              className="border border-amber-700 text-amber-700 hover:bg-amber-50 py-1.5 sm:py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm transition-colors w-full"
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
      <div className="flex items-center justify-center" style={{ height: responsiveHeight }}>
        <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-amber-700"></div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center" style={{ height: responsiveHeight }}>
        <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-amber-700"></div>
      </div>
    }>
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