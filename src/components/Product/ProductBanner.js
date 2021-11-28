import { Container, Row, Col } from "react-bootstrap";
import classes from "./ProductBanner.module.scss";

//dev
import fakerStatic from "faker";

const ProductBanner = (props) => {
    const bannerUrl = fakerStatic.image.sports(900, 300);
    const bannerTitle = fakerStatic.commerce.productName();

    return (
        <Container>
            <div
                className={classes.backdrop}
                style={{ backgroundImage: `url(${bannerUrl})` }}
            >
                <div>
                    <div className={classes["title-container"]}>
                        <h2 className={classes.title}>{bannerTitle}</h2>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProductBanner;
