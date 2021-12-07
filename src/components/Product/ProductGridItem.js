import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProductRating from "./ProductRating";

const ProductGridItem = (props) => {
    const product = props.product;

    return (
        <Card className='product' key={product.id}>
            <Card.Img variant='top' src={product.thumbnail} />
            <Card.Body>
                <Card.Title className='product-title'>
                    <Link to={`/product/${product.slug}`}>{product.name}</Link>
                </Card.Title>
                <div className='mb-3'>
                    <span className='product-stock'>
                        ({product.stock} in stoc)
                    </span>
                </div>
                <div>
                    <span className='product-orderby'>Livrat de:</span>
                    <span>{product.brand}</span>
                </div>
                <div>
                    <ProductRating score={product.rating_score} />
                </div>
                <div>
                    <span
                        className={
                            product.stock ? "text-success" : "text-danger"
                        }
                    >
                        •
                    </span>
                    <span className='text-muted'>
                        {product.stock ? "In stock" : "Fara stock"}
                    </span>
                </div>
                <div className='text-end'>
                    {product.discount && (
                        <span className='product-price-original'>
                            {product.price}
                        </span>
                    )}

                    <span className='product-price'>
                        {product.price_discounted} LEI
                    </span>
                </div>
                {product.discount && (
                    <span className='product-ribbon-discount'>
                        -{product.discount}%
                    </span>
                )}
                {Math.random(1,5) && (
                    <span className='product-ribbon-most-sold d-none'>
                        cel mai vandut
                    </span>
                )}
            </Card.Body>
        </Card>
    );
};

export default ProductGridItem;
