import { useState } from "react";
import emailjs from "@emailjs/browser"
import ModalContacts from "./ModalContacts";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (name === '' || email === "" || message === "") {
            alert("Insira as informações corretamente.");
            return;
        }
        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        };

        emailjs.send('service_wle88ld', 'template_ng95gc4', templateParams, 'h-kNumEAY8b_nZhOU')
            .then((response) => {
                console.log("E-mail Enviado", response.status, response.text);
                setName('');
                setEmail('');
                setMessage('');
                setIsOpen(true); 
            }, (err) => {
                alert("Erro no serviço! Por favor, utilize os meios de contato abaixo.");
                console.log("Erro: ", err);
            });
    }

    return (
        <>
            <form onSubmit={sendEmail}
                method="POST" encType="text/plain"
                className="d-flex gap-3 flex-column">
                <div className="name form-group d-flex flex-column gap-1 pt-2">
                    <label htmlFor="name" className="">
                        Nome:
                    </label>
                    <input type="text" id="name" name="name" maxLength={60}
                        className="input form-control"
                        placeholder="Insira seu nome..."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required />
                </div>
                <div className="email form-group d-flex flex-column gap-1">
                    <label htmlFor="email" className="">
                        E-mail:
                    </label>
                    <input type="email" id="email" name="e-mail"
                        className="input form-control"
                        placeholder="Insira seu e-mail..."
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required />
                </div>
                <div className="message form-group d-flex flex-column gap-1">
                    <label htmlFor="message" className="">
                        Mensagem:
                    </label>
                    <textarea id="message"
                        placeholder="Escreva sua mensagem..."
                        className="input form-control" rows={6} name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        required />
                </div>
                <div className="btn-area d-flex gap-3">
                    <input type="submit" value="Enviar" className="btn btn-success w-50" />
                    <input type="reset" value="Limpar" className="btn btn-success w-50" onClick={() => {
                        setEmail('');
                        setMessage('');
                        setName('');
                    }} />
                </div>
            </form>
            {isOpen && (
                <ModalContacts isOpen={isOpen} toggle={toggle}/>
            )}
        </>
    );
}