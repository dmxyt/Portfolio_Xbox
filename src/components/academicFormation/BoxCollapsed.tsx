import { FunctionComponent, ReactNode, useState } from "react"
import { Collapse, CardBody, Card, Button } from "reactstrap"



export default function BoxCollapsed(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <button className="flex-column d-flex btn btn-primary" onClick={toggle} 
                style={{ 'width': '20vh' }} >
                <img src={props.img_src} alt={props.title} className="img-fluid rounded cardBox" />
                {/* <span>{description}</span> */}
            </button>
            <Collapse isOpen={isOpen} >
                    <Card className="bg-secondary">
                        <CardBody className="d-flex justify-content-center">
                            {props.children}
                        </CardBody>
                    </Card>
                </Collapse>
        </>
    )
}
