import AccountSection from "../../HeaderMainPage/HeaderPartitions/AccountSection"
import FilterButtons from "../../StylizedElements/filterButtons"
import { projects, project } from "../../../database/projects"
import Graph from "../graph.tsx/graph"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type asideProps = {
    projects_filtered: { title: string, numberOfProjects: number }[],
    setFilter: React.Dispatch<React.SetStateAction<project[]>>,
    setBtn: React.Dispatch<React.SetStateAction<string | null>>,
    isBtnActive: string | null

}

export default function ({ isBtnActive, projects_filtered, setFilter, setBtn }: asideProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 610) {
                setIsMobileView(true);
                setIsOpen(false);
            } else {
                setIsMobileView(false);
                setIsOpen(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const menuVariants = {
        hidden: { opacity: 0, y: '-100%' },
        visible: { opacity: 1, y: '0%' },
        exit: { opacity: 0, y: '-100%' }
    };
    return (
        <>
            {isMobileView ? (
                <header className="d-flex align-content-center bg-dark justify-content-center w-100 flex-column">
                    <button className='btn d-flex justify-content-center align-items-center' onClick={toggleMenu}>
                        {isOpen ? (
                            <div className='d-flex gap-3 text-white'>
                                <i className="bi bi-dpad"></i>
                            </div>
                        ) : (
                            <div className='d-flex gap-3 text-white flex-wrap'>
                                <i className="bi bi-dpad-fill"></i>
                            </div>
                        )}
                    </button>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={menuVariants}
                                transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                                className="d-flex flex-column bg-black gap-5 pb-3 rounded vh-100"
                                onClick={toggleMenu}
                            >
                                <div className="w-100 d-flex justify-content-center align-items-center text-center p-3">
                                    <div className="d-flex gap-2 align-items-center">
                                        <i className="bi bi-collection"></i>
                                        <AccountSection href="home" />
                                    </div>
                                </div>
                                <div className="w-100 px-3">
                                    <ul className="d-flex flex-column list-unstyled bg-dark rounded">
                                        {projects_filtered.map((button) => (
                                            <FilterButtons
                                                key={button.title}
                                                title={button.title}
                                                numberOfProjects={button.numberOfProjects}
                                                projects={projects}
                                                setActiveButton={setBtn}
                                                isActive={isBtnActive === button.title}
                                                setFilteredProducts={setFilter}
                                            />
                                        ))}
                                    </ul>
                                </div>
                                <div className="w-100 px-1 d-flex justify-content-center">
                                    <div className="bg-dark rounded d-flex px-3">
                                        <div>
                                            <span className="d-flex gap-1 mt-4 align-items-end">
                                                Total de Projetos:
                                                <b>{projects.length}</b>
                                            </span>
                                            <span className="text-secondary d-flex gap-1 flex-wrap">
                                                Produzido por
                                                <a href="personalInformation" className="nav-link">@arthurGS</a>
                                            </span>
                                        </div>
                                        <div className="graph-container">
                                            <Graph percentage={15} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </header>
            ) : (
                <aside className="w-25 border-end border-secondary border-3 vh-100 d-flex flex-column gap-5 bg-dark overflow-auto">
                    <header className="text-white d-flex w-100 gap-3 justify-content-center align-content-center px-5 pt-5">
                        <i className="bi bi-collection align-self-center"></i>
                        <AccountSection href="home" />
                    </header>
                    <ul className="d-flex flex-column list-unstyled">
                        {projects_filtered.map((button) => (
                            <FilterButtons
                                key={button.title}
                                title={button.title}
                                numberOfProjects={button.numberOfProjects}
                                projects={projects}
                                setActiveButton={setBtn}
                                all_title
                                isActive={isBtnActive === button.title}
                                setFilteredProducts={setFilter}
                            />
                        ))}
                    </ul>
                    <footer className="footer mt-auto d-flex justify-content-between px-4 pb-3 flex-wrap">
                        <div>
                            <span className="d-flex gap-1 mt-4 align-items-end">
                                Total de Projetos:
                                <b>{projects.length}</b>
                            </span>
                            <span className="text-secondary d-flex gap-1 flex-wrap">
                                Produzido por
                                <a href="personalInformation" className="nav-link">@arthurGS</a>
                            </span>
                        </div>
                        <div className="graph-container">
                            <Graph percentage={15} />
                        </div>
                    </footer>
                </aside>
            )}
        </>
    );
}