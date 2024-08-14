import { Modal, ModalBody } from "reactstrap"

type modalProps = {
    isOpen: boolean,
    toggle: () => void
}

export default function ({ isOpen, toggle }: modalProps) {
    return (
        <>
            <Modal isOpen={isOpen} className="rounded modal-xl modal-dialog-centered">
                <button className="btn btn-success rounded-0 rounded-top" onClick={toggle}>
                    <i className="bi bi-xbox"></i>
                </button>
                <ModalBody className="bg-black text-white d-flex flex-column rounded-bottom justify-content-center align-items-center position-relative">
                    <h3 className="text-center mb-4">
                        Formulário enviado com sucesso!
                    </h3>
                </ModalBody>
            </Modal>
        </>
    )
}