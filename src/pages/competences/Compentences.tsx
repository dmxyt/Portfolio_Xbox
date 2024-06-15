import { Container, Col, Row } from "reactstrap"
import XboxController from '../../../public/xbox-controller.png'
import NavHeader from "../../components/NavHeader/NavHeader"
export default function () {
    return (
        <>
            <div className="bg-dark text-white wallpaperMyProjects">
                <NavHeader title="Competências" />
                <div className=" d-flex flex-column 
                    justify-content-center align-items-center container">
                    <img src={XboxController} alt="Xbox Controller"
                        className="img-fluid w-50" />
                    <div className="d-flex w-100 gap-3 h6 
                    flex-wrap justify-content-center">
                        <button className="btn btn-dark">
                            Javascript
                        </button>
                        <button className="btn btn-dark">
                            Python
                        </button>
                        <button className="btn btn-dark">
                            C
                        </button>
                        <button className="btn btn-dark">
                            C++
                        </button>
                        <button className="btn btn-dark">
                            React
                        </button>
                        <button className="btn btn-dark">
                            Typescript
                        </button>
                        <button className="btn btn-dark">
                            CSS3
                        </button>
                        <button className="btn btn-dark">
                            HTML5
                        </button>
                        <button className="btn btn-dark">
                            SASS
                        </button>
                        <button className="btn btn-dark">
                            Next
                        </button>
                        <button className="btn btn-dark">
                            PostgreSQL
                        </button>
                        <button className="btn btn-dark">
                            MongoDB
                        </button>
                        <button className="btn btn-dark">
                            Bootstrap
                        </button>
                        <button className="btn btn-dark">
                            Node.js
                        </button>
                        <button className="btn btn-dark text-center">
                            Azure Fundamentals
                        </button>
                        <button className="btn btn-dark text-center">
                            Inteligência Artificial
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}