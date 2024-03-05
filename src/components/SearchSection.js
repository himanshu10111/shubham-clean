import React, { useState } from 'react'; // Add useState to the import
import { Form, Button, Row, Col } from 'react-bootstrap';
import './SearchSection.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchSection() {
    const [startDate, setStartDate] = useState(new Date()); // Now useState is defined

    return (
        <div className="search-section">
            <Form>
                <Row className="align-items-center">
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Form.Group controlId="toLocation">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="text" placeholder="Nagpur" />
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Form.Group controlId="datePicker">
                            <Form.Label>Date</Form.Label>
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                className="form-control"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <Button variant="primary" type="submit">
                            Book Slot
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default SearchSection;
