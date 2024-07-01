import { Offcanvas, OffcanvasBody } from "reactstrap";
import { useState } from "react";

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const handleShow = () => setIsOpen(true);

    return (
        <>
            <button onClick={handleShow} className="tabSelector d-flex text-light"
                data-toggle="tooltip" data-placement="bottom">
                <i className={`bi bi-telephone-fill`}></i>
            </button>
            <Offcanvas isOpen={isOpen} toggle={handleClose} className="offCanvas bg-black text-light">
                <header className="d-flex justify-content-between w-100 px-4 pt-3 h4">
                    <i className="bi bi-xbox"></i>
                    <i className="bi bi-people-fill"></i>
                    <i className="bi bi-chat-left-fill"></i>
                    <i className="bi bi-controller"></i>
                    <i className="bi bi-upload"></i>
                    <i className="bi bi-person-circle"></i>
                </header>
                <hr />
                <OffcanvasBody className="px-4 pt-0 d-flex flex-column gap-3 ">
                    <header className="title">
                        <h3>Contatos:</h3>
                        <h5>Deseja enviar uma mensagem?</h5>
                    </header>
                    <form action="mailto:arthurgonsal@hotmail.com"
                        method="POST" encType="text/plain"
                        className="d-flex gap-3 flex-column">
                        <div className="name form-group d-flex flex-column gap-1 pt-2">
                            <label htmlFor="name" className="">
                                Nome:
                            </label>
                            <input type="text" id="name" name="name" maxLength={60}
                                className="input form-control"
                                placeholder="Insira seu nome..."
                                required />
                        </div>
                        <div className="email form-group d-flex flex-column gap-1">
                            <label htmlFor="email" className="">
                                E-mail:
                            </label>
                            <input type="email" id="email" name="e-mail"
                                className="input form-control"
                                placeholder="Insira seu e-mail..."
                                required />
                        </div>
                        <div className="message form-group d-flex flex-column gap-1">
                            <label htmlFor="message" className="">
                                Mensagem:
                            </label>
                            <textarea id="message"
                                placeholder="Escreva sua mensagem..."
                                className="input form-control" rows={9} name="message"
                                required />
                        </div>
                        <div className="btn-area d-flex gap-3">
                            <input type="submit" value="Enviar" className="btn btn-success w-50" />
                            <input type="reset" value="Limpar" className="btn btn-success w-50" />
                        </div>
                    </form>
                    <footer className="">
                    <hr />
                        <h5>Informações de Contato:</h5>
                        <h6>Números para Contato:</h6>
                        <ul>
                            <li>(16) 99242-8919</li>
                            <li>(11) 99735-4513</li>
                        </ul>
                        <h6 className="pt-3">Redes Sociais:</h6>
                        <div className="d-flex h1 gap-4 justify-content-between ">
                            <a href="https://www.linkedin.com/in/arthur-gonçalves-saldanha-375a70157" target="_blank">
                                <i className="bi bi-linkedin text-success"></i>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=11997354513" target="_blank">
                                <i className="bi bi-whatsapp text-success"></i>
                            </a>
                            <a href="https://github.com/arthurgs2006" target="_blank">
                                <i className="bi bi-github text-success"></i>
                            </a>
                            <a href="https://open.spotify.com/user/arthurgonsal123?si=bMwUo-3NQZ-XZFnVU10Agg" target="_blank">
                                <i className="bi bi-spotify text-success"></i>
                            </a>
                            <a href="mailto:arthurgonsal@hotmail.com" target="_blank">
                                <i className="bi bi-envelope-at-fill text-success"></i>
                            </a>
                        </div>
                    </footer>
                </OffcanvasBody>
            </Offcanvas>
        </>
    );
}

