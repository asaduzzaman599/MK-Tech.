import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = () => {
    return (
        <Col>
            <div className='w-100'>
                <img src="https://thumbs.dreamstime.com/b/products-services-concept-reminder-message-cork-board-products-services-77227901.jpg" height={300} className='p-3 w-100' />
                <div className='p-2'>

                    <h3 className='h4 text-start'>Product &amp; Services</h3>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </div>
            </div>
        </Col>
    );
};

export default Service;