import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Client = () => {
    return (
        <Col>
            <div className='w-100'>
                <Card.Img variant="top" src="https://previews.123rf.com/images/binkski/binkski1108/binkski110800028/10367793-a-transparent-earth-globe-sphere-map.jpg" className='p-3 w-100' height={300} />
                <div className='text-start p-2'>
                    <h3 className='h4 text-start'>Become a client </h3>
                    <div >
                        <li>This is a longer .</li>
                        <li> lead-in to additional.</li>
                    </div>
                </div>
            </div>
            <div className='w-100'>
                <Card.Img variant="top" src="https://previews.123rf.com/images/binkski/binkski1108/binkski110800028/10367793-a-transparent-earth-globe-sphere-map.jpg" className='p-3 w-100' height={300} />
                <div className='text-start p-2'>
                    <h3 className='h4 text-start'>Research </h3>
                    <div >
                        <li>This is a longer </li>
                        <li> lead-in to additional</li>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Client;