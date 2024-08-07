import { Modal, ModalBody } from "reactstrap"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react";
type modalProps = {
    isOpen: boolean,
    toggle: () => void
}

export default function ({ isOpen, toggle }: modalProps) {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setShowButton(true);
            }, 2000);

            return () => clearTimeout(timer);
        } else {
            setShowButton(false);
        }
    }, [isOpen]);
    return (
        <>
            <Modal isOpen={isOpen} className="rounded modal-xl modal-dialog-centered">
                <button className="btn btn-success rounded-0 rounded-top" onClick={toggle}>
                    <i className="bi bi-person-fill-lock"></i>
                </button>
                <ModalBody className="bg-black text-white d-flex flex-column rounded-bottom justify-content-center align-items-center position-relative">
                    <h3 className="text-center mb-4">
                        Para melhorar sua experiência, caso esteja em um dispositivo mobile,
                        deixe-o na horizontal.
                    </h3>
                    <i className="bi bi-phone-landscape-fill mb-4" style={{ fontSize: '2rem' }}></i>
                    <AnimatePresence mode="wait">
                        {showButton && (
                            <motion.a
                                initial={{ filter: 'brightness(0)' }}
                                animate={{ filter: 'brightness(1)' }}
                                exit={{ filter: 'brightness(2)' }}
                                transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
                                href="home"
                                className="btn btn-success position-absolute bottom-0 end-0 m-3"
                                onClick={toggle}
                            >
                                <b>Continuar</b>
                            </motion.a>
                        )}
                    </AnimatePresence>
                </ModalBody>
            </Modal>
        </>
    )
}