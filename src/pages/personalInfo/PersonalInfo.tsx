import { Container } from "reactstrap"
import CollapseSection from "../../components/personalInfo/sectionCollapsed";
export default function () {
    return (
        <>
            <div className="wallpaperMyProjects bg-dark text-white">
                <Container>
                    <div className="text-white pt-5 d-flex gap-3 align-items-center">
                        <a href="homepage">
                            <i className="bi bi-box-arrow-left h3 "></i>
                        </a>
                        <h1>Informações Pessoais</h1>
                    </div>
                    <div className="info-area pt-5 gap-2 d-flex flex-column">
                        <div className="name">
                            <CollapseSection titleElement="Nome Completo:" subtitleElement="Arthur Gonçalves Saldanha">
                                <h1 className="text-white">Arthur Gonçalves Saldanha</h1>
                            </CollapseSection>
                        </div>

                        <div className="location">
                            <CollapseSection titleElement="Endereço:" subtitleElement="São Paulo, SP (Brasil)">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6905.181246536562!2d-46.577546246629765!3d-23.536365065477394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c4388004cbd%3A0x7dbec9733dac4f22!2zRXN0YcOnw6NvIFRhdHVhcMOp!5e0!3m2!1spt-BR!2sbr!4v1716733165550!5m2!1spt-BR!2sbr" width="600"
                                    height="450" loading="lazy"
                                    className="rounded"
                                ></iframe>
                            </CollapseSection>
                        </div>
                        <div className="age">
                            <CollapseSection titleElement="Idade:" subtitleElement="18 anos">
                                <h1 className="text-white">Data de Nascimento: 28/04/2006</h1>
                            </CollapseSection>
                        </div>
                        <div className="nacionality">
                            <CollapseSection titleElement="Nacionalidade:" subtitleElement="Brasileiro">
                                <h1 className="text-white">Brasileiro, nascido em Ribeirão Preto-SP.</h1>
                            </CollapseSection>
                        </div>
                        <div className="civilstate">
                            <CollapseSection titleElement="Estado Civil:" subtitleElement="Solteiro">
                                <h1 className="text-white">Solteiro</h1>
                            </CollapseSection>
                        </div>
                    </div>

                </Container>
            </div>

        </>
    )
}