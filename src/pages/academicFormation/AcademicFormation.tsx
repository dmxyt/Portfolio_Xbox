
import BoxCollapsed from "../../components/academicFormation/BoxCollapsed"
import SenacLogo from '../../../public/senac-logo.png'
import IFlogo from '../../../public/if-logo.png'
import SenaiLogo from '../../../public/senai-logo.png'
import MicrosoftLogo from '../../../public/Microsoft_logo.png'
import OneBitCodeLogo from '../../../public/oneBitCode-logo.png'
import NavHeader from "../../components/NavHeader/NavHeader"
export default function () {
    return (
        <>
            <div className="wallpaperMyProjects bg-black text-white ">
                <NavHeader title="Formações Acadêmicas" filter_section />
                <main className="d-flex gap-3 defaultpadding justify-content-center align-content-center flex-wrap">
                    <BoxCollapsed img_src={SenacLogo} title={"Ensino Médio Técnico Integrado"}
                        subtitle="Diploma do Ensino Médio" href="#">
                        <ul>
                            <li>Certificado de Assistente e Suporte de Manutenção de Computadores</li>
                            <li>Certificado de Assistente de Operação de Redes e Computadores</li>
                            <li>Assistente de Desenvolvimento de Aplicativos Computacionais</li>
                        </ul>
                    </BoxCollapsed>
                    <BoxCollapsed img_src={IFlogo} title="Análise e Desenvolvimento de Sistemas"
                        subtitle="Graduação" href="#">
                        <ul>
                            <li>Desenvolvimento Web (Javascript, CSS e HTML)</li>
                            <li>Desenvolvimento com C</li>
                            <li>Cálculo</li>
                            <li>Lógica de Programação</li>
                        </ul>
                    </BoxCollapsed>
                    <BoxCollapsed img_src={SenaiLogo} title="Power BI"
                        subtitle="Curso Profissionalizante" href="#">
                        <ul>
                            <li>Criação de dashboards interativas e dinâmicas</li>
                            <li>Análise e Alteração de dados</li>
                            <li>Organização de dados e processos analíticos</li>
                        </ul>
                    </BoxCollapsed>
                    <BoxCollapsed img_src={MicrosoftLogo} title="Fundamentos do Azure"
                        subtitle="Curso Profissionalizante" href="#">
                        <ul>
                            <li>SC-900: Microsoft Certified: Security, Compliance and Identity Fundamentals</li>
                            <li>AZ-900: Microsoft Certified: Azure Data Fundamentals</li>
                        </ul>
                    </BoxCollapsed>
                    <BoxCollapsed img_src={OneBitCodeLogo} title="Javascript, frameworks e ferramentas"
                        subtitle="Curso Profissionalizante" href="#">
                        <ul>
                            <li>Certificado JavaScript</li>
                            <li>Certificado HTML5</li>
                            <li>Certificado CSS3</li>
                            <li>Certificado de Javascript (Lógica de Programação)</li>
                            <li>Certificado de database relacional (PostgreSQL)</li>
                            <li>Certificado de Typescript</li>
                            <li>Certificado de SASS</li>
                            <li>Certificado de NextJS</li>
                            <li>Certificado de Bootstrap</li>hddh
                            <li>Certificado de Fundamentos do React</li>
                        </ul>
                    </BoxCollapsed>
                </main>
            </div>
        </>
    )
} 