import { Offcanvas, OffcanvasBody } from "reactstrap";
import Form from "./Form";
import { useState } from "react";
import ContactsFooter from "./ContactsFooter";
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
                    <Form />
                    <ContactsFooter />
                </OffcanvasBody>
            </Offcanvas>
        </>
    );
}

