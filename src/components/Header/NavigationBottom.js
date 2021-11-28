import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import classes from "./NavigationBottom.module.scss";

const NavigationBottom = () => {
    return (
        <Navbar
            bg='primary'
            variant='light'
            className={`${classes.container} d-none d-md-block`}
        >
            <Container>
                <Nav className='mx-auto'>
                    <Link className='nav-link' to='/'>
                        Acasă
                    </Link>

                    <Link
                        className='nav-link'
                        to='/products/ochelari-de-vedere'
                    >
                        Ochelari de vedere
                    </Link>
                    <Link className='nav-link' to='/products/ochelari-de-soare'>
                        Ochelari de soare
                    </Link>
                    <Link
                        className='nav-link'
                        to='/products/ochelari-calculator'
                    >
                        Ochelari calculator
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBottom;
