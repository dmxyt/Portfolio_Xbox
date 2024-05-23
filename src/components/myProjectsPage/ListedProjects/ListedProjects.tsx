import { Row } from "reactstrap"
import { project } from '../../../database/projects'

export default function () {
    return (
        <>
            <Row className="align-items-end">
                <a className="flex-column d-flex" key={id} href={href} target='_blank'
                    style={{ 'width': '20vh' }} >
                    <img src={img_src} alt={title} className="img-fluid rounded cardBox" />
                    {/* <span>{description}</span> */}
                </a>
            </Row>
        </>
    )
}