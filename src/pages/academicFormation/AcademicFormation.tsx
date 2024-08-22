
import BoxCollapsed from "../../components/academicFormation/BoxCollapsed"
import SenacLogo from '../../../public/senac-logo.png'
import IFlogo from '../../../public/if_logo.png'
import SenaiLogo from '../../../public/senai-logo.png'
import MicrosoftLogo from '../../../public/Microsoft_logo.png'
import OneBitCodeLogo from '../../../public/oneBitCode-logo.png'
import NavHeader from "../../components/NavHeader/NavHeader"
import { motion } from 'framer-motion'
export default function () {
    return (
        <>
            <motion.div
                initial={{ scale: 1.5, filter: "brightness(0)" }}
                animate={{ scale: 1, filter: "brightness(1)" }}
                exit={{ scale: 1.5, filter: "brightness(0)" }}
                transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="wallpaperMyProjects bg-black text-white ">
                <NavHeader title="Formações Acadêmicas" filter_section />
                <main className="d-flex gap-3 defaultpadding justify-content-center align-content-center flex-wrap">
                    <BoxCollapsed img_src={SenacLogo} title={"Ensino Médio Técnico Integrado"}
                        subtitle="Diploma do Ensino Médio" href="https://www.sp.senac.br/senac-ribeirao-preto">
                        <ul>
                            <li>Certificado de Assistente e Suporte de Manutenção de Computadores</li>
                            <li>Certificado de Assistente de Operação de Redes e Computadores</li>
                            <li>Assistente de Desenvolvimento de Aplicativos Computacionais</li>
                        </ul>
                    </BoxCollapsed>
                    <BoxCollapsed img_src={IFlogo} title="Análise e Desenvolvimento de Sistemas"
                        subtitle="Graduação" href="http://gru.ifsp.edu.br/">
                        <ul>
                            <li>Desenvolvimento Web (Javascript, CSS e HTML)</li>
                            <li>Desenvolvimento com C</li>
                            <li>Cálculo</li>
                            <li>Lógica de Programação</li>
                        </ul>
                    </BoxCollapsed>
                    <BoxCollapsed img_src={SenaiLogo} title="Power BI"
                        subtitle="Curso Profissionalizante" href="https://sp.senai.br/unidade/ribeiraopreto/">
                        <ul>
                            <li>Criação de dashboards interativas e dinâmicas</li>
                            <li>Análise e Alteração de dados</li>
                            <li>Organização de dados e processos analíticos</li>
                        </ul>
                    </BoxCollapsed>
                    <BoxCollapsed img_src={MicrosoftLogo} title="Fundamentos do Azure"
                        subtitle="Curso Profissionalizante" href="https://www.microsoft.com/pt-br">
                        <ul>
                            <li>SC-900: Microsoft Certified: Security, Compliance and Identity Fundamentals</li>
                            <li>AZ-900: Microsoft Certified: Azure Data Fundamentals</li>
                        </ul>
                    </BoxCollapsed>
                    <BoxCollapsed img_src={OneBitCodeLogo} title="Javascript, frameworks e ferramentas"
                        subtitle="Curso Profissionalizante" href="https://onebitcode.com/javascript?utm_campaign=OBC-C+|+E0-UNC+|+CAR+|+SCH+|+T1S-BRD+|+CPA+|+BR+|+2022-11-10+|+FULL+STACK+|+Branding&utm_content=one%20bit%20code&utm_term=00+|+SCH+|+Keywords+|++Branding&&utm_medium=paid-traffic&utm_source=g&ltk_gcm=20978031545&ltk_gag=161130217591&ltk_gac=689155321426&ltk_gne=g&gad_source=1&gclid=CjwKCAjw_Na1BhAlEiwAM-dm7GUoE_ThMJRwovTrWBY1XKXeLyryD0BZ1wGSeNRPP7G8F60kaDV__RoC8I4QAvD_BwE">
                        <ul>
                            <li>Certificado JavaScript</li>
                            <li>Certificado HTML5</li>
                            <li>Certificado CSS3</li>
                            <li>Certificado de Javascript (Lógica de Programação)</li>
                            <li>Certificado de database relacional (PostgreSQL)</li>
                            <li>Certificado de Typescript</li>
                            <li>Certificado de SASS</li>
                            <li>Certificado de NextJS</li>
                            <li>Certificado de Bootstrap</li>
                            <li>Certificado de Fundamentos do React</li>
                        </ul>
                    </BoxCollapsed>
                </main>
            </motion.div>
        </>
    )
} 