import { ReactNode, useState } from "react"
import { Modal, ModalBody } from "reactstrap"
import CardImg from "../MainContent/components/CardImg";

type BoxCollapsedProps = {
    img_src: string,
    title: string,
    subtitle: string,
    href: string,
    children: ReactNode
}

export default function BoxCollapsed({ img_src, title, children, subtitle, href }: BoxCollapsedProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="d-flex">
                <a className="d-flex boxAcademicFormation p-1" onClick={toggle}>
                    <img src={img_src} alt={title} className="img-fluid rounded px-3" />
                </a>
                <Modal isOpen={isOpen} className="rounded modal-xl modal-dialog-centered" >
                    <button className="btn btn-success rounded-0 rounded-top" onClick={toggle}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                    <ModalBody className="bg-dark text-white d-flex gap-5 rounded-bottom">
                        <aside className="d-flex justify-content-center align-items-center w-25">
                            <CardImg title={title} description={subtitle}
                                img_src={img_src} key={title + '-card'} href={href}
                                id={Math.round(Math.random())} small_size={true} />
                        </aside>
                        <main className="d-flex justify-content-center flex-column text-white w-75">
                            <span className="title">
                                <h2>{title}</h2>
                                <h5>{subtitle}</h5>
                            </span>
                            {children}
                        </main>
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}
