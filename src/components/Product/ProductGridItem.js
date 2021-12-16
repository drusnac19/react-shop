import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProductRating from "./ProductRating";

const ProductGridItem = (props) => {
    const {
        id,
        thumbnail,
        name,
        slug,
        stock,
        brand,
        rating_score,
        price,
        price_discounted,
        discount,
    } = props.product;

    return (
        <Card className='product' key={id}>
            <Card.Img variant='top' src={thumbnail} />
            <Card.Body>
                <div className='product-title'>
                    <Link to={`/product/${slug}`}>{name}</Link>
                </div>
                <div className='mb-3'>
                    <span className='product-stock'>({stock} in stoc)</span>
                </div>
                <div>
                    <span className='product-orderby'>Livrat de:</span>
                    <span>{brand}</span>
                </div>
                <div>
                    <ProductRating score={rating_score} />
                </div>
                <div>
                    <span className={stock ? "text-success" : "text-danger"}>
                        •
                    </span>
                    <span className='text-muted'>
                        {stock ? "In stock" : "Fara stock"}
                    </span>
                </div>
                <div className='text-end'>
                    {discount && (
                        <span className='product-price-original'>{price}</span>
                    )}
                    <span className='product-price'>
                        {price_discounted} LEI
                    </span>
                </div>
                {discount && (
                    <span className='product-ribbon-discount'>
                        -{discount}%
                    </span>
                )}
                <span className='product-ribbon-most-sold d-none'>
                    cel mai vandut
                </span>
            </Card.Body>
        </Card>
    );
};

export default ProductGridItem;
