import { Container, Col, Row } from "reactstrap"
import { useState } from "react"
import XboxController from '../../../public/xbox-controller.png'
import XboxControllerBackPlate from '../../../public/Xbox-controller-back.png'
import XboxControllerUpperPlate from '../../../public/Xbox-controller-upper.png'
import NavHeader from "../../components/NavHeader/NavHeader"
import InfoCard from "../../components/personalInfo/InfoCard"

const FirstComponent = () => {
    return (
        <>
            <InfoCard titleElement="Javascript"
                subtitleElement="</>" />
            <InfoCard titleElement="Python"
                subtitleElement="</>" />
            <InfoCard titleElement="C"
                subtitleElement="</>" />
            <InfoCard titleElement="C++"
                subtitleElement="</>" />
            <InfoCard titleElement="Typescript"
                subtitleElement="</>" />
            <InfoCard titleElement="Inteligência Artificial"
                subtitleElement="ferramenta" />
        </>
    )
}

const SecondComponent = () => {
    return (
        <>
            <InfoCard titleElement="React DOM"
                subtitleElement="framework" />
            <InfoCard titleElement="Next JS"
                subtitleElement="framework" />
            <InfoCard titleElement="Node.js"
                subtitleElement="framework" />
            <InfoCard titleElement="Bootstrap:"
                subtitleElement="framework" />
            <InfoCard titleElement="Colab"
                subtitleElement="IDE" />
        </>
    )
}

const ThirdComponent = () => {
    return (
        <>
            <InfoCard titleElement="CSS3"
                subtitleElement="style_sheets" />
            <InfoCard titleElement="HTML5:"
                subtitleElement="</>" />
            <InfoCard titleElement="SASS"
                subtitleElement="framework" />
            <InfoCard titleElement="PostgreSQL:"
                subtitleElement="database" />
            <InfoCard titleElement="MongoDB:"
                subtitleElement="database" />
            <InfoCard titleElement="Azure Fundamentals"
                subtitleElement="database" />
        </>
    )
}

export default function () {
    const [componentIndex, setComponentIndex] = useState(0);
    const [image, setImage] = useState(XboxController);

    const handleClick = (direction: string) => {
        setComponentIndex((prevIndex) => {
            const newIndex = direction === 'next' ? (prevIndex + 1) % 3 : (prevIndex - 1 + 3) % 3;
            switch (newIndex) {
                case 0:
                    setImage(XboxController);
                    break;
                case 1:
                    setImage(XboxControllerUpperPlate);
                    break;
                case 2:
                    setImage(XboxControllerBackPlate);
                    break;
                default:
                    setImage(XboxController);
            }
            return newIndex;
        });
    };

    let selectedComponent;
    switch (componentIndex) {
        case 0:
            selectedComponent = <FirstComponent />;
            break;
        case 1:
            selectedComponent = <SecondComponent />;
            break;
        case 2:
            selectedComponent = <ThirdComponent />;
            break;
        default:
            selectedComponent = <FirstComponent />;
    }

    return (
        <>
            <div className="bg-black text-white">
                <NavHeader title="Competências" />
                <main className="d-flex container align-items-center row"
                    style={{ minHeight: '100vh' }}>
                    <img src={image} alt="Controle do Xbox" className="img-fluid w-75" />
                    <section className="d-flex flex-column infoCardBox flex-wrap w-25">
                        <div className="d-flex justify-content-between">
                            <button onClick={() => handleClick('prev')} className="text-white btn btn-transparent">
                                <i className="bi bi-arrow-left small"></i>
                            </button>
                            <button onClick={() => handleClick('next')} className="text-white btn btn-transparent">
                                <i className="bi bi-arrow-right small"></i>
                            </button>
                        </div>
                        {selectedComponent}
                    </section>
                </main>
            </div>
        </>
    );
}
