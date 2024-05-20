import { project } from '../../../database/projects'
export default function CardImg({img_src, title, id, description, href}: project) {
    return (
        <>
            <a className="flex-column d-flex" key={id} href={href} target='_blank'
            style={{'width': '20vh'}} >
                <img src={img_src} alt={title} className="img-fluid rounded cardBox" />
                {/* <span>{description}</span> */}
            </a>
        </>
    )
}

