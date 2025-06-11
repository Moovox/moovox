import React from "react";
import { useNavigate } from "react-router-dom";

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
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a] p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
            <h1 className="mb-4 text-2xl font-bold text-amber-900">
              Algo deu errado
            </h1>
            <p className="mb-6 text-gray-700">
              Ocorreu um erro inesperado na aplicação.
            </p>
            <div className="mb-6 max-h-48 overflow-auto rounded-lg bg-red-50 p-4 text-sm">
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
    navigate("/dashboard");
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
        className="rounded-lg bg-amber-600 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-amber-700"
      >
        Voltar ao Dashboard
      </button>
      <button
        onClick={handleRetryClick}
        type="button"
        className="rounded-lg border border-amber-600 px-4 py-2 font-semibold text-amber-600 transition duration-200 hover:bg-amber-50"
      >
        Tentar novamente
      </button>
    </div>
  );
}

export default ErrorBoundary;
