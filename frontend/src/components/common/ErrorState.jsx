import { AlertCircle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function ErrorState({
  title = "Erro ao carregar",
  message,
  onRetry,
  retryText = "Tentar Novamente",
  className = "",
}) {
  return (
    <div className={`flex h-64 items-center justify-center ${className}`}>
      <div className="flex flex-col items-center text-center">
        <AlertCircle className="mb-4 h-12 w-12 text-red-600" />
        <p className="mb-2 text-lg font-semibold text-red-600">{title}</p>
        <p className="max-w-md text-gray-700">{message}</p>
        {onRetry && (
          <Button
            className="mt-4 bg-amber-600 hover:bg-amber-700"
            onClick={onRetry}
          >
            {retryText}
          </Button>
        )}
      </div>
    </div>
  );
}

export default ErrorState;
