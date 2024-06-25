import { projects } from "../../database/projects";
import { project } from "../../database/projects";
import CardImg from "../../components/MainContent/components/CardImg";
import { Row } from "reactstrap";
import { useState } from "react";
import FilterButtons from "../../components/StylizedElements/filterButtons";

function MyProjectsPage() {
    const [filteredProducts, setFilteredProducts] = useState<project[]>(projects);
    return (
        <div className="bg-dark text-white wallpaperMyProjects">
            <div className="d-flex">
                <aside className="w-25 p-5 bg-black h-100 d-flex flex-column gap-5 wallpaperMyProjects">
                    <div className="profile-area d-flex flex-column w-100 gap-2">
                        <div className="text-white">
                            <a href="/">
                                <i className="bi bi-arrow-left h5 justify-self-left text-center"></i>
                            </a>
                        </div>
                        <div className="d-flex gap-2">
                            <i className={`bi bi-collection-fill h3 text-white`}></i>
                            <h6>Arthur Gonçalves Saldanha</h6>
                        </div>
                    </div>
                    <ul className="gap-2 d-flex flex-column list-unstyled">
                        <FilterButtons
                            title="Todos os Projetos"
                            numberOfProjects={projects.length}
                            projects={projects}
                            setFilteredProducts={setFilteredProducts}
                        />
                        <FilterButtons
                            title="Typescript"
                            numberOfProjects={1}
                            projects={projects}
                            setFilteredProducts={setFilteredProducts}
                        />
                        <FilterButtons
                            title="React"
                            numberOfProjects={3}
                            projects={projects}
                            setFilteredProducts={setFilteredProducts}
                        />
                        <FilterButtons
                            title="Javascript"
                            numberOfProjects={2}
                            projects={projects}
                            setFilteredProducts={setFilteredProducts}
                        />
                    </ul>
                </aside>
                <main className="w-75 pt-5 px-5 d-flex flex-column gap-3">
                    <h1>Meus Projetos</h1>
                    <section className="filter d-flex gap-2 align-content-center">
                        <span className="d-flex gap-1 p-1">
                            <i className="bi bi-funnel-fill"></i>
                            Filtro:
                        </span>
                        <b className="border p-1 rounded">Relevância</b>
                    </section>
                    <Row className="align-items-end">
                        {filteredProducts.map(project => (
                            <CardImg id={project.id} href={project.href}
                                description={project.description} img_src={project.img_src}
                                title={project.title} key={project.id} small_size />
                        ))}
                    </Row>
                </main>
            </div>
        </div>
    )
}

export default MyProjectsPage;
