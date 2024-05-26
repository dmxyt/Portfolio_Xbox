import { Collapse, CardBody, Card, Button } from "reactstrap"
import { FunctionComponent, ReactNode, useState } from "react"

type sectionCollapseInfo = {
    titleElement: string, 
    subtitleElement: string,
    children: ReactNode
    
}

const CollapseSection: FunctionComponent<sectionCollapseInfo> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="location">
                <section className="w-100 d-flex 
                        justify-content-between align-items-center
                        bg-secondary p-4 rounded">
                    <h6>
                        {props.titleElement}
                    </h6>
                    <span className="d-flex gap-3 align-items-center">
                        <h6>
                            {props.subtitleElement}
                        </h6>
                        <Button onClick={toggle}>
                            <i className="bi bi-caret-down-fill"></i>
                        </Button>
                    </span>
                </section>
                <Collapse isOpen={isOpen} >
                    <Card className="bg-secondary">
                        <CardBody className="d-flex justify-content-center">
                            {props.children}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </>
    )
}

export default CollapseSection;