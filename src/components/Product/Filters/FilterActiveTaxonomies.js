import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { setFilterHandler } from "../../../store/product-filter/slice";

const FilterActiveTaxonomies = () => {
    const taxonomies = useSelector((state) => state.productFilter.taxonomies);

    const dispatch = useDispatch();

    const activeTaxonomies = useSelector(
        (state) => state.productFilter.filters
    );

    let activeFiltersUI = [];

    taxonomies.forEach((el) => {
        el.terms.forEach((term) => {
            if (activeTaxonomies.includes(term.relationship_slug)) {

                const newTerm = {...term};

                newTerm.taxonomy_name = el.name;

                activeFiltersUI.push(newTerm);
            }
        });
    });

    if (!activeFiltersUI.length) {
        return <></>;
    }

    return (
        <div className='filter-active'>
            <div>
                <span>Active filters: </span>
            </div>
            {activeFiltersUI.map((term) => (
                <Button
                    key={term.relationship_slug}
                    size='sm'
                    variant='light'
                    className='border me-2 mb-2'
                    onClick={() =>
                        dispatch(setFilterHandler(term.relationship_slug))
                    }
                >
                    <b>{term.taxonomy_name}: </b>
                    <span>{term.term_name}</span>

                    <FontAwesomeIcon
                        className='ms-1 text-muted'
                        icon={faXmark}
                    />
                </Button>
            ))}
        </div>
    );
};

export default FilterActiveTaxonomies;
