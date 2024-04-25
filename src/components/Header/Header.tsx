import { Container, Nav } from 'reactstrap'
const Header = () => {
    //Creating a Nav Header, based on Xbox UI Header Menu
    return (
        <>
            <header>
                <Container fluid>
                    <Nav className='row d-flex w-100 justify-content-between'>
                        <div className="account d-flex flex-column"
                            style={{ "width": "auto" }}>
                            {/* <img src={""} alt="Profile Image" /> */}
                            <span className="d-flex">
                                <i className="bi bi-person-circle"></i>
                                <b>Arthur Gonçalves Saldanha</b>
                            </span>
                            {/* //Profile Name */}
                            <span className='accumulated-points'>
                                <i className="bi bi-info-circle-fill"></i>
                                5000
                            </span>
                        </div>
                        <div className="hardware-info d-flex flex-row"
                            style={{ "width": "auto" }}>
                            <i className="bi bi-mic-mute-fill"></i>
                            <i className="bi bi-battery-half"></i>
                            {"10:32"}
                        </div>
                    </Nav>
                </Container>
            </header>
        </>
    )
}
export default Header;
