import { useLocation, useParams, useHistory } from "react-router";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout";
import ProductGridItem from "../../components/Product/ProductGridItem";
import ProductBanner from "../../components/Product/ProductBanner";
import classes from "./Products.module.scss";

//dev
import fakerStatic from "faker";
import { useState, useEffect } from "react";

const Products = () => {
    const urlParams = useParams();
    const [taxonomies, setTaxnomy] = useState([]);
    const [categoryId, setCategoryId] = useState(1);

    const [filter, setFilter] = useState(() => []);

    const setFilterHandler = (e) => {
        e.preventDefault();

        setFilter((state) => {
            const newState = [...state];

            newState.push(e.target.value);

            return newState;
        });
    };

    console.log("all", filter);

    const products = Array(5)
        .fill(null)
        .map(() => {
            return {
                id: fakerStatic.datatype.uuid(),
                name: fakerStatic.commerce.productName(),
                brand: fakerStatic.commerce.product(),
                price: fakerStatic.commerce.price(),
                description: fakerStatic.commerce.productDescription(),
                ratingScore: fakerStatic.datatype.float(1, 5),
                inStock: fakerStatic.datatype.boolean(),
                stock: fakerStatic.datatype.number(1, 100),
                thumbnail: fakerStatic.image.imageUrl(),
            };
        });

    useEffect(() => {
        fetch(`http://eyesaid.local/api/taxonomy?category_id=${categoryId}`)
            .then((response) => response.json())
            .then((data) => setTaxnomy(data.data));
    }, []);

    return (
        <MainLayout>
            <ProductBanner />
            <Container>
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
                        <div className={classes.products}>
                            {products &&
                                products.map((product) => (
                                    <div
                                        className={classes["product-wrap"]}
                                        key={product.id}
                                    >
                                        <Card className={classes.product}>
                                            <Card.Img
                                                variant='top'
                                                src={product.thumbnail}
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    {product.name}
                                                </Card.Title>
                                                <Card.Subtitle>
                                                    {product.brand}
                                                </Card.Subtitle>
                                                <span
                                                    className={
                                                        classes["product-price"]
                                                    }
                                                >
                                                    {product.price}
                                                </span>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    );
};

export default Products;
