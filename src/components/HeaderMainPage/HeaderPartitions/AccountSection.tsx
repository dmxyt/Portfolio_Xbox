import AccountImg from '../../../../public/AccountCircle.png'


export default function () {
    return (
        <>
            <a className="account d-flex gap-2 w-25 text-white link-offset-2 link-underline 
            link-underline-opacity-0 " 
            href="personalInformation" style={{ "width": "auto" }}>
                <section>
                    <img src={AccountImg} alt="Foto de Perfil" 
                    className='img-fluid profileImg' />
                    {/* <i className="bi bi-person-circle"></i> */}
                </section>
                <section className="d-flex flex-column">
                    <span className="d-flex">
                        Arthur Gonçalves Saldanha
                    </span>
                    {/* //Profile Name */}
                    <span className='accumulated-points d-flex gap-1 p'>
                        <i className="bi bi-info-circle-fill"></i>
                        5000
                    </span>
                </section>
            </a>
        </>
    )
}