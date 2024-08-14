import { AnimatePresence, motion } from "framer-motion";
import AccountSection from "./AccountSection";
import TabSelector from "./TabSelector";
import SystemInfo from "./SystemInfo";

type FullscreenHeaderProps = {
    isOpen: boolean;
};

export default function FullscreenHeader({ isOpen }: FullscreenHeaderProps) {
    const menuVariants = {
        hidden: { opacity: 0,  },
        visible: { opacity: 1, },
        exit: { opacity: 0,  }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <div className="d-flex flex-column-reverse  
                    justify-content-center align-items-center
                    gap-5 flex-wrap-reverse ">
                        <div className="w-100">
                            <h5>Direitos Autorais:</h5>
                            <div className="bg-dark w-100 d-flex justify-content-center
                            align-items-center p-3 rounded">
                                <span>
                                    Esse Website apenas retrata uma inspiração da dashboard do Xbox
                                    One, obtendo consigo algumas de suas imagens, animações e elementos
                                    visuais licenciados pela Microsoft. O intuito desse projeto é apenas
                                    por apresentação, sem quaisquer envolvimento financeiro ou monetário
                                    em seu propósito. Todos os direitos são reservados aos detentores das 
                                    imagens e conteúdos externos do portifólio.
                                </span>
                            </div>
                        </div>
                        <div className="w-100">
                            <h5>Perfil Xbox:</h5>
                            <div className="bg-dark w-100 d-flex justify-content-center pt-3 pb-3 rounded">
                                <AccountSection showScore smallSize />
                            </div>
                        </div>
                        <div className="w-100">
                            <h5>Páginas Xbox:</h5>
                            <div className="bg-dark w-100 d-flex justify-content-center pt-3 pb-3 rounded">
                                <TabSelector />
                            </div>
                        </div>
                        <div className="w-100">
                            <h5>Informações do Sistema:</h5>
                            <div className="bg-dark w-100 d-flex justify-content-center
                            align-items-center p-3 rounded">
                                <SystemInfo />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}