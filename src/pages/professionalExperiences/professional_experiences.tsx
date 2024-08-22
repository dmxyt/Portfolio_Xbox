import { Container } from "reactstrap"
import BoxCollapsed from "../../components/academicFormation/BoxCollapsed"
import SupremaLogo from '../../../public/supremalogo.jpeg'
import LeiteCorteLogo from '../../../public/Leite&CorteLogo.png'
import ChaveiroBaraoLogo from '../../../public/ChaveiroCard.png'
import NavHeader from "../../components/NavHeader/NavHeader"
import {motion} from 'framer-motion'
export default function () {
    return (
        <>
            <motion.main
                initial={{ scale: 1.5, filter: "brightness(0)" }}
                animate={{ scale: 1, filter: "brightness(1)" }}
                exit={{ scale: 1.5, filter: "brightness(0)" }}
                transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="wallpaperMyProjects bg-black text-white">
                <NavHeader title="Experiências Profissionais" filter_section />
                <Container>
                    <div className="d-flex gap-3 defaultpadding
                        justify-content-center align-content-center flex-wrap">
                        <BoxCollapsed img_src={LeiteCorteLogo} title="Perfil Independente"
                            href="https://www.instagram.com/leiteecortee/" subtitle="Administrador de Redes Sociais">
                            <b className="small">Agosto de 2020 ~ Novembro de 2020</b>
                            <ul>
                                <li>Criação de conteúdo para redes sociais.</li>
                                <li>Gestão do perfil em canais comerciais.</li>
                                <li>Gerenciamento de protocolos de AdSense.</li>
                                <li>Atendimento ao público via canais de comunicação on-line.</li>
                            </ul>
                        </BoxCollapsed>
                        <BoxCollapsed img_src={ChaveiroBaraoLogo} title="Chaveiro Barão"
                            href="https://chaveiro-web.vercel.app/" subtitle="Auxiliar Geral">
                            <b className="small">Dezembro de 2020 ~ Janeiro de 2024</b>
                            <ul>
                                <li>Atendimento ao Cliente (Presencialmente e via redes sociais).</li>
                                <li>Prestação de serviços relacionados ao estabelecimento.</li>
                                <li>Organização e higienização do ambiente de trabalho.</li>
                                <li>Elaboração de conteúdo para redes sociais e elementos gráficos físicos.</li>
                                <li>Desenvolvimento de website.</li>
                                <li>Configuração e gestão de Google AdSense e protocolos do estabelecimento.</li>
                                <li>Elaboração e gestão de documentos.</li>
                                <li>Manutenção de equipamentos elétricos e ferramentas.</li>
                                <li>Suporte técnico para dispositivos utilizados no estabelecimento.</li>
                                <li>Documentação de planilhas e administração do banco de dados.</li>
                                <li>Criação de conteúdo e gestão dos canais de comunicação.</li>
                            </ul>
                        </BoxCollapsed>
                        <BoxCollapsed img_src={SupremaLogo} title="SUPREMA"
                            subtitle="Professor de Robótica e Informática"
                            href="https://www.instagram.com/suprema.educacional/">
                            <b className="small">Feveiro de 2024</b>
                            <ul>
                                <li>Elaboração de conteúdo e dinâmicas para lecionar estudantes infantojuvenis.</li>
                                <li>Organização de ferramentas a serem utilizadas durante as aulas.</li>
                            </ul>
                        </BoxCollapsed>
                    </div>
                </Container>
            </motion.main>
        </>
    )
}