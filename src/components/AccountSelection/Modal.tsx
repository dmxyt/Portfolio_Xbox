import { Modal, ModalBody } from "reactstrap"

type modalProps = {
    isOpen: boolean,
    toggle: () => void
}

export default function ({ isOpen, toggle }: modalProps) {
    return (
        <>
            <Modal isOpen={isOpen} className="rounded modal-xl modal-dialog-centered" >
                <button className="btn btn-dark rounded-0 rounded-top" onClick={toggle}>
                    <i className="bi bi-person-fill-lock"></i>
                </button>
                <ModalBody className="bg-dark text-white d-flex gap-5 rounded-bottom">
                    <h3 >
                        Você não tem acesso a este usuário!
                        Acesse o portifólio via o usuário Visitante.
                    </h3>
                </ModalBody>
            </Modal>
        </>
    )
}