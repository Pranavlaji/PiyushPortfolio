import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
    { label: 'Works', href: '#works' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.header
            className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="navbar__container">
                <a href="#" className="navbar__logo">
                    PIYUSH
                </a>

                {/* Desktop Navigation */}
                <nav className="navbar__nav" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="navbar__link">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className="navbar__hamburger-line" />
                    <span className="navbar__hamburger-line" />
                    <span className="navbar__hamburger-line" />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="navbar__mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="navbar__mobile-nav">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    className="navbar__mobile-link"
                                    onClick={handleLinkClick}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
