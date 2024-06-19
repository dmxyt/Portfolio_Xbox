import { Container, Col, Row } from "reactstrap"
import XboxController from '../../../public/xbox-controller.png'
import NavHeader from "../../components/NavHeader/NavHeader"
import InfoCard from "../../components/personalInfo/InfoCard"
export default function () {

    return (
        <>
            <div className="bg-black text-white">
                <NavHeader title="Competências" />
                <main className="d-flex flex-wrap container d-flex justify-content-between"
                    style={{ minHeight: '100vh' }}>
                    <section className="d-flex flex-column infoCardBox w-25 pt-5 flex-wrap">
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
                    </section>
                    <section className="d-flex flex-column infoCardBox w-25 align-self-center flex-wrap">
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
                    </section>
                    <section className="d-flex flex-column infoCardBox w-25 align-self-end mb-5 pb-5 flex-wrap">
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
                    </section>

                    {/* <Container className="d-flex gap-5 flex-column">
                            <section className="d-flex flex-column">
                                <h5>Linguagens de Programação:</h5>
                                <div className="d-flex gap-2 
                                justify-content-center flex-wrap">
                                        <button className="btn btn-outline-light">
                                            Javascript
                                        </button>
                                        <button className="btn btn-outline-light">
                                            Python
                                        </button>
                                        <button className="btn btn-outline-light">
                                            C
                                        </button>
                                        <button className="btn btn-outline-light">
                                            C++
                                        </button>
                                        <button className="btn btn-outline-light">
                                            Typescript
                                        </button>
                                </div>
                            </section>
                            <section className="d-flex flex-column">
                                <h5>Frameworks e Bibliotecas:</h5>
                                <div className="d-flex gap-2 justify-content-center flex-wrap">
                                    <button className="btn btn-outline-light">
                                        React DOM
                                    </button>
                                    <button className="btn btn-outline-light">
                                        Next JS
                                    </button>
                                    <button className="btn btn-outline-light">
                                        Node.js
                                    </button>
                                    <button className="btn btn-outline-light">
                                        Bootstrap
                                    </button>
                                </div>
                            </section>
                            <section className="d-flex px-2 flex-column">
                                <h5>Tecnologias Web:</h5>
                                <div className="d-flex gap-2 justify-content-center flex-wrap">
                                    <button className="btn btn-outline-light">
                                        CSS3
                                    </button>
                                    <button className="btn btn-outline-light">
                                        HTML5
                                    </button>
                                    <button className="btn btn-outline-light">
                                        SASS
                                    </button>
                                </div>
                            </section>
                            <section className="d-flex px-2 flex-column">
                                <h5>Bancos de Dados:</h5>
                                <div className="d-flex gap-2 justify-content-center flex-wrap">
                                    <button className="btn btn-outline-light">
                                        PostgreSQL
                                    </button>
                                    <button className="btn btn-outline-light">
                                        MongoDB
                                    </button>
                                </div>
                            </section>
                            <section className="d-flex px-2 flex-column">
                                <h5>Outros:</h5>
                                <div className="d-flex gap-2 justify-content-center flex-wrap">
                                    <button className="btn btn-outline-light text-center">
                                        Azure Fundamentals
                                    </button>
                                    <button className="btn btn-outline-light text-center">
                                        Inteligência Artificial
                                    </button>
                                </div>
                            </section>
                        </Container> */}
                </main>
            </div>
        </>
    )
}