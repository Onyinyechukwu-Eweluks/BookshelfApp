import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Section() {
    return(
        <div>
             <section className="hero-area hero-slider-3">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/image/bg-images/home-3-slider-1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="container">
                                <div className="home-content text-center">
                                    <div className="row justify-content-end">
                                            <div className="col-lg-6">
                                                <h1>Beautifully Designed</h1>
                                                <h2>Cover up front of book and
                                                    <br/>leave summary</h2>
                                                <a href="shop-grid.html" className="btn btn--yellow">
                                                    Shop Now
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/image/bg-images/home-3-slider-2.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <div className="container">
                                    <div className="home-content pl--30">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h1>I Love This Idea!</h1>
                                                <h2>Cover up front of book and
                                                    <br/>leave summary</h2>
                                                <a href="shop-grid.html" className="btn btn--yellow">
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
                <br /><br /><br /><br /><br />
            </section>
        </div>

    )
}

export default Section;