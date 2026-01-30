import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './VideoCard.css';

export default function VideoCard({ video, accent, index, onClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const accentClass = accent === 'lavender' ? 'video-card--lavender' : 'video-card--coral';

    // Helper to extract YouTube ID
    const getYouTubeId = (url) => {
        if (!url) return null;
        if (url.includes('youtube.com/shorts/')) return url.split('youtube.com/shorts/')[1]?.split('?')[0];
        if (url.includes('youtu.be/')) return url.split('youtu.be/')[1]?.split('?')[0];
        if (url.includes('youtube.com/watch')) return new URL(url).searchParams.get('v');
        return null;
    };

    const isYouTube = video.src?.includes('youtube') || video.src?.includes('youtu.be');
    const isShorts = video.src?.includes('youtube.com/shorts/');
    const isInstagram = video.src?.includes('instagram.com');
    const youtubeId = isYouTube ? getYouTubeId(video.src) : null;

    // Auto-generate thumbnail if missing
    const thumbnailSrc = video.thumbnail || (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/${isShorts ? 'maxresdefault' : 'mqdefault'}.jpg` : null);

    const verticalClass = (isShorts || isInstagram) ? 'video-card--vertical' : '';

    // Hover Play Logic
    const [isPlayingPreview, setIsPlayingPreview] = useState(false);

    useEffect(() => {
        let timer;
        if (isHovered) {
            timer = setTimeout(() => setIsPlayingPreview(true), 600); // 0.6s delay before playing
        } else {
            setIsPlayingPreview(false);
        }
        return () => clearTimeout(timer);
    }, [isHovered]);

    const handleClick = (e) => {
        // If it's a Drive link or external link that's NOT YouTube, open in new tab
        const isDrive = video.src?.includes('drive.google.com');
        const isFile = !video.src?.includes('http') || video.src?.endsWith('.mp4');

        if (isDrive || (!isYouTube && !isFile)) {
            window.open(video.src, '_blank');
        } else {
            onClick && onClick(video);
        }
    };

    return (
        <motion.article
            className={`video-card ${accentClass} ${verticalClass}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ scrollSnapAlign: 'center' }}
        >
            <div className="video-card__thumbnail">
                {/* 1. Show Hover Preview if playing */}
                {isPlayingPreview ? (
                    <div className="video-card__preview">
                        {isYouTube ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${youtubeId}`}
                                title="preview"
                                style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
                            />
                        ) : (
                            <video
                                src={video.src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        )}
                    </div>
                ) : (
                    /* 2. Show Thumbnail or Placeholder */
                    <>
                        {thumbnailSrc ? (
                            <img src={thumbnailSrc} alt={video.title} className="video-card__img" />
                        ) : (
                            <div className="video-card__placeholder">
                                <svg
                                    className="video-card__icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    aria-hidden="true"
                                >
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                            </div>
                        )}
                    </>
                )}

                {/* Overlay removed as requested */}
            </div>

            <h4 className="video-card__title">{video.title}</h4>
        </motion.article>
    );
}
