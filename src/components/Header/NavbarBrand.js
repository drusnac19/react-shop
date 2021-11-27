import { NavbarBrand as BootstrapNavbarBrand } from "react-bootstrap";
import classes from "./NavbarBrand.module.scss";

import imgSrc from "../../assets/img/logo-colored.png";

const NavbarBrand = () => {
    return (
        <BootstrapNavbarBrand className='mx-0' href='#home'>
            <img className={classes.image} src={imgSrc} />
        </BootstrapNavbarBrand>
    );
};

export default NavbarBrand;
