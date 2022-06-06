import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import About from './About';
import Client from './Client';
import Download from './Download';
import Service from './Service';

const Information = () => {
    return (
        <Row xs={1} md={2} lg={4} className="g-3">
            <About></About>
            <Service></Service>
            <Client></Client>
            <Download></Download>
        </Row>
    );
};

export default Information;