import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__content">
                    <p className="hero__intro">Hey, I am Piyush Singh</p>
                    <h1 className="hero__title">
                        I craft engaging <br className="hero__br" />
                        Stories and <br className="hero__br" />
                        <span className="hero__highlight">Content.</span>
                    </h1>
                    <div className="hero__cta">
                        <a href="#contact" className="btn btn-primary">
                            Let's Talk!
                        </a>
                    </div>
                </div>

                {isMobile ? (
                    <div className="hero__visual">
                        <div className="hero__image-wrapper">
                            <img src="/pfp.jpg" alt="Piyush Singh" className="hero__img" />
                        </div>
                    </div>
                ) : (
                    <motion.div
                        className="hero__visual"
                        initial={{ opacity: 0, x: 200, rotate: 15, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 3, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="hero__image-wrapper">
                            <img src="/pfp.jpg" alt="Piyush Singh" className="hero__img" />
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
