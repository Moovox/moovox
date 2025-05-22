import { useEffect, useRef, useState } from 'react';

function BackgroundVideo() {

    const videos = [
        '/media/background1.mp4',
        '/media/background2.mp4',
        '/media/background3.mp4'
    ];

    const [currentVideo, setCurrentVideo] = useState(0);
    const [fade, setFade] = useState(false);
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
            setFade(false);
        }, 500);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.load();
            video.play();
        }
    }, [currentVideo]);

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
            <source key={videos[currentVideo]} src={videos[currentVideo]} type="video/mp4" />
            Seu navegador não suporta vídeos.
        </video>
    )
}

export default BackgroundVideo;