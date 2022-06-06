import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from './../images/logo.png'
const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <div className='d-flex  flex-column flex-md-row align-items-center justify-content-center p-4 mx-5'>
                    <img
                        className="d-block w-50"
                        src={logo}
                        alt="First slide"
                    />

                    <div>
                        <h1 className='h1 text-success flex-grow-1 fw-bold'>&ldquo; মুজিব বর্ষের অঙ্গীকার
                            <br /> উন্নয়ন-অর্থায়নের উৎস হবে পুজিবাজার &rdquo;</h1>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className='d-flex  flex-column flex-md-row align-items-center justify-content-center p-4 mx-5'>
                    <img
                        className="d-block w-50"
                        src={logo}
                        alt="First slide"
                    />

                    <div>
                        <h1 className='h1 text-success flex-grow-1 fw-bold'>&ldquo; মুজিব বর্ষের অঙ্গীকার
                            <br /> উন্নয়ন-অর্থায়নের উৎস হবে পুজিবাজার &rdquo;</h1>
                    </div>
                </div>


            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex flex-column flex-md-row align-items-center justify-content-center p-4 mx-5'>
                    <img
                        className="d-block w-50"
                        src={logo}
                        alt="First slide"
                    />

                    <div>
                        <h1 className='h1 text-success flex-grow-1 fw-bold'>&ldquo; মুজিব বর্ষের অঙ্গীকার
                            <br /> উন্নয়ন-অর্থায়নের উৎস হবে পুজিবাজার &rdquo;</h1>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;