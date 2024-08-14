import { Container } from 'reactstrap';
import { useState, useEffect } from 'react';
import FullscreenHeader from './HeaderPartitions/Fullscreen';
import { motion } from 'framer-motion';
import AccountSection from './HeaderPartitions/AccountSection';
import TabSelector from './HeaderPartitions/TabSelector';
import SystemInfo from './HeaderPartitions/SystemInfo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setIsMobileView(true);
            } else {
                setIsMobileView(false);
                setIsOpen(false); 
            }
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.header
            initial={{ scale: 2.5, filter: "brightness(0.3)" }}
            animate={{ scale: 1, filter: "brightness(1)" }}
            exit={{ scale: 2.5, filter: "brightness(0.3)" }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className={`${isOpen ? 'bg-black fullscreen-header' : 'p-5'}`}
        >
            <Container fluid className={`white-text ${isOpen? 'bg-black pb-3': null}`}>
                {isMobileView && (
                    <button className='d-lg-none mb-3 btn' onClick={toggleMenu}>
                        {isOpen ? (
                            <div className='d-flex gap-3 text-white'>
                                <i className="bi bi-dpad"></i>
                                <b>Fechar Menu</b>
                            </div>
                        ) : (
                            <div className='d-flex gap-3 text-white'>
                                <i className="bi bi-dpad-fill"></i>
                                <b>Abrir Menu</b>
                            </div>
                        )}
                    </button>
                )}
                {isMobileView ? (
                    <FullscreenHeader isOpen={isOpen} />
                ) : (
                    <div className="d-flex w-100 justify-content-between">
                        <AccountSection showScore smallSize />
                        <TabSelector />
                        <SystemInfo />
                    </div>
                )}
            </Container>
        </motion.header>
    );
};

export default Header;
