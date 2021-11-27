import { Navbar, Nav, Offcanvas } from "react-bootstrap";

const CanvasNavigation = () => {
    return (
        <Navbar.Offcanvas
            variant='dark'
            id='MainNavigation'
            aria-labelledby='MainNavigationLabel'
            placement='start'
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id='MainNavigationLabel'>
                    Offcanvas
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className='mx-auto'>
                    <Nav.Link href='#'>Acasă</Nav.Link>
                    <Nav.Link href='#'>Ochelari de vedere</Nav.Link>
                    <Nav.Link href='#'>Ochelari de soare</Nav.Link>
                    <Nav.Link href='#'>Ochelari calculator</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    );
};

export default CanvasNavigation;
