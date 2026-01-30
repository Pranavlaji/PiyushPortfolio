import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="contact__wrapper">
                <motion.div
                    className="contact__content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="contact__header">
                        <span className="contact__dot"></span>
                        <span className="contact__label">Let's talk</span>
                    </div>
                    <div className="contact__divider"></div>

                    <div className="contact__main">
                        <div className="contact__left">
                            <h2 className="contact__name">PIYUSH</h2>
                            <p className="contact__tagline">Crafting timeless stories with purpose.</p>

                        </div>

                        <div className="contact__right">
                            <nav className="contact__links">
                                <a href="mailto:info.workwithpiyush@gmail.com" className="contact__link">
                                    Mail me!
                                </a>
                                <a href="https://calendly.com/workfullness123/30min" target="_blank" rel="noopener noreferrer" className="contact__link">
                                    Book a Call!
                                </a>
                                <a href="https://www.linkedin.com/in/editwithpiyush" target="_blank" rel="noopener noreferrer" className="contact__link">
                                    LinkedIn
                                </a>
                            </nav>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
