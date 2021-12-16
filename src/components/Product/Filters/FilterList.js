import { useState, useEffect } from "react";
import { Collapse, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import FilterSection from "./FilterSection";
import FilterSortDropdown from "./FilterSortDropdown";

import { getTaxonomies } from "../../../store/product-filter/slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const FilterList = () => {
    const [showFilters, setShowFilters] = useState(window.innerWidth >= 998);
    const taxonomies = useSelector((state) => state.productFilter.taxonomies);
    const category = useSelector((state) => state.productCategory.current);

    const dispatch = useDispatch();

    useEffect(
        () => dispatch(getTaxonomies(category.id)),
        [category.id, dispatch]
    );

    return (
        <>
            <div className='filter-nav d-lg-none d-flex justify-content-between '>
                <Button
                    className='d-block px-4'
                    variant='primary'
                    onClick={() => setShowFilters((state) => !state)}
                >
                    <FontAwesomeIcon className='me-2' icon={faFilter} />
                    Filtre
                </Button>
                <div className='mx-2'></div>
                <FilterSortDropdown />
            </div>
            <Collapse in={showFilters}>
                <div className='filters'>
                    {taxonomies.map((taxonomy) => (
                        <FilterSection taxonomy={taxonomy} key={taxonomy.id} />
                    ))}
                </div>
            </Collapse>
        </>
    );
};

export default FilterList;
