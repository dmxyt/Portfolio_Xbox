import XboxOne_A from '../../../public/xbox_Icons/XboxOne_A.png'
import XboxOne_B from '../../../public/xbox_Icons/XboxOne_B.png'

export default function () {
    return (
        <>
            <div className='z-n1 text-white fixed-bottom btn-xbox
            d-flex justify-content-end align-items-center p-5 w-100 gap-5 d-none d-xl-flex'>
                <section className="d-flex align-items-center">
                    <img src={XboxOne_A} alt="Ícone do Botão A do Xbox" style={{ width: '5vh' }} />
                    <b className='ms-2'>Selecionar</b>
                </section>
                <section className="d-flex align-items-center">
                    <img src={XboxOne_B} alt="Ícone do Botão B do Xbox" style={{ width: '5vh' }} />
                    <b className='ms-2'>Voltar</b>
                </section>
            </div>
        </>
    )
}