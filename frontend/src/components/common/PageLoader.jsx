import { cowHead } from "@lucide/lab";
import { Icon } from "lucide-react";
import PropTypes from "prop-types";
import React from "react";
import "../../styles/PageLoader.css";

/**
 * Loader temático com radar e vaca
 * @param {{ icon?: React.ReactNode, color?: string, className?: string }} props
 */
const COLOR_MAP = {
  "green-700": "text-green-700",
  "green-600": "text-green-600",
  "green-500": "text-green-500",
  "green-400": "text-green-400",
  "green-300": "text-green-300",
  "green-200": "text-green-200",
  "green-100": "text-green-100",
  // Adicione mais cores conforme necessário
};

function PageLoader({ text, icon, color = "amber-800", className = "" }) {
  const iconColorClass = color || "text-amber-800";

  return (
    <div
      className={`flex h-full min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a] ${className}`}
    >
      <div className="flex flex-col items-center">
        <div className="mb-6 animate-bounce">
          {icon || (
            <Icon
              iconNode={cowHead}
              className={`h-12 w-12 ${iconColorClass}`}
            />
          )}
        </div>
        <div className="text-lg font-semibold text-amber-900">
          {text || "Carregando..."}
        </div>
        <div className="mt-4 flex space-x-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-amber-700"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-amber-700 delay-75"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-amber-700 delay-150"></div>
        </div>
      </div>
    </div>
  );
}

PageLoader.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
};

PageLoader.defaultProps = {
  text: "Carregando...",
  icon: null,
  color: "text-amber-800",
  className: "",
};

export default PageLoader;
