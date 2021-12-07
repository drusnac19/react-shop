import fakerStatic from "faker";

const ProductBanner = (props) => {
    const bannerUrl = fakerStatic.image.sports(900, 300);
    const bannerTitle = fakerStatic.commerce.productName();

    return (
        <div
            className='product-banner'
            style={{ backgroundImage: `url(${bannerUrl})` }}
        >
            <div>
                <div className='title-wrap'>
                    <h2 className='title'>{bannerTitle}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;
