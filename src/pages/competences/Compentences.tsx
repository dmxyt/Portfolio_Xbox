import { Container, Col, Row } from "reactstrap"
import XboxController from '../../../public/xbox-controller.png'
export default function () {
    return (
        <>
            <div className="bg-dark text-white wallpaperMyProjects">
                <Container>
                    <h1 className="pt-5">Competências</h1>
                    <div className="container-sm d-flex flex-column 
                    justify-content-center align-items-center">
                        <img src={XboxController} alt="Xbox Controller" 
                        className="img-fluid w-50" />
                        <Row className="">
                            <Col>
                                Javascript
                            </Col>
                            <Col>
                                Python
                            </Col>
                            <Col>
                                C
                            </Col>
                            <Col>
                                C++
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                React
                            </Col>
                            <Col>
                                Typescript
                            </Col>
                            <Col>
                                CSS3
                            </Col>
                            <Col>
                                HTML5
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                SASS
                            </Col>
                            <Col>
                                Next
                            </Col>
                            <Col>
                                PostgreSQL
                            </Col>
                            <Col>
                                MongoDB
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Bootstrap
                            </Col>
                            <Col>
                                Node.js
                            </Col>
                            <Col>
                                Azure Fundamentals
                            </Col>
                            <Col>
                                Inteligência Artificial
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}