import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/product-category/slice";

const NavigationBottom = () => {
    const categories = useSelector((state) => state.productCategory.categories);

    const dispatch = useDispatch();

    useEffect(() => dispatch(getCategories()), [dispatch]);

    return (
        <Navbar variant='light' className='main-navbar d-none d-md-block'>
            <Container>
                <Nav className='mx-auto'>
                    <Link className='nav-link' to='/'>
                        Acasă
                    </Link>
                    {categories
                        .filter((element) => element.parent === null)
                        .map((category) => (
                            <Link
                                key={category.slug}
                                className='nav-link'
                                to={`/products/${category.slug}`}
                            >
                                {category.name}
                            </Link>
                        ))}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBottom;
