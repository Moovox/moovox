import React from 'react';
import { useNavigate } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Erro capturado pelo ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
            <h1 className="text-2xl font-bold text-amber-900 mb-4">Algo deu errado</h1>
            <p className="text-gray-700 mb-6">
              Ocorreu um erro inesperado na aplicação.
            </p>
            <div className="bg-red-50 p-4 rounded-lg mb-6 overflow-auto max-h-48 text-sm">
              <p className="font-mono text-red-700">
                {this.state.error && this.state.error.toString()}
              </p>
            </div>
            <ErrorBoundaryButton />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Botão separado para usar hooks em um componente de classe
function ErrorBoundaryButton() {
  const navigate = useNavigate();
  
  const handleDashboardClick = () => {
    console.log("Redirecionando para o dashboard...");
    navigate('/dashboard');
  };
  
  const handleRetryClick = () => {
    console.log("Recarregando a página...");
    window.location.reload();
  };
  
  return (
    <div className="flex flex-col space-y-3">
      <button
        onClick={handleDashboardClick}
        type="button"
        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Voltar ao Dashboard
      </button>
      <button
        onClick={handleRetryClick}
        type="button"
        className="border border-amber-600 text-amber-600 hover:bg-amber-50 font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Tentar novamente
      </button>
    </div>
  );
}

export default ErrorBoundary; 