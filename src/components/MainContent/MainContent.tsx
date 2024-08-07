import { Container} from "reactstrap"
import { projects } from '../../database/projects'
import CardImg from "./components/CardImg"
import Box from "./components/Box"

export default function MainContent() {
    const midpoint = Math.ceil(projects.length / 2);
    const firstGroup = projects.slice(0, midpoint);
    const secondGroup = projects.slice(midpoint);
    return (
        <>
            <section className="default-padding pb-5 px-3 mainSection">
                <Container className="d-flex flex-column gap-4" fluid>
                    <div className="w-100 d-flex gap-2 flex-wrap justify-content-items">
                        <div className="d-flex gap-2 flex-wrap justify-content-items">
                            {firstGroup.map(project => (
                                <CardImg
                                    id={project.id}
                                    href={project.href}
                                    description={project.description}
                                    img_src={project.img_src}
                                    title={project.title}
                                    key={project.id}
                                    small_size
                                />
                            ))}
                        </div>
                        <div className="d-flex gap-2 flex-wrap justify-content-items">
                            {secondGroup.map(project => (
                                <CardImg
                                    id={project.id}
                                    href={project.href}
                                    description={project.description}
                                    img_src={project.img_src}
                                    title={project.title}
                                    key={project.id}
                                    small_size
                                />
                            ))}
                        </div>
                    </div>
                    <div className="d-flex gap-4 w-100 flex-wrap justify-content-items ">
                        <div className="d-flex gap-4 flex-wrap-timing">
                            <Box icon={'collection-fill'} description={'Projetos'} href="/myProjects" target={false} />
                            <Box icon={'person-workspace'} description={"Carreira"} href="professional_experiences" target={false} />
                            <Box icon={"linkedin"} description={"LinkedIn"} href="https://www.linkedin.com/in/arthur-gonçalves-saldanha-375a70157" target={true} />
                            <Box icon={"file-earmark-richtext-fill"} description={'Currículo'} href="https://drive.google.com/file/d/1FYl3iC4gEwcw1MVYhEyIQW1m18sLAuml/view?usp=sharing" target={true} />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
