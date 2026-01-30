import { motion } from 'framer-motion';
import './TechnicalSkills.css';

export default function TechnicalSkills() {
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

                        <div className="technical__video-wrapper">
                            <iframe
                                className="technical__iframe"
                                src="https://www.youtube.com/embed/70VsOdeyyek?rel=0&modestbranding=1"
                                title="Technical Skills Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
