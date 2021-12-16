import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryBySlug } from "../../store/product-category/slice";

import MainLayout from "../../layouts/MainLayout";
import ProductBanner from "../../components/Product/ProductBanner";
import ProductGridItem from "../../components/Product/ProductGridItem";
import FilterList from "../../components/Product/Filters/FilterList";
import FilterActiveTaxonomies from "../../components/Product/Filters/FilterActiveTaxonomies";
import FilterSortDropdown from "../../components/Product/Filters/FilterSortDropdown";
import FilterPagination from "../../components/Product/Filters/FilterPagination";

import { getProducts } from "../../store/product/slice";

const Products = () => {
    const products = useSelector((state) => state.product.products);
    const filters = useSelector((state) => state.productFilter);
    const category = useSelector((state) => state.productCategory);

    const urlParams = useParams();
    const dispatch = useDispatch();

    useEffect(
        () => dispatch(getCategoryBySlug(urlParams.categorySlug)),
        [urlParams.categorySlug, dispatch]
    );

    useEffect(
        () =>
            dispatch(
                getProducts({
                    // q: "",
                    // code: "",
                    "sort-by": filters.order.by,
                    "sort-type": filters.order.type,
                    // "price-min": "",
                    // "price-max": "",
                    // company_id: "",
                    category_id: category.current.id,
                    taxonomies: filters.filters,
                })
            ),
        [filters, dispatch]
    );

    return (
        <MainLayout className='product-container'>
            <Container>
                <ProductBanner />
                <Row>
                    <Col>
                        <FilterActiveTaxonomies />
                    </Col>
                </Row>
                <div className='filter-sort '>
                    <Row>
                        <Col
                            className='d-lg-flex align-items-center d-none'
                            lg='4'
                        >
                            <span className='me-2'>Sorteaza dupa:</span>
                            <FilterSortDropdown />
                        </Col>
                        <Col className='d-flex justify-content-end' lg='8'>
                            <FilterPagination />
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col lg='3'>
                        <FilterList />
                    </Col>
                    <Col lg='9'>
                        {!products.length && (
                            <p className='text-muted'>
                                There are no result found.
                            </p>
                        )}
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
