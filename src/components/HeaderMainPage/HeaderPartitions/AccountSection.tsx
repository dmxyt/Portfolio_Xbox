import AccountImg from '../../../../public/AccountCircle.png';

type AccountSectionProps = {
    showScore?: boolean,
    smallSize?: boolean,
    imgSize?: string,
    href?: string
}

const AccountSection: React.FC<AccountSectionProps> = ({ showScore, smallSize, imgSize, href }) => {
    return (
        <>
            <a className={`account d-flex gap-2 text-white link-offset-2 link-underline 
            
            link-underline-opacity-0 ${smallSize ? 'w-25' : 'w-100'}`}
                href={href ? href : 'personalInformation'} style={{ width: 'auto' }}>
                {imgSize ? (
                    <img src={AccountImg} alt="Foto de Perfil"
                        className='img-fluid logo-profile-img'  />
                ) : (
                    <img src={AccountImg} alt="Foto de Perfil"
                        className='img-fluid align-self-center logo-profile-img'/>
                )}
                <section className="d-flex flex-column justify-content-center align-content-center">
                    <span className="d-flex align-items-center">
                        Arthur 
                    </span>
                    {showScore && (
                        <span className='accumulated-points d-flex gap-1 p align-items-center'>
                            <i className="bi bi-info-circle-fill"></i>
                            5000
                        </span>
                    )}
                </section>
            </a>
        </>
    );
}

export default AccountSection;
