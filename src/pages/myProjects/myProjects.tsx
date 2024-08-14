import { projects, project } from "../../database/projects";
import CardImg from "../../components/MainContent/components/CardImg";
import { useState } from "react";
import Aside from "../../components/myProjectsPage/aside/aside";
import { motion } from 'framer-motion'
import Filter from "../../components/StylizedElements/filter";

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
        <motion.div
            initial={{ scale: 1.1, filter: "brightness(0)" }}
            animate={{ scale: 1, filter: "brightness(1)" }}
            exit={{ scale: 1.1, filter: "brightness(0.3)" }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="bg-dark text-white">
            <div className="d-flex flex-wrap">
                <Aside setBtn={setActiveBtn}
                    isBtnActive={activeBtn}
                    projects_filtered={btnFilterData}
                    setFilter={setFilteredProducts}
                />
                <main className="w-75-responsive pt-5 px-5 d-flex flex-column gap-3 h-100">
                    <h1>Meus Projetos</h1>
                    <Filter filterText="Relevância" alignLeft/>
                    <div className="align-items-end d-flex flex-wrap gap-3">
                        {filteredProducts.map(project => (
                            <CardImg id={project.id} href={project.href}
                                description={project.description} img_src={project.img_src}
                                title={project.title} key={project.id} small_size allow_description />
                        ))}
                    </div>
                </main>
            </div>
        </motion.div>
    )
}

export default MyProjectsPage;
