import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Download = () => {
    return (
        <Col>
            <div className='w-100'>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZLJxSfCR-Cm3mnoqQwvOGcq0ghe3vVslFxL11hNiVauYpy4Z4IpVtY6OtLYGs4zqYCA&usqp=CAU" className='p-3 w-100' height={300} />
                <Card.Body>
                    <h3 className='h4 text-start'>Download </h3>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </div>
        </Col>
    );
};

export default Download;