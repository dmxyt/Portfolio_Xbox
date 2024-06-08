import { Container, Col, Row } from "reactstrap"
import XboxController from '../../../public/xbox-controller.png'
export default function () {
    return (
        <>
            <div className="bg-dark text-white wallpaperMyProjects">
                <Container>
                    <div className="text-white pt-5 d-flex gap-3 align-items-center">
                        <a href="/">
                            <i className="bi bi-box-arrow-left h3 "></i>
                        </a>
                        <h1 className="">Competências</h1>
                    </div>
                    <div className=" d-flex flex-column 
                    justify-content-center align-items-center ">
                        <img src={XboxController} alt="Xbox Controller"
                            className="img-fluid w-50" />
                        <div className="d-flex w-100 gap-3 h6">
                            <span>
                                Javascript
                            </span>
                            <span>
                                Python
                            </span>
                            <span>
                                C
                            </span>
                            <span>
                                C++
                            </span>
                            <span>
                                React
                            </span>
                            <span>
                                Typescript
                            </span>
                            <span>
                                CSS3
                            </span>
                            <span>
                                HTML5
                            </span>
                            <span>
                                SASS
                            </span>
                            <span>
                                Next
                            </span>
                            <span>
                                PostgreSQL
                            </span>
                            <span>
                                MongoDB
                            </span>
                            <span>
                                Bootstrap
                            </span>
                            <span>
                                Node.js
                            </span>
                            <span className="text-center">
                                Azure Fundamentals
                            </span>
                            <span className="text-center">
                                Inteligência Artificial
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}