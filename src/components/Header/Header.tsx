import { Container, Nav } from 'reactstrap'
const Header = () => {
    //Creating a Nav Header, based on Xbox UI Header Menu
    return (
        <>
            <header>
                <Container> 
                    <Nav className='d-flex'>
                        <div className="account d-flex flex-column">
                            {/* <img src={""} alt="Profile Image" /> */}
                            <i className="bi bi-person-circle"></i>
                            <b>{""}</b> {/* //Profile Name */}
                            <span className='accumulated-points'>
                                <i className="bi bi-info-circle-fill"></i>
                                5000
                            </span>
                        </div>
                        <div className="hardware-info d-flex">
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