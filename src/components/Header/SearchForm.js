import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm = () => {
    return (
        <Form>
            <Form.Group>
                <InputGroup>
                    <FormControl type='text' />
                    <Button variant='outline-secondary' id='button-addon2'>
                    </Button>
                </InputGroup>
            </Form.Group>
        </Form>
    );
};

export default SearchForm;
