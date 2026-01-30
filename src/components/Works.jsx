import { useState } from 'react';
import { motion } from 'framer-motion';
import { companies } from '../data/projects';
import WorksRow from './WorksRow';
import VideoModal from './VideoModal';
import './Works.css';

export default function Works() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section id="works" className="works section">
            <div className="works__wrapper">
                <motion.div
                    className="works__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="works__label-row">
                        <span className="works__dot"></span>
                        <span className="works__label">Portfolio</span>
                    </div>
                    <div className="works__divider"></div>
                    <h2 className="works__title">FEATURED WORKS</h2>
                </motion.div>
            </div>

            <div className="works__gallery">
                {companies.map((company, index) => (
                    <WorksRow
                        key={company.id}
                        company={company}
                        index={index}
                        onVideoSelect={setSelectedVideo}
                    />
                ))}
            </div>

            <VideoModal
                video={selectedVideo}
                onClose={() => setSelectedVideo(null)}
            />
        </section>
    );
}
