//bootstrap
import { Nav, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const UserNavigation = () => {
    return (
        <Nav className='flex-row'>
            <Link className='nav-link' to='/user'>
                <FontAwesomeIcon className='text-danger mx-2' icon={faUser} />
                <span className='d-none d-md-inline'>Cont client </span>
            </Link>
            <Link className='nav-link' to='/cart'>
                <FontAwesomeIcon
                    className='text-danger mx-2'
                    icon={faShoppingCart}
                />
                <span className='d-none d-md-inline'>Coș </span>
            </Link>

            <Link className='nav-link d-none d-md-inline' to='/user/favorite'>
                <FontAwesomeIcon className='text-danger mx-2' icon={faHeart} />
                <span>Favorite </span>
            </Link>

            <NavDropdown
                className='d-none d-md-inline-block'
                title='Cont Optici'
            >
                <NavDropdown.Item href='#action/3.1'>
                    Înregistrare
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Logare</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default UserNavigation;
