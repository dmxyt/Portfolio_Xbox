import { FunctionComponent, ReactNode, useState } from "react"
import { Collapse, CardBody, Card, Button } from "reactstrap"

type BoxCollapsedProps = {
    img_src: string,
    title: string,
    subtitle: string,
    children: ReactNode
}

export default function BoxCollapsed({ img_src, title, children, subtitle }: BoxCollapsedProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="d-flex ">
                <a className="d-flex boxAcademicFormation" onClick={toggle}>
                    <img src={img_src} alt={title} className="img-fluid rounded " />
                </a>
                <Collapse isOpen={isOpen} className="w-75 ">
                    <Card className="bg-dark p-2">
                        <CardBody className="d-flex justify-content-center flex-column text-white">
                            <h1>{title}</h1>
                            <h6>{subtitle}</h6>
                            {children}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </>
    )
}
