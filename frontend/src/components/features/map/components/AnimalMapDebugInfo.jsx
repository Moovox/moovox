/**
 * Componente para informações de debug do mapa (apenas em desenvolvimento)
 */
export const AnimalMapDebugInfo = ({ animalsCount, center }) => {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="mt-2 text-xs text-gray-400">
      Debug: {animalsCount} animais | Centro: [{center[0].toFixed(4)},{" "}
      {center[1].toFixed(4)}]
    </div>
  );
};
