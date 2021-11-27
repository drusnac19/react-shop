import { Container, Navbar, Offcanvas } from "react-bootstrap";
import CanvasNavigation from "./CanvasNavigation";

import NavbarBrand from "./NavbarBrand";
import UserNavigation from "./UserNavigation";

const NavigationTop = () => {
    return (
        <Navbar bg='white' variant='dark' expand='md'>
            <Container className='px-0'>
                <Navbar.Toggle aria-controls='MainNavigation' />
                <NavbarBrand />
                <UserNavigation />
                <CanvasNavigation />
            </Container>
        </Navbar>
    );
};

export default NavigationTop;
