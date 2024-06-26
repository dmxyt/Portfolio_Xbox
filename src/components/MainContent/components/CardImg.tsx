import { project } from '../../../database/projects'

interface CardImgProps extends project {
    small_size: boolean
}

export default function CardImg({img_src, title, id, description, href, small_size}: CardImgProps ) {
    console.log(title)
    return (
        <>
            <a className="flex-column d-flex" key={id} href={href} 
            target='_blank' style={ small_size? {'width': '20vh'} : {}}  >
                <img src={img_src} alt={title} 
                className={`img-fluid rounded cardBox`} />
                {/* <span>{description}</span> */}
            </a>
        </>
    )
}

