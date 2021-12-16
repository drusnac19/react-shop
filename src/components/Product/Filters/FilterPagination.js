import { Pagination } from "react-bootstrap";

const FilterPagination = () => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }

    return <Pagination className="mb-0" size='sm'>{items}</Pagination>;
};

export default FilterPagination;
