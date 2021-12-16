import { useSelector } from "react-redux";
import fakerStatic from "faker";
import { selectCurrentCategory } from "../../store/product-category/slice";

const ProductBanner = (props) => {
    let bannerUrl = fakerStatic.image.sports(900, 300);

    const category = useSelector(selectCurrentCategory);

    return (
        <div
            className='product-banner'
            style={{ backgroundImage: `url(${bannerUrl})` }}
        >
            <div>
                <div className='title-wrap'>
                    <h2 className='title'>{category.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;
