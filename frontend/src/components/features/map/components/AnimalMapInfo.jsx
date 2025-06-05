/**
 * Componente para informações do mapa de animais
 */
export const AnimalMapInfo = ({ loading, animalsCount, showVirtualFences }) => {
  return (
    <div className="mb-3 text-sm text-gray-600">
      {loading ? (
        <div className="flex items-center">
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-amber-600 border-t-transparent"></div>
          Carregando animais...
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">
              {animalsCount} animais encontrados
            </span>
            {showVirtualFences && (
              <span className="rounded-md bg-amber-50 px-2 py-1 text-xs text-amber-600">
                💡 Passe o mouse sobre as cercas para ver detalhes
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};
