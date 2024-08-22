import AccountImg from '../../../public/AccountCircle.png'
import Filter from '../StylizedElements/filter'
import { Link } from 'react-router-dom'
type headerNavProps = {
    title: string,
    filter_section?: boolean
}

export default function ({ title, filter_section }: headerNavProps) {
    return (
        <>
            <header className="w-100 bg-xbox container-fluid p-2">
                <nav className='d-flex justify-content-between container'>
                    <section className="text-white small d-flex">
                        <Link to={"/home"} className="nav-link d-flex justify-content-center align-items-center gap-2">
                            <i className="bi bi-arrow-left"></i>
                            <h4 className="mb-0">{title}</h4>
                        </Link>
                    </section>
                    <section className=' rounded d-flex align-items-center'>
                        <Link className="d-flex gap-2 text-white link-offset-2 link-underline 
                        link-underline-opacity-0 align-items-center" to="/personalInformation" 
                        style={{ width: "auto" }}>
                            <section className="d-flex flex-column">
                                <span>
                                    Arthur
                                </span>
                                <span className='justify-content-end d-flex gap-1 small'>
                                    5000
                                    <i className="bi bi-info-circle-fill"></i>
                                </span>
                            </section>
                            <img src={AccountImg} alt="Foto de Perfil" className='img-fluid profile-img' />
                        </Link>
                    </section>
                </nav>
            </header>
            {filter_section ? <Filter /> : null}
        </>
    )
}