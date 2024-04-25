import { Container, Card, Row } from "reactstrap"
import { projects } from '../../database/projects'
import CardImg from "./components/CardImg"
import Box from "./components/Box"
export default function MainContent() {
    // Creating the mainContent of the Portfolio, consting Projects and other stuff
    return (
        <>
            <section className="mainSection">
                <Container>
                    <Card>
                        <img src="" alt="" />
                    </Card>
                    <div>
                        {projects.map(project => (
                            <CardImg id={project.id}
                                description={project.description} img_src={project.img_src}
                                title={project.title} key={project.id}/>
                        ))}
                    </div>
                    <Row>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </Row>
                </Container>
            </section>
        </>
    )
}