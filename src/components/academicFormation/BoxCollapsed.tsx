import { FunctionComponent, ReactNode, useState } from "react"
import { Collapse, CardBody, Card, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

type BoxCollapsedProps = {
    img_src: string,
    title: string,
    subtitle: string,
    children: ReactNode
}

export default function BoxCollapsed({ img_src, title, children, subtitle }: BoxCollapsedProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="d-flex">
                <a className="d-flex boxAcademicFormation" onClick={toggle}>
                    <img src={img_src} alt={title} className="img-fluid rounded" />
                </a>
                <Modal isOpen={isOpen} className="rounded">
                    <ModalBody className="bg-dark rounded text-white">
                        <header className="d-flex justify-content-between align-content-center">
                            <span className="title">
                                <h2>{title}</h2>
                            </span>
                            <button onClick={toggle} className="btn btn-transparent">
                                <i className="bi bi-x-lg text-white"></i>
                            </button>
                        </header>
                        <main className="d-flex justify-content-center flex-column text-white">
                            <h6>{subtitle}</h6>
                            {children}
                        </main>
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}
