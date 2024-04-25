import { project } from '../../../database/projects'
export default function CardImg({img_src, title, id, description}: project) {
    return (
        <>
            <div className=" cardBox flex-column d-flex" key={id}
            style={{'width': '20vh'}} >
                <img src={img_src} alt={title} className="img-fluid rounded" />
                {/* <span>{description}</span> */}
            </div>
        </>
    )
}

