import { projects } from "../../database/projects";
import CardImg from "../../components/MainContent/components/CardImg";
import { Row } from "reactstrap";
function MyProjectsPage() {
    return (
        <>
            <div className="bg-dark text-white wallpaperMyProjects">
                <div className="d-flex">
                    <aside className="w-25 p-5 bg-black h-100 d-flex flex-column gap-5 wallpaperMyProjects">
                        <div className="profile-area d-flex flex-column w-100 gap-2">
                            <div className="text-white">
                                <a href="/">
                                    <i className="bi bi-box-arrow-left h5 justify-self-left text-center"></i>
                                </a>
                            </div>
                            <div className="d-flex gap-2">
                                <i className={`bi bi-collection-fill h3 text-white`}></i>
                                <h6>Arthur Gonçalves Saldanha</h6>
                            </div>
                        </div>
                        <ul className="gap-2 d-flex flex-column list-unstyled">
                            <li className="d-flex justify-content-between">
                                <span className="">Todos os Projetos</span>
                                <span className="">3</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <span className="">Typescript</span>
                                <span className="">1</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <span className="">React</span>
                                <span className="">3</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <span className="">Javascript</span>
                                <span className="">2</span>
                            </li>
                        </ul>
                        <section className="diskuse">
                            {/* <Contacts /> */}
                        </section>
                    </aside>
                    <main className="w-75 pt-5 px-5 d-flex flex-column gap-3">
                        <h1>All Projects</h1>
                        <input type="text" className="input w-25" />
                        <Row className="align-items-end">
                            {projects.map(project => (
                                <CardImg id={project.id} href={project.href}
                                    description={project.description} img_src={project.img_src}
                                    title={project.title} key={project.id}  />
                            ))}
                        </Row>
                    </main>
                </div>
            </div>
        </>
    )
}

export default MyProjectsPage;
