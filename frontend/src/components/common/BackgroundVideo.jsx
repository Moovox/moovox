import { useEffect, useRef, useState } from "react";

// Detecta se o dispositivo é mobile
const isMobile = () => {
  if (typeof window === "undefined" || typeof navigator === "undefined")
    return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

// Bolha animada
const MoovoxBubble = ({ className }) => <span className={className} />;

// Fundo animado fallback
const MoovoxAnimatedBackground = () => (
  <div
    className="pointer-events-none fixed left-0 top-0 z-10 h-full w-full overflow-hidden"
    aria-hidden="true"
  >
    <div className="moovox-gradient" />
    <MoovoxBubble className="moovox-bubble1 absolute left-1/4 top-1/3 h-32 w-32 rounded-full bg-green-300 opacity-30 blur-2xl" />
    <MoovoxBubble className="moovox-bubble2 absolute right-1/4 top-1/2 h-24 w-24 rounded-full bg-amber-200 opacity-20 blur-2xl" />
    <MoovoxBubble className="moovox-bubble3 absolute bottom-1/4 left-1/2 h-40 w-40 rounded-full bg-green-400 opacity-20 blur-2xl" />
  </div>
);

// Verifica se deve mostrar o fallback animado
const shouldShowFallback = () => {
  if (typeof window === "undefined" || typeof navigator === "undefined")
    return false;
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  const slowConnection =
    connection &&
    (connection.saveData ||
      connection.effectiveType === "2g" ||
      connection.effectiveType === "slow-2g");
  return !!slowConnection;
};

const VIDEO_LIST = [
  "/media/background1.mp4",
  "/media/background2.mp4",
  "/media/background3.mp4",
];

const BackgroundVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fade, setFade] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setShowFallback(shouldShowFallback());
    // Não precisa de dependências, só roda uma vez
    // eslint-disable-next-line
  }, []);

  // Troca o vídeo ao terminar
  const handleVideoEnd = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % VIDEO_LIST.length);
      setFade(false);
    }, 500);
  };

  // Reinicia vídeo ao trocar
  useEffect(() => {
    if (showFallback) return;
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play();
    }
  }, [currentVideo, showFallback]);

  if (showFallback) return <MoovoxAnimatedBackground />;

  return (
    <video
      ref={videoRef}
      onEnded={handleVideoEnd}
      muted
      playsInline
      autoPlay
      preload="auto"
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-10 h-full w-full object-cover transition-opacity duration-700 ${fade ? "opacity-0" : "opacity-40"}`}
    >
      <source
        key={VIDEO_LIST[currentVideo]}
        src={VIDEO_LIST[currentVideo]}
        type="video/mp4"
      />
      Seu navegador não suporta vídeos.
    </video>
  );
};

export default BackgroundVideo;
