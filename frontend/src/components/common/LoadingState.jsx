import { Loader2 } from "lucide-react";
import React from "react";

function LoadingState({
  message = "Carregando...",
  className = "",
  size = "large",
}) {
  const sizeClasses = {
    small: "h-6 w-6",
    medium: "h-8 w-8",
    large: "h-12 w-12",
  };

  return (
    <div className={`flex h-64 items-center justify-center ${className}`}>
      <div className="flex flex-col items-center">
        <Loader2
          className={`mb-4 animate-spin text-amber-700 ${sizeClasses[size]}`}
        />
        <p className="text-lg text-amber-800">{message}</p>
      </div>
    </div>
  );
}

export default LoadingState;
