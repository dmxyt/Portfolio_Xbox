import { Offcanvas, OffcanvasBody, Button, OffcanvasHeader } from "reactstrap"
import { useState } from "react";


export default function Contact() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <a className="btn btn-primary d-lg-none" onClick={handleShow}>
                Launch
            </a>
            <aside className="aside" >
                <Offcanvas
                    show={show} onHide={handleClose}
                    tabIndex={-1}
                    id="contacts"
                    aria-labelledby="offcanvasExampleLabel"
                >
                    <OffcanvasHeader closeButton>
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                            oiee
                        </h5>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <h1>oie</h1>
                    </OffcanvasBody>
                </Offcanvas>
            </aside>
        </>
    )
}
