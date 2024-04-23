import { Container, Card, Row } from "reactstrap"
import CardImg from "./components/CardImg"
import Box from "./components/Box"
export default function MainContent() {
    // Creating the mainContent of the Portfolio, consting Projects and other stuff
    return (
        <>
            <section className="mainSection">
                <Container>
                    <Card>
                        <img src="" alt="" />
                    </Card>
                    <Row>
                        <CardImg/>
                        <CardImg/>
                        <CardImg/>
                        <CardImg/>
                        <CardImg/>
                    </Row>
                    <Row>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </Row>
                </Container>
            </section>
        </>
    )
}