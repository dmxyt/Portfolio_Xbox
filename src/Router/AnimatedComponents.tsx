import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/homepage/HomePage'
import MyProjectsPage from '../pages/myProjects/myProjects'
import Compentences from '../pages/competences/Compentences'
import PersonalInfo from '../pages/personalInfo/PersonalInfo'
import AcademicFormation from '../pages/academicFormation/AcademicFormation'
import ProfessionalExperiences from '../pages/professionalExperiences/professional_experiences'
import SelectAccount from '../pages/AccountSelect/AccountSelect'
import NotFound from '../pages/NotFound/NotFound'
import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<SelectAccount />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/competences" element={<Compentences />} />
                    <Route path="/personalInformation" element={<PersonalInfo />} />
                    <Route path="/academicformation" element={<AcademicFormation />} />
                    <Route path="/professional_experiences" element={<ProfessionalExperiences />} />
                    <Route path="/myProjects" element={<MyProjectsPage />} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </AnimatePresence>
        </>
    )
}
