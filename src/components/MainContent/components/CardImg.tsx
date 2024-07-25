import { project } from '../../../database/projects'

interface CardImgProps extends project {
    small_size: boolean
}

export default function CardImg({img_src, title, id, href, small_size}: CardImgProps ) {
    return (
        <>
            <a className="flex-column d-flex card-img" key={id} href={href} 
            target='_blank' style={ small_size? {'maxWidth': '20vh'} : {}}  >
                <img src={img_src} alt={title} 
                className={`img-fluid rounded cardBox`} />
            </a>
        </>
    )
}

