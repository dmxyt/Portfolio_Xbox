import React from "react";
import { project } from "../../database/projects";

type FilterBtnProps = {
    title: string,
    numberOfProjects: number,
    projects: project[],
    setFilteredProducts: React.Dispatch<React.SetStateAction<project[]>>,
    isActive: boolean,
    setActiveButton: React.Dispatch<React.SetStateAction<string | null>>
}

const FilterButtons: React.FC<FilterBtnProps> = ({ title, numberOfProjects, projects, setFilteredProducts, isActive, setActiveButton }) => {
    const filterProducts = (language: string | null) => {
        if (language === null || language === 'Todos os Projetos') {
            setFilteredProducts(projects);
        } else {
            setFilteredProducts(projects.filter(product => product.languages?.includes(language)));
        }
    }

    return (
        <li className="d-flex">
            <button
                onClick={() => {
                    filterProducts(title);
                    setActiveButton(title);
                }}
                className={`w-100 d-flex justify-content-around text-white p-2
                border-0 
                ${isActive ? 'active-btn' : 'bg-transparent'}`}>
                <span className="w-50 d-flex">
                    {title}
                </span>
                <span>
                    {numberOfProjects}
                </span>
            </button>
            <div className={`${isActive? 'bg-success text-success': 'bg-transparent text-dark'}`}>.</div>
            
                
        </li>
    );
};

export default FilterButtons;
