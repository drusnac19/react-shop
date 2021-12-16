import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setOrderBy } from "../../../store/product-filter/slice";

const FilterSortDropdown = () => {
    const dispatch = useDispatch();

    return (
        <Dropdown
            align='end'
            onSelect={(selected) => dispatch(setOrderBy(selected))}
        >
            <Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
                Popularitate
            </Dropdown.Toggle>
            <Dropdown.Menu className='mt-1'>
                <Dropdown.Item eventKey='id'>id</Dropdown.Item>
                <Dropdown.Item eventKey='price'>price</Dropdown.Item>
                <Dropdown.Item eventKey='name'>name</Dropdown.Item>
                <Dropdown.Item eventKey='popularity'>popularity</Dropdown.Item>
                <Dropdown.Item eventKey='stock'>stock</Dropdown.Item>
                <Dropdown.Item eventKey='discount'>discount</Dropdown.Item>
                <Dropdown.Item eventKey='price_discounted'>price</Dropdown.Item>
                <Dropdown.Item eventKey='product_rating'>rating</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default FilterSortDropdown;
