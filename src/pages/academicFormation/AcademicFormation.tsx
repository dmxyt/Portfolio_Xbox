import { Container } from "reactstrap"
import BoxCollapsed from "../../components/academicFormation/BoxCollapsed"
export default function () {
    return (
        <>
            <div className="wallpaperMyProjects bg-dark text-white">
                <Container>
                    <div className="text-white pt-5 d-flex gap-3 align-items-center">
                        <a href="homepage">
                            <i className="bi bi-box-arrow-left h3 "></i>
                        </a>
                        <h1>Formações Acadêmicas</h1>
                    </div>
                    <BoxCollapsed 
                     />
                </Container>
            </div>
        </>
    )
}