import { useRef } from 'react';
import { motion } from 'framer-motion';
import './TechnicalSkills.css';

export default function TechnicalSkills() {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                // Autoplay might be blocked, usually fine for muted
                console.log("Play failed", error);
            });
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to start
        }
    };

    return (
        <section id="technical" className="technical section">
            <div className="technical__wrapper">
                <motion.div
                    className="technical__content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="technical__header">
                        <span className="technical__dot"></span>
                        <span className="technical__label">Technical Skills</span>
                    </div>
                    <div className="technical__divider"></div>

                    <div className="technical__columns">
                        <div className="technical__text">
                            <p className="technical__bio">
                                At Newa, we focus on building fast, high-quality websites for brands that care about how they show up online.<br></br>Because "Showmanship is the salesmanship"
                                When something looks right, feels right, and works smoothly, it naturally builds trust and trust is what drives action.
                                <br></br>
                                <br></br>
                                Visit <a className="technial_link" href="https://newadesign.vercel.app/" target="_blank" rel="noopener noreferrer">Newa</a>
                            </p>
                        </div>

                        <div
                            className="technical__video-wrapper"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <video
                                ref={videoRef}
                                className="technical__video"
                                src="/Final Newa call.mp4"
                                poster="/newa.jpg"
                                muted
                                loop
                                playsInline
                            ></video>
                        </div>
                    </div>

                    <div className="technical__divider" style={{ marginTop: 'var(--space-2xl)' }}></div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontSize: 'var(--font-xl)', color: 'var(--color-midnight)', fontWeight: 'var(--weight-medium)' }}>Languages I know:</span>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <img src="/Python-logo-notext.svg.webp" alt="Python" style={{ height: '40px', objectFit: 'contain' }} />
                            <img src="/C_Logo.png" alt="C" style={{ height: '40px', objectFit: 'contain' }} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
