import { Container, Row, Col } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

const Product = () => {
    const urlParams = useParams();
    let location = useLocation();

    console.log(location);

    return (
        <MainLayout className='product-container'>
            <Container>
                <Row>
                    <Col>{urlParams.productSlug}</Col>
                </Row>
            </Container>
        </MainLayout>
    );
};

export default Product;
