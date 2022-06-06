import React from 'react';
import { Card, Col } from 'react-bootstrap';

const About = () => {
    const aboutInfos = [
        { id: 1, title: "Capital profile" },
        { id: 2, title: "Mission & Vision" },
        { id: 3, title: "board of director" },
        { id: 4, title: "Management Executive" },
        { id: 5, title: "Circulation" },
        { id: 6, title: "Career Opportunity" },
        { id: 7, title: "Contacts" },
    ]
    return (
        <Col>
            <div>
                <img src="https://st2.depositphotos.com/3591429/6006/i/450/depositphotos_60063963-stock-photo-people-discussing-about-us.jpg" height={300} className='p-3 w-100' />
                <Card.Body>
                    <h3 className='h4 text-start'>About Us</h3>
                    <div className='text-start'>
                        {
                            aboutInfos?.map(info => <li key={info.id}>{info.title}</li>)
                        }
                    </div>
                </Card.Body>
            </div>
        </Col>
    );
};

export default About;