import { motion } from 'framer-motion';
import './About.css';

export default function About() {
    return (
        <section id="about" className="about section">
            <div className="about__wrapper">
                <motion.div
                    className="about__content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="about__header">
                        <span className="about__dot"></span>
                        <span className="about__label">My Story</span>
                    </div>
                    <div className="about__divider"></div>

                    <div className="about__columns">
                        <p className="about__bio about__bio--main">
                            A creator focused on crafting clean, impactful, and timeless visual experiences spanning video, content direction, and web design. Driven by impact and storytelling.
                        </p>
                        <p className="about__bio about__bio--secondary">
                            I'm inspired by cinema, music and modern art,
                            constantly finding new ways to bring fresh
                            perspectives across mediums.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
