/**
 * Componente para exibir informações do animal selecionado
 */
export const SelectedAnimalCard = ({ selectedAnimal, onClearSelection }) => {
  if (!selectedAnimal) return null;

  const getSpeciesLabel = (species) => {
    const labels = {
      cattle: "Bovino",
      swine: "Suíno",
      poultry: "Ave",
      goats: "Caprino",
      sheep: "Ovino",
    };
    return labels[species] || species;
  };

  const getSpeciesEmoji = (species) => {
    const emojis = {
      cattle: "🐄",
      swine: "🐷",
      poultry: "🐔",
      goats: "🐐",
      sheep: "🐑",
    };
    return emojis[species] || "🐾";
  };

  return (
    <div className="mt-4 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">
            {getSpeciesEmoji(selectedAnimal.species)}
          </span>
          <div>
            <span className="text-sm font-medium text-blue-700">
              Animal selecionado
            </span>
            <h3 className="text-lg font-bold text-blue-900">
              {selectedAnimal.identification}
            </h3>
          </div>
        </div>
        {onClearSelection && (
          <button
            onClick={onClearSelection}
            className="text-blue-400 transition-colors hover:text-blue-600"
            title="Limpar seleção"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {selectedAnimal.name && (
        <div className="mb-2 text-blue-800">
          <strong>Nome:</strong> {selectedAnimal.name}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-white/50 p-2">
          <span className="font-medium text-blue-600">Espécie</span>
          <div className="text-blue-900">
            {getSpeciesLabel(selectedAnimal.species)}
          </div>
        </div>
        <div className="rounded-lg bg-white/50 p-2">
          <span className="font-medium text-blue-600">Status</span>
          <div className="text-blue-900">{selectedAnimal.status}</div>
        </div>
      </div>
    </div>
  );
};
