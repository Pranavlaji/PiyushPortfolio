import { useRef } from 'react';
import { motion } from 'framer-motion';
import VideoCard from './VideoCard';
import './WorksRow.css';

export default function WorksRow({ company, index, onVideoSelect }) {
    const scrollRef = useRef(null);

    const accentClass = company.accent === 'lavender' ? 'works-row--lavender' : 'works-row--coral';

    return (
        <motion.div
            className={`works-row ${accentClass}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
            <h3 className="works-row__company">{company.name}</h3>

            <button
                className="works-row__arrow works-row__arrow--left"
                onClick={() => {
                    if (scrollRef.current) {
                        scrollRef.current.scrollBy({ left: -window.innerWidth * 0.6, behavior: 'smooth' });
                    }
                }}
                aria-label="Scroll left"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            <button
                className="works-row__arrow works-row__arrow--right"
                onClick={() => {
                    if (scrollRef.current) {
                        scrollRef.current.scrollBy({ left: window.innerWidth * 0.6, behavior: 'smooth' });
                    }
                }}
                aria-label="Scroll right"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>

            <div className="works-row__scroll-container" ref={scrollRef}>
                <div className="works-row__scroll-track">
                    {company.videos.map((video, videoIndex) => (
                        <VideoCard
                            key={video.id}
                            video={video}
                            accent={company.accent}
                            index={videoIndex}
                            onClick={onVideoSelect}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
