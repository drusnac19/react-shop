import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryBySlug } from "../../store/product-category/slice";

import MainLayout from "../../layouts/MainLayout";
import ProductBanner from "../../components/Product/ProductBanner";
import ProductGridItem from "../../components/Product/ProductGridItem";
import FilterList from "../../components/Product/Filters/FilterList";

import { getProducts } from "../../store/product/slice";

const Products = () => {
    const products = useSelector((state) => state.product.products);
    const filters = useSelector((state) => state.productFilter);

    const urlParams = useParams();

    const dispatch = useDispatch();

    useEffect(
        () => dispatch(getCategoryBySlug(urlParams.categorySlug)),
        [urlParams.categorySlug]
    );

    useEffect(() => dispatch(getProducts(filters)), [filters]);

    return (
        <MainLayout className='product-container'>
            <Container>
                <ProductBanner />
                <Row>
                    <Col lg='3'>
                        <FilterList />
                    </Col>
                    <Col lg='9'>
                        <div className='product-grid'>
                            {products.map((product) => (
                                <ProductGridItem
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    );
};

export default Products;
