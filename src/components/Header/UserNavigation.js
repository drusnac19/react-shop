//bootstrap
import { Nav, NavDropdown } from "react-bootstrap";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const UserNavigation = () => {
    return (
        <Nav className='flex-row'>
            <Nav.Link href='#'>
                <FontAwesomeIcon className='text-danger mx-2' icon={faUser} />
                <span className='d-none d-md-inline'>Cont client </span>
            </Nav.Link>
            <Nav.Link href='#link'>
                <FontAwesomeIcon
                    className='text-danger mx-2'
                    icon={faShoppingCart}
                />
                <span className='d-none d-md-inline'>Coș </span>
            </Nav.Link>

            <Nav.Link className='d-none d-md-inline' href='#link'>
                <FontAwesomeIcon className='text-danger mx-2' icon={faHeart} />
                <span>Favorite </span>
            </Nav.Link>

            <NavDropdown
                className='d-none d-md-inline-block'
                title='Cont Optici'
            >
                <NavDropdown.Item href='#action/3.1'>
                    Înregistrare
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Logare</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className='d-none d-md-inline-block' title='Limba'>
                <NavDropdown.Item href='#action/3.1'>Engleză</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Română</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default UserNavigation;
