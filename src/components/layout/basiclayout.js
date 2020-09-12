import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Navbar } from '../../components';

const BasicLayout = ({ children }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar />
                </Col>
            </Row>
            <Row>
                <Container>
                    {children}
                </Container>
            </Row>
        </Container>
    )
}

export default BasicLayout