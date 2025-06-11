import useDailyMooSound from "../../hooks/useDailyMooSound";

const DailyMooSound = () => {
  const { showManualButton, isPlaying, audioFileExists, playMooSound } =
    useDailyMooSound();

  // Se o arquivo de áudio não existe, mostrar instruções
  if (!audioFileExists) {
    return (
      <div className="fixed right-4 top-4 z-50 max-w-sm rounded-lg border border-yellow-200 bg-yellow-50 p-4 shadow-lg">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-2xl">🐄</span>
          <span className="text-sm font-medium text-yellow-800">
            Som do Moovox
          </span>
        </div>
        <p className="mb-2 text-xs text-yellow-700">
          Para ativar o som de boas-vindas diário, adicione um arquivo de áudio
          chamado{" "}
          <code className="rounded bg-yellow-100 px-1 text-xs">
            cow-moo.mp3
          </code>{" "}
          na pasta{" "}
          <code className="rounded bg-yellow-100 px-1 text-xs">
            public/media/
          </code>
          .
        </p>
        <p className="text-xs text-yellow-600">
          💡 Você pode encontrar sons de mugido gratuitos em sites como
          Freesound.org ou Zapsplat.com.
        </p>
      </div>
    );
  }

  // Se deve mostrar o botão manual
  if (showManualButton) {
    return (
      <div className="fixed right-4 top-4 z-50 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-2xl">🐄</span>
          <span className="text-sm font-semibold text-gray-800">
            Bem-vindo ao Moovox!
          </span>
        </div>
        <p className="mb-3 text-xs text-gray-600">
          Seu navegador bloqueou a reprodução automática do som. Clique no botão
          abaixo para ouvir nossa saudação especial!
        </p>
        <button
          onClick={playMooSound}
          disabled={isPlaying}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-green-400"
        >
          {isPlaying ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Reproduzindo...
            </>
          ) : (
            <>🔊 Ouvir som de boas-vindas</>
          )}
        </button>
      </div>
    );
  }

  // Indicador visual quando está reproduzindo automaticamente
  if (isPlaying) {
    return (
      <div className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-lg border border-green-300 bg-green-100 p-3 shadow-md">
        <span className="animate-bounce text-2xl">🐄</span>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-green-800">
            Bem-vindo ao Moovox!
          </span>
          <span className="text-xs text-green-600">
            Reproduzindo som de boas-vindas...
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export default DailyMooSound;
