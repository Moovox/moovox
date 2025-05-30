import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Lazy load do componente AnimalMap
const AnimalMap = lazy(() => import('./AnimalMap'));

function SafeAnimalMap(props) {
  const [hasError, setHasError] = useState(false);
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const navigate = useNavigate();

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
        console.error("Erro ao carregar o Leaflet:", error);
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

  if (hasError) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full" style={{ height: props.altura || '400px' }}>
          <div className="text-amber-900 font-semibold mb-3">Não foi possível carregar o mapa</div>
          <p className="text-sm text-gray-600 text-center mb-4">
            Ocorreu um problema ao renderizar o mapa. Isso pode ser devido a problemas com o Leaflet ou dados de localização.
          </p>
          <div className="flex flex-col space-y-3 w-full max-w-xs">
            <button 
              onClick={handleTryAgain}
              type="button"
              className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-md text-sm transition-colors w-full"
            >
              Tentar novamente
            </button>
            <button 
              onClick={handleDashboardClick}
              type="button"
              className="border border-amber-700 text-amber-700 hover:bg-amber-50 py-2 px-4 rounded-md text-sm transition-colors w-full"
            >
              Voltar ao Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!leafletLoaded) {
    return (
      <div className="flex items-center justify-center" style={{ height: props.altura || '400px' }}>
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-700"></div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center" style={{ height: props.altura || '400px' }}>
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-700"></div>
      </div>
    }>
      <ErrorCatcher setHasError={setHasError}>
        <AnimalMap {...props} />
      </ErrorCatcher>
    </Suspense>
  );
}

// Componente que captura erros apenas para o AnimalMap
class ErrorCatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Erro no componente AnimalMap:", error, errorInfo);
    this.props.setHasError(true);
  }

  render() {
    if (this.state.hasError) {
      // O erro será tratado pelo componente pai
      return null;
    }

    return this.props.children;
  }
}

export default SafeAnimalMap; 