import { NavbarBrand as BootstrapNavbarBrand } from "react-bootstrap";

import imgSrc from "../../assets/img/logo-colored.png";

const NavbarBrand = () => {
    return (
        <BootstrapNavbarBrand className='mx-0' href='#home'>
            <img alt='' className='navbar-brand-image' src={imgSrc} />
        </BootstrapNavbarBrand>
    );
};

export default NavbarBrand;
