import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Collapse } from "react-collapse";

import { setFilterHandler } from "../../../store/product-filter/slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const FilterSection = (props) => {
    const filters = useSelector((state) => state.productFilter.filters);

    const [collapse, setCollapse] = useState(false);

    const dispatch = useDispatch();

    const taxonomy = props.taxonomy;

    const onChangeHandler = (ev) => {
        const value = ev.target.value;
        
        dispatch(setFilterHandler(value));
    };

    return (
        <div className='filter'>
            <div className='section-wrap-title'>
                <h3 className='section-title'> {taxonomy.name} </h3>
                <Button
                    variant='link'
                    onClick={(e) => setCollapse((state) => !state)}
                >
                    <FontAwesomeIcon
                        className='text-dark'
                        icon={collapse ? faMinus : faPlus}
                    />
                </Button>
            </div>
            <Collapse isOpened={collapse}>
                <div className='filter-value'>
                    {taxonomy.terms.map((term) => (
                        <Form.Check
                            key={term.relationship_slug}
                            type='checkbox'
                            label={term.term_name}
                            value={term.relationship_slug}
                            checked={filters.includes(
                                term.relationship_slug
                            )}
                            onChange={onChangeHandler}
                        />
                    ))}
                </div>
            </Collapse>
        </div>
    );
};

export default FilterSection;
