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
                {/* <OffcanvasHeader toggle={handleClose} > */}
                {/* toggle={handleClose} */}
                <header className="d-flex justify-content-between w-100 px-4 pt-3 h4">
                    <i className="bi bi-xbox"></i>
                    <i className="bi bi-people-fill"></i>
                    <i className="bi bi-chat-left-fill"></i>
                    <i className="bi bi-controller"></i>
                    <i className="bi bi-upload"></i>
                    <i className="bi bi-person-circle"></i>
                </header>
                {/* </OffcanvasHeader> */}
                <OffcanvasBody className="px-4 pt-4">
                        <h3>Contatos:</h3>
                        
                </OffcanvasBody>
            </Offcanvas>
        </>
    );
}

