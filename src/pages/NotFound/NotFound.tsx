import { Container } from "reactstrap";
const NotFound = () => {
    return (
        <div className="bg-black vh-100 align-items-center 
        justify-content-center d-flex ">
            <Container className="d-flex flex-wrap justify-content-center 
            flex-column align-items-center gap-5 text-white">
                <section className="d-flex justify-content-center align-items-center gap-3">
                    <div className="font-404">4</div>
                    <div className="rounded-circle d-flex justify-content-center animation-hover
                align-items-center red-ring-circle border-danger">
                        <a href="/" className="text-danger d-flex justify-content-center 
                    align-items-center rounded-circle">
                            <i className="bi bi-xbox h1 p-3"></i>
                        </a>
                    </div>
                    <div className="font-404">4</div>
                </section>
                <section className="d-flex justify-content-center align-items-center flex-column">
                    <h4>A página que procura não está disponível para acesso.</h4>
                    <b>Clique no botão Xbox para retornar ao menu principal.</b>
                </section>
            </Container>
        </div>
    );
}

export default NotFound;
