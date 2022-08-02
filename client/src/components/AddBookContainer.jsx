import React from 'react';
import AddBook from "./AddBook";
import {Col, Container, Row} from "react-bootstrap";

function AddBookContainer() {

    return (
        <div>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col xs={12} md={6}>
                        <AddBook/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddBookContainer;
