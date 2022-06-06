import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='container mt-4 '>
            <Row>
                <Col lg={8} >
                    <div className='text-md-start text-center'>
                        <h2 className='h2'>Logo</h2>
                    </div>
                </Col>
                <Col lg={2} md={6}>
                    <div>
                        <p className='fw-bold'>About</p>
                        <div className='d-flex flex-column mb-3 '>
                            <a href='#' className='text-decoration-none text-dark'>Link - 1</a>
                            <a href='#' className='text-decoration-none text-dark'>Link - 2</a>
                            <a href='#' className='text-decoration-none text-dark'>Link - 3</a>
                        </div>
                    </div>
                </Col>
                <Col lg={2} md={6}>
                    <div>
                        <p className='fw-bold'>Privacy</p>
                        <div className='d-flex flex-column mb-3 '>
                            <a href='#' className='text-decoration-none text-dark'>Link - 1</a>
                            <a href='#' className='text-decoration-none text-dark'>Link - 2</a>
                            <a href='#' className='text-decoration-none text-dark'>Link - 3</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <p><small>copyright &copy; 2022</small></p>
        </div>
    );
};

export default Footer;