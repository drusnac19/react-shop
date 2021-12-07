import { useLocation, useParams, useHistory } from "react-router";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout";
import classes from "./Products.module.scss";
import ProductBanner from "../../components/Product/ProductBanner";
import ProductGridItem from "../../components/Product/ProductGridItem";

//dev
import fakerStatic from "faker";
import { useState, useEffect } from "react";

const Products = () => {
    const [categoryId, setCategoryId] = useState(1);
    const [taxonomies, setTaxnomy] = useState([]);
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(() => []);

    const setFilterHandler = (e) => {
        e.preventDefault();

        setFilter((state) => {
            const newState = [...state];

            newState.push(e.target.value);

            return newState;
        });
    };

    

    useEffect(() => {
        fetch(`https://api.staging.eyes-aid.com/api/taxonomy?category_id=${categoryId}`)
            .then((response) => response.json())
            .then((data) => setTaxnomy(data.data));
    }, []);

    useEffect(() => {
        fetch(`https://api.staging.eyes-aid.com/api/product-filter`)
            .then((response) => response.json())
            .then((data) => setProducts(data.data));
    }, []);

    return (
        <MainLayout className='product-container'>
            <Container>
                <ProductBanner />
                <Row>
                    <Col lg='3'>
                        <div className={classes.filters}>
                            {taxonomies &&
                                taxonomies.map((el) => (
                                    <div className={classes.filter} key={el.id}>
                                        <h3 className={classes.title}>
                                            {el.name}
                                        </h3>
                                        <div
                                            className={classes["filter-value"]}
                                        >
                                            {el.terms &&
                                                el.terms.map((term) => (
                                                    <Form.Check
                                                        key={
                                                            term.relationship_slug
                                                        }
                                                        type='checkbox'
                                                        label={term.term_name}
                                                        value={
                                                            term.relationship_slug
                                                        }
                                                        checked={filter.includes(
                                                            term.relationship_slug
                                                        )}
                                                        onChange={
                                                            setFilterHandler
                                                        }
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
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
