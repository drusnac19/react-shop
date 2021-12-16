import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import imgSrcLogoWhite from "../../assets/img/logo-white.png";

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col sm='12' lg='4'>
                        <h2 className='footer-title'>CLIENT / OPTICĂ</h2>
                        <ul className='footer-nav'>
                            <li>
                                <Link to={"/page/vreau-sa-vand-pe-eyesaid"}>
                                    Vreu să vând pe EyesAid
                                </Link>
                            </li>
                            <li>
                                <Link to={"/page/optici-medicale"}>
                                    Optici medicale
                                </Link>
                            </li>
                            <li>
                                <Link to={"/page/livrare-retur"}>
                                    Livrare & Retur
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm='12' lg='4'>
                        <h2 className='footer-title'>CLIENT / OPTICĂ</h2>
                        <ul className='footer-nav'>
                            <li>
                                <Link to={"/page/contact"}>Contact</Link>
                            </li>
                            <li>
                                <Link to={"/page/despre-noi"}>Despre noi</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm='12' lg='4'>
                        <h2 className='footer-title'>INFO</h2>
                        <ul className='footer-nav'>
                            <li>
                                <Link to={"/page/termeni-si-conditii"}>
                                    Termeni și condiții
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/page/politica-de-confidentialitate"}
                                >
                                    Politică de confidențialitate
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <div className='footer-logo'>
                        <div className='footer-logo-line'></div>
                        <img src={imgSrcLogoWhite} alt='Website logo' />
                        <div className='footer-logo-line'></div>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
