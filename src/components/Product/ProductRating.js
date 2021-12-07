//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const ProductRating = (props) => {
    const stars = Array(5).fill(null);

    return (
        <div className='product-rating'>
            {stars.map((element, index) => {
                return (
                    <FontAwesomeIcon
                        key={index}
                        className='star'
                        icon={index >= props.score ? faStarRegular : faStarSolid}
                    />
                );
            })}
        </div>
    );
};

export default ProductRating;
