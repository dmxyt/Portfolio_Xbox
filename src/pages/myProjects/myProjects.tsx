import { projects } from "../../database/projects";
import { project } from "../../database/projects";
import CardImg from "../../components/MainContent/components/CardImg";
import { Row } from "reactstrap";
import { useState } from "react";
import FilterButtons from "../../components/StylizedElements/filterButtons";
import AccountSection from "../../components/HeaderMainPage/HeaderPartitions/AccountSection";

function MyProjectsPage() {
    const [filteredProducts, setFilteredProducts] = useState<project[]>(projects);
    const [activeBtn, setActiveBtn] = useState<string | null>(null)

    const btnFilterData = [
        { title: "Todos os Projetos", numberOfProjects: projects.length },
        { title: 'Typescript', numberOfProjects: projects.filter(p => p.languages?.includes("Typescript")).length },
        { title: 'React', numberOfProjects: projects.filter(p => p.languages?.includes("React")).length },
        { title: "Javascript", numberOfProjects: projects.filter(p => p.languages?.includes("Javascript")).length },
    ]

    return (
        <div className="bg-dark text-white">
            <div className="d-flex">
                <aside className="w-25 border-end border-secondary border-3
                vh-100 d-flex flex-column gap-5 ">
                    <header className="text-white d-flex w-100 gap-3 
                    justify-content-center align-content-center px-5 pt-5">
                        <i className="bi bi-collection align-self-center imgSize"></i>
                        <AccountSection imgSize="3vh" href="/" />
                    </header>
                    <ul className="d-flex flex-column list-unstyled">
                        {btnFilterData.map((button) => (
                            <FilterButtons
                                key={button.title}
                                title={button.title}
                                numberOfProjects={button.numberOfProjects}
                                projects={projects}
                                setActiveButton={setActiveBtn}
                                isActive={activeBtn === button.title}
                                setFilteredProducts={setFilteredProducts}
                            />
                        ))}
                    </ul>
                    <footer className="d-flex  fixed-bottom p-5">
                        <div className="info">
                            <span className="d-flex gap-1">
                                Total de Projetos:
                                <b>
                                    {projects.length}
                                </b>
                            </span>
                            <b >
                                Feito por @arthurgonsal
                            </b>
                        </div>
                        <div className="graph">
                            <svg>
                                <circle cx="50" cy="50" r="40" />
                            </svg>
                            <svg className="cor">
                                <circle cx="50" cy="50" r="40" />
                            </svg>
                            <span className="counter">25%</span>
                        </div>
                    </footer>
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
