import { useEffect, useRef, useState } from 'react';

// Detecta se o dispositivo é mobile
const isMobile = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Bolha animada
const MoovoxBubble = ({ className }) => <span className={className} />;

// Fundo animado fallback
const MoovoxAnimatedBackground = () => (
  <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden" aria-hidden="true">
    <div className="moovox-gradient" />
    <MoovoxBubble className="absolute left-1/4 top-1/3 w-32 h-32 bg-green-300 rounded-full opacity-30 blur-2xl moovox-bubble1" />
    <MoovoxBubble className="absolute right-1/4 top-1/2 w-24 h-24 bg-amber-200 rounded-full opacity-20 blur-2xl moovox-bubble2" />
    <MoovoxBubble className="absolute left-1/2 bottom-1/4 w-40 h-40 bg-green-400 rounded-full opacity-20 blur-2xl moovox-bubble3" />
  </div>
);

// Verifica se deve mostrar o fallback animado
const shouldShowFallback = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const slowConnection = connection && (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g');
  return !!slowConnection;
};

const VIDEO_LIST = [
  '/media/background1.mp4',
  '/media/background2.mp4',
  '/media/background3.mp4',
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
      className={`object-cover w-full h-full fixed top-0 left-0 z-10 pointer-events-none transition-opacity duration-700 ${fade ? 'opacity-0' : 'opacity-40'}`}
    >
      <source key={VIDEO_LIST[currentVideo]} src={VIDEO_LIST[currentVideo]} type="video/mp4" />
      Seu navegador não suporta vídeos.
    </video>
  );
};

export default BackgroundVideo;