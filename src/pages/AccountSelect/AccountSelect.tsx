import { Container } from "reactstrap";
import Profile_Arthur_Picture from '../../../public/AccountCircle.png'
import UserSelection from "../../components/AccountSelection/UserSelection";
import { motion } from 'framer-motion'
function SelectAccount() {

    return (
        <>
            <motion.div
                initial={{ filter:'brightness(0)' }}
                animate={{filter:'brightness(1)' }}
                exit={{ filter:'brightness(2)' }}
                className="vh-100 bg-black text-white">
                    {/* <AnimationBg /> */}
                <Container
                    className="vh-100 d-flex justify-content-center 
                align-items-center flex-column gap-5">
                    <h3 className="text-center">
                        Bem vindo ao Portifólio Xbox Dashboard <br />
                        Como quem deseja prosseguir?
                    </h3>
                    <section className="d-flex gap-5">
                        <UserSelection img_src={Profile_Arthur_Picture}  />
                    </section>
                </Container>
            </motion.div>
        </>
    )
}

export default SelectAccount;