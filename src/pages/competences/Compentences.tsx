import { Container, Col, Row } from "reactstrap"
import XboxController from '../../../public/xbox-controller.png'
import NavHeader from "../../components/NavHeader/NavHeader"
export default function () {

    return (
        <>
            <div className="bg-black text-white">
                <NavHeader title="Competências" />
                <main className="d-flex flex-wrap"
                    style={{ minHeight: '93.2vh' }}>
                    <section className="w-75 align-content-center ">
                        <img src={XboxController} alt="Xbox Controller"
                            className="img-fluid  align-self-center" />
                    </section>
                    <aside className="bg-gradient pt-4 
                    w-25 d-flex flex-column container">
                        <section className="title">
                            <h4>Conheça algumas de minhas competências:</h4>
                        </section>
                        <Container className="d-flex gap-5 flex-column">
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
                        </Container>
                    </aside>
                </main>
            </div>
        </>
    )
}