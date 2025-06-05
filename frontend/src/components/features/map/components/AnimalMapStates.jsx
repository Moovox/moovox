/**
 * Componente para estados de loading e error do mapa de animais
 */
export const AnimalMapStates = ({ loading, error }) => {
  return (
    <>
      {/* Loading State */}
      {loading && (
        <div className="mt-2 flex justify-center">
          <div className="flex items-center text-sm text-amber-700">
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-amber-700 border-t-transparent"></div>
            Carregando animais...
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="mt-2 rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-700">
          {error}
        </div>
      )}
    </>
  );
};
