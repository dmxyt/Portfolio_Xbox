import { motion } from 'framer-motion'
import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

type TransitionProps = {
    children: ReactNode;
}

const Transition = ({children}: TransitionProps) => {
    return (
        <>
            <AnimatePresence>

                <motion.div
                    initial={{ filter: "brightness(0)" }}
                    animate={{ filter: "brightness(1)" }}
                    exit={{ filter: "brightness(0.3)" }}
                    transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                />
                {children}
                <motion.div
                    initial={{ filter: "brightness(0)" }}
                    animate={{ filter: "brightness(1)" }}
                    exit={{ filter: "brightness(0.3)" }}
                    transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                />
            </AnimatePresence>
        </>
    )
}

export default Transition;
