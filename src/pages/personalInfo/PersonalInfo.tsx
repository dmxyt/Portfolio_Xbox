import { Container, Col } from "reactstrap"
import CollapseSection from "../../components/personalInfo/sectionCollapsed";
import ProfileImg from '../../../public/AccountCircle.png'
import InfoCard from "../../components/personalInfo/InfoCard";

import JavascriptLogo from '../../../public/icons/logo-javascript.svg'
import TypescriptLogo from '../../../public/icons/typescript.svg'
import ReactLogo from '../../../public/icons/react-2.svg'
import PythonLogo from '../../../public/icons/python-4.svg'
import SassLogo from '../../../public/icons/sass-1.svg'
import BootstrapLogo from '../../../public/icons/bootstrap-5-1.svg'
export default function () {
    return (
        <>
            <header className="bg-primary bg-gradient 
                text-white pt-2 ">
                <Container fluid className="d-flex gap-3 align-items-center">
                    <a href="/">
                        <i className="bi bi-box-arrow-left h3 "></i>
                    </a>
                    <h1>Informações Pessoais</h1>
                </Container>
            </header>
            <main className="bg-primary bg-gradient pb-5 
            text-white d-flex flex-column wallpaperPersonalInfo">
                <Container fluid='sm' className="d-flex 
                justify-content-around align-items-center gap-5 ">
                    <section className="d-flex w-75" id="bio">
                        <div className="d-flex  flex-column">
                            <section className="upper-area d-flex gap-4 fs-4 ">
                                <span>LackedCarrot</span>
                                <span className="d-flex gap-2">
                                    <i className="bi bi-coin"></i>
                                    {"28042006"}
                                </span>
                            </section>
                            <section className="title display-2 pb-2">
                                <b>Arthur Saldanha</b>
                            </section>
                            <section className="down-area d-flex gap-5 flex-column">
                                <div className="status bold">
                                    Disponível para Contato
                                </div>
                                <section className="accountstats d-flex gap-5">
                                    <div className="followers d-flex flex-column">
                                        <b>Seguidores:</b>
                                        <span className="fs-3">
                                            {"83"}
                                        </span>
                                    </div>
                                    <div className="friends d-flex flex-column">
                                        <b >Amigos:</b>
                                        <span className="fs-3">
                                            {"23"}
                                        </span>
                                    </div>
                                </section>
                                <section className="bio">
                                    <h6 >
                                        Iniciante na carreira de desenvolvedor,
                                        tenho experiências de diversos cursos sobre a área de desenvolvimento e programação,
                                        com destaque em JavaScript e noções gerais em outros linguagens. Realizo alguns
                                        trabalhos com a plataforma Adobe, focando em edição de vídeo e produção de conteúdo.
                                    </h6>
                                </section>
                                <section className="skills d-flex gap-3">
                                    <img src={JavascriptLogo} className="img-fluid icon-size"
                                        alt="Icone de Javascript" />
                                    <img src={TypescriptLogo} className="img-fluid icon-size"
                                        alt="Icone de Typescript" />
                                    <img src={ReactLogo} className="img-fluid icon-size"
                                        alt="Icone de React" />
                                    <img src={PythonLogo} className="img-fluid icon-size"
                                        alt="Icone de Python" />
                                    <img src={SassLogo} className="img-fluid icon-size"
                                        alt="Icone de Sass" />
                                    <img src={BootstrapLogo} className="img-fluid icon-size"
                                        alt="Icone de Bootstrap" />
                                </section>
                            </section>
                        </div>
                        <div className="account-img d-flex justify-content-center align-items-center">
                            <img src={ProfileImg} alt="Foto de Perfil do Desenvolvedor"
                                className="img-fluid accountImg" />
                        </div>
                    </section>
                    {/* <section className="account col-6 col-sm-4 
                    d-flex justify-content-left align-items-center">
                    </section> */}
                    <section className="d-flex flex-column infoCardBox w-25">
                        <InfoCard titleElement="Nome Completo:"
                            subtitleElement="Arthur Gonçalves Saldanha" />
                        <InfoCard titleElement="Endereço:"
                            subtitleElement="São Paulo, SP (Brasil)" />
                        <InfoCard titleElement="Idade:"
                            subtitleElement="18 anos" />
                        <InfoCard titleElement="Nacionalidade:"
                            subtitleElement="Brasileiro" />
                        <InfoCard titleElement="Profissão:"
                            subtitleElement="Desenvolvedor" />
                    </section>
                </Container>
            </main>

        </>
    )
}