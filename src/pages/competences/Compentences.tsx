import { Container } from "reactstrap";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import XboxController from '../../../public/xbox-controller.png';
import XboxControllerBackPlate from '../../../public/Xbox-controller-back.png';
import XboxControllerUpperPlate from '../../../public/Xbox-controller-upper.png';
import NavHeader from "../../components/NavHeader/NavHeader";
import InfoCard from "../../components/personalInfo/InfoCard";

const FirstComponent = () => (
    <>
        <InfoCard titleElement="Javascript" subtitleElement="</>" />
        <InfoCard titleElement="Python" subtitleElement="</>" />
        <InfoCard titleElement="C" subtitleElement="</>" />
        <InfoCard titleElement="C++" subtitleElement="</>" />
        <InfoCard titleElement="Typescript" subtitleElement="</>" />
        <InfoCard titleElement="IA Generativa" subtitleElement="ferramenta" />
    </>
);

const SecondComponent = () => (
    <>
        <InfoCard titleElement="React DOM" subtitleElement="framework" />
        <InfoCard titleElement="Next JS" subtitleElement="framework" />
        <InfoCard titleElement="Node.js" subtitleElement="framework" />
        <InfoCard titleElement="Bootstrap:" subtitleElement="framework" />
        <InfoCard titleElement="Colab" subtitleElement="IDE" />
    </>
);

const ThirdComponent = () => (
    <>
        <InfoCard titleElement="CSS3" subtitleElement="style_sheets" />
        <InfoCard titleElement="HTML5:" subtitleElement="</>" />
        <InfoCard titleElement="SASS" subtitleElement="framework" />
        <InfoCard titleElement="PostgreSQL:" subtitleElement="database" />
        <InfoCard titleElement="MongoDB:" subtitleElement="database" />
        <InfoCard titleElement="Azure Fundamentals" subtitleElement="database" />
    </>
);

const components = [FirstComponent, SecondComponent, ThirdComponent];
const images = [XboxController, XboxControllerUpperPlate, XboxControllerBackPlate];

function HomePage() {
    const [componentIndex, setComponentIndex] = useState(0);

    const handleClick = (direction: string) => {
        setComponentIndex((prevIndex) => {
            const newIndex = direction === 'next' ? (prevIndex + 1) % 3 : (prevIndex - 1 + 3) % 3;
            return newIndex;
        });
    };
    const SelectedComponent = components[componentIndex];
    const image = images[componentIndex];

    return (
        <>
            <motion.div
                initial={{ scale: 1.1, filter: "brightness(0)" }}
                animate={{ scale: 1, filter: "brightness(1)" }}
                exit={{ scale: 1.1, filter: "brightness(0)" }}
                transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="bg-black text-white vh-100 overflow-auto"
            >
                <NavHeader title="Habilidades e Competências:" />
                <Container
                    className="d-flex h-100 wrap-competences-page gap-3 pb-4 justify-content-center align-items-center"
                >
                    <div className="pt-3 d-flex justify-content-center w-75">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={image}
                                src={image}
                                alt="Controle do Xbox"
                                className="img-fluid responsive-image"
                                initial={{ filter: "brightness(0)" }}
                                animate={{ filter: "brightness(1)" }}
                                exit={{ filter: "brightness(0)" }}
                                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                            />
                        </AnimatePresence>
                    </div>
                    <div
                        className="d-flex flex-column align-items-center justify-content-center w-75 w-lg-50"
                    >
                        <header className="d-flex justify-content-between w-75">
                            <button onClick={() => handleClick('prev')} className="text-white btn btn-transparent">
                                <i className="bi bi-arrow-left small"></i>
                            </button>
                            <button onClick={() => handleClick('next')} className="text-white btn btn-transparent">
                                <i className="bi bi-arrow-right small"></i>
                            </button>
                        </header>
                        <main className="d-flex flex-column align-items-center justify-content-center ">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={componentIndex}
                                    initial={{ filter: "brightness(0)", x: 50 }}
                                    animate={{ filter: "brightness(1)", x: 0 }}
                                    exit={{ filter: "brightness(0.1)", x: -50 }}
                                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                                >
                                    <SelectedComponent />
                                </motion.div>
                            </AnimatePresence>
                        </main>
                    </div>
                </Container>
            </motion.div>
        </>
    );
};

export default HomePage;
