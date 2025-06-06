import React from "react";

const StatsCard = ({
  title,
  value,
  icon,
  bgColor = "bg-blue-100",
  iconColor = "text-blue-600",
  valueColor = "text-gray-900",
}) => {
  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      // Se é um componente React (como ícones do lucide), clona com as classes
      return React.cloneElement(icon, {
        className: `h-6 w-6 ${iconColor}`,
      });
    }
    // Se é outro tipo de elemento, retorna como está
    return icon;
  };

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm text-gray-600">{title}</p>
          <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgColor}`}
        >
          {renderIcon()}
        </div>
      </div>
    </div>
  );
};

const StatsGrid = ({ children, columns = 3 }) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div className={`mb-6 grid grid-cols-1 gap-4 ${gridCols[columns]}`}>
      {children}
    </div>
  );
};

export { StatsCard, StatsGrid };
