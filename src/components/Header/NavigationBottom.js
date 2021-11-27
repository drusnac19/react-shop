import classes from "./NavigationBottom.module.scss";
import { Container, Navbar, Nav } from "react-bootstrap";

 

const NavigationBottom = () => {
    return (
        <Navbar
            bg='primary'
            variant='light'
            className={`${classes.container} d-none d-md-block`}
        >
            <Container>
                <Nav className='mx-auto'>
                    <Nav.Link className={classes["nav-link"]} href='#'>
                        Acasă
                    </Nav.Link>
                    <Nav.Link className={classes["nav-link"]} href='#'>
                        Ochelari de vedere
                    </Nav.Link>
                    <Nav.Link className={classes["nav-link"]} href='#'>
                        Ochelari de soare
                    </Nav.Link>
                    <Nav.Link className={classes["nav-link"]} href='#'>
                        Ochelari calculator
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBottom;
