
import { useState } from "react";
import Modal from "./Modal";

type UserSelection = {
    img_src: string
}

export default function ({ img_src }: UserSelection) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <a className="d-flex flex-column text-decoration-none
                        justify-content-center gap-5" onClick={toggle}
                        >
                <img src={img_src}
                    className="img-fluid profile-section"
                    alt="Profile Picture" />
                <b className="d-flex justify-content-center text-white ">
                    xXAlexarion
                </b>
            </a>
            <Modal isOpen={isOpen} toggle={toggle} />
        </>
    )
}
