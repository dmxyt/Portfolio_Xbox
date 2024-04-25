import { project } from '../../../database/projects'
export default function CardImg({img_src, title, id, description}: project) {
    return (
        <>
            <div className="Card cardBox" key={id}>
                <img src={img_src} alt={title} className="img-fluid w-25" />
                <span>{description}</span>
            </div>
        </>
    )
}

