import AccountImg from '../../../public/AccountCircle.png'

type headerNavProps = {
    title: string
}

export default function ({ title }: headerNavProps) {
    return (
        <>
            <header className="w-100 bg-primary 
            container-fluid p-2">
                <nav className='d-flex justify-content-between container'>
                    <section className="text-white small d-flex">
                        <a href="/" className="nav-link d-flex justify-content-center 
                        align-items-center gap-2">
                            <i className="bi bi-arrow-left"></i>
                            <h4 className="mb-0">{title}</h4>
                        </a>
                    </section>
                    <section>
                        <a className="d-flex gap-2 text-white link-offset-2 link-underline 
            link-underline-opacity-0" href="personalInformation" style={{ "width": "auto" }}>
                            <section className="d-flex flex-column">
                                <span>
                                    Arthur Gonçalves Saldanha
                                </span>
                                <span className='justify-content-end d-flex gap-1 small'>
                                    5000
                                    <i className="bi bi-info-circle-fill"></i>
                                </span>
                            </section>
                            <img src={AccountImg} alt="Foto de Perfil"
                                className='img-fluid profileImg' />
                        </a>
                    </section>
                </nav>
            </header>
            <section className="filter d-flex gap-2 align-content-center container pt-2">
                <span className="d-flex gap-1 p-1 small">
                    <i className="bi bi-funnel-fill "></i>
                    Filtro:
                </span>
                <b className="border p-1 rounded small">Do mais recente para o mais antigo</b>
            </section>
        </>
    )
}