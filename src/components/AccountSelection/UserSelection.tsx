
import { useState } from "react";
import Modal from "./Modal";

type UserSelection = {
    img_src: string,
    isArthur?: boolean
}

export default function ({ img_src, isArthur }: UserSelection) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    if (isArthur) {
        return (
            <>
                <a className="d-flex flex-column text-decoration-none
                        justify-content-center gap-5" onClick={toggle}>
                    <img src={img_src}
                        className="img-fluid profile-section"
                        alt="Profile Picture" />
                    <b className="d-flex justify-content-center text-white ">
                        Arthur GS
                    </b>
                </a>
                <Modal isOpen={isOpen} toggle={toggle}/>
            </>
        )
    }
    return (
        <>
            <a className="d-flex flex-column text-decoration-none
                        justify-content-center gap-5" href="/home">
                <img src={img_src}
                    className="img-fluid profile-section"
                    alt="Profile Picture" />
                <b className="d-flex justify-content-center text-white">
                    Visitante
                </b>
            </a>
        </>
    )
}