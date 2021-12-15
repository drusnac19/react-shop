import { Container, Row, Col } from "react-bootstrap";

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
                                <a href='#'>Vreau să vând pe EyesAid</a>
                            </li>
                            <li>
                                <a href='#'>Optici medicale</a>
                            </li>
                            <li>
                                <a href='#'>Livrare & Retur</a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm='12' lg='4'>
                        <h2 className='footer-title'>CLIENT / OPTICĂ</h2>
                        <ul className='footer-nav'>
                            <li>
                                <a href='#'>Contact</a>
                            </li>
                            <li>
                                <a href='#'>Despre noi</a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm='12' lg='4'>
                        <h2 className='footer-title'>INFO</h2>
                        <ul className='footer-nav'>
                            <li>
                                <a href='#'>Termeni și condiții</a>
                            </li>
                            <li>
                                <a href='#'>Politică de confidențialitate</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <div className='footer-logo'>
                        <div className='footer-logo-line'></div>
                        <img src={imgSrcLogoWhite} alt='' />
                        <div className='footer-logo-line'></div>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
