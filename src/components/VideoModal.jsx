import { useEffect } from 'react';
import './VideoModal.css';

export default function VideoModal({ video, onClose }) {
    if (!video) return null;

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden'; // Lock scroll

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    // Parse YouTube ID if it's a YouTube link
    const getYouTubeEmbedUrl = (url) => {
        if (!url) return null;

        let videoId = null;
        if (url.includes('youtube.com/shorts/')) {
            videoId = url.split('youtube.com/shorts/')[1]?.split('?')[0];
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1]?.split('?')[0];
        } else if (url.includes('youtube.com/watch')) {
            const urlParams = new URL(url).searchParams;
            videoId = urlParams.get('v');
        }

        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null;
    };

    const isYouTube = video.src?.includes('youtube') || video.src?.includes('youtu.be');
    const isInstagram = video.src?.includes('instagram.com');

    // For Instagram, append /embed to the URL properly
    const getInstagramEmbedUrl = (url) => {
        // Remove query params if any, and ensure it ends with slash before embed
        const cleanUrl = url.split('?')[0].replace(/\/$/, '');
        return `${cleanUrl}/embed`;
    };

    const embedUrl = isYouTube ? getYouTubeEmbedUrl(video.src) : (isInstagram ? getInstagramEmbedUrl(video.src) : video.src);

    return (
        <div className="video-modal is-open" onClick={onClose}>
            <div className="video-modal__content" onClick={(e) => e.stopPropagation()}>
                <button className="video-modal__close" onClick={onClose}>
                    CLOSE ✕
                </button>

                {(isYouTube || isInstagram) ? (
                    <iframe
                        className="video-modal__iframe"
                        src={embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <video
                        className="video-modal__video"
                        src={video.src}
                        controls
                        autoPlay
                    ></video>
                )}
            </div>
        </div>
    );
}
