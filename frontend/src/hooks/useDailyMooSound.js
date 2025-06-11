import { useCallback, useEffect, useState } from "react";

const useDailyMooSound = () => {
  const [showManualButton, setShowManualButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFileExists, setAudioFileExists] = useState(true);

  const STORAGE_KEY = "moovox_daily_moo";
  const MOO_SOUND_PATH = "/media/cow-moo.mp3";

  // Função para verificar se é um novo dia
  const isNewDay = useCallback(() => {
    const today = new Date().toDateString();
    const lastPlayDate = localStorage.getItem(STORAGE_KEY);
    return lastPlayDate !== today;
  }, []);

  // Função para marcar o som como reproduzido hoje
  const markAsPlayedToday = useCallback(() => {
    const today = new Date().toDateString();
    localStorage.setItem(STORAGE_KEY, today);
  }, []);

  // Função para verificar se o arquivo de áudio existe
  const checkAudioFile = useCallback(async () => {
    try {
      const audio = new Audio(MOO_SOUND_PATH);
      return new Promise((resolve) => {
        const timeout = setTimeout(() => {
          resolve(false);
        }, 3000); // Timeout de 3 segundos

        audio.addEventListener("canplaythrough", () => {
          clearTimeout(timeout);
          resolve(true);
        });

        audio.addEventListener("error", () => {
          clearTimeout(timeout);
          resolve(false);
        });

        audio.load();
      });
    } catch (error) {
      console.log("Erro ao verificar arquivo de áudio:", error);
      return false;
    }
  }, []);

  // Função para reproduzir o som
  const playMooSound = useCallback(async () => {
    try {
      setIsPlaying(true);
      const audio = new Audio(MOO_SOUND_PATH);

      // Configurar o áudio
      audio.volume = 0.7; // Volume moderado
      audio.preload = "auto";

      // Reproduzir o áudio
      await audio.play();

      // Marcar como reproduzido hoje
      markAsPlayedToday();

      // Esconder o botão manual após reproduzir
      setShowManualButton(false);

      // Callback quando o áudio terminar
      audio.addEventListener("ended", () => {
        setIsPlaying(false);
      });

      // Fallback para limpar o estado caso o evento 'ended' não seja disparado
      setTimeout(() => {
        setIsPlaying(false);
      }, 10000); // 10 segundos máximo
    } catch (error) {
      console.log("Erro ao reproduzir áudio:", error);
      setIsPlaying(false);

      // Se falhar a reprodução automática, mostrar botão manual
      if (error.name === "NotAllowedError") {
        setShowManualButton(true);
      }
    }
  }, [markAsPlayedToday]);

  // Inicialização do hook
  useEffect(() => {
    const initializeMooSound = async () => {
      // Primeiro verificar se o arquivo de áudio existe
      const exists = await checkAudioFile();
      setAudioFileExists(exists);

      // Verificar se é um novo dia e se ainda não reproduziu hoje
      if (exists && isNewDay()) {
        // Aguardar um pouco para garantir que a página carregou
        const timer = setTimeout(() => {
          playMooSound();
        }, 1500);

        // Cleanup function
        return () => clearTimeout(timer);
      }
    };

    initializeMooSound();
  }, [checkAudioFile, isNewDay, playMooSound]);

  return {
    showManualButton,
    isPlaying,
    audioFileExists,
    playMooSound,
  };
};

export default useDailyMooSound;
