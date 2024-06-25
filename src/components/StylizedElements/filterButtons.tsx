import { project, projects } from "../../database/projects";
import React from "react";

type filterBtnProps = {
    title: string,
    numberOfProjects: number,
    projects: project[],  // Tipagem correta para projects
    setFilteredProducts: React.Dispatch<React.SetStateAction<project[]>>
}

const FilterButtons: React.FC<filterBtnProps> = ({ title, numberOfProjects, projects, setFilteredProducts }) => {
    const filterProducts = (language: string | null) => {
        if (language === null || language === 'Todos os Projetos') {
            setFilteredProducts(projects);
        } else {
            setFilteredProducts(projects.filter(product => product.languages?.includes(language)));
        }
    }
    return (
        <li className="d-flex justify-content-between">
            <button onClick={() => filterProducts(title)}
                className="btn-link btn w-100 d-flex justify-content-between text-white">
                <span>{title}</span>
                <span>{numberOfProjects}</span>
            </button>
        </li>
    );
};

export default FilterButtons;