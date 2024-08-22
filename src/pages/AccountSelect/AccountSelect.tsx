import { Container } from "reactstrap";
import Profile_Arthur_Picture from '../../../public/AccountCircle.png'
import UserSelection from "../../components/AccountSelection/UserSelection";
import { motion } from 'framer-motion'
function SelectAccount() {

    return (
        <>
            <motion.div
                initial={{ filter: 'brightness(0)' }}
                animate={{ filter: 'brightness(1)' }}
                exit={{ scale: 2, filter: "brightness(0)" }}
                transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="vh-100 bg-black text-white">
                <div className="background-animation"></div>
                <Container
                    className="vh-100 d-flex justify-content-center 
                align-items-center flex-column gap-5">
                    <h3 className="text-center">
                        Bem vindo ao meu Portifólio Xbox <br />
                        Como quem deseja prosseguir?
                    </h3>
                    <section className="d-flex gap-5">
                        <UserSelection img_src={Profile_Arthur_Picture} />
                    </section>
                </Container>
            </motion.div>
        </>
    )
}

export default SelectAccount;