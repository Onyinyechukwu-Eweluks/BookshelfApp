import React from 'react';
<<<<<<< HEAD
import Carousel from 'react-bootstrap/Carousel';
=======
>>>>>>> 9bcb82bd9172b5c1c44ca493378990738e65edbc

function Section() {
    return(
        <div>
             <section className="hero-area hero-slider-3">
<<<<<<< HEAD
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
=======
                <div className="sb-slick-slider" data-slick-setting='{
                                                            "autoplay": true,
                                                            "autoplaySpeed": 8000,
                                                            "slidesToShow": 1,
                                                            "dots":true
                                                            }'>
                    <div className="single-slide bg-image  bg-overlay--dark" data-bg="image/bg-images/home-3-slider-1.jpg">
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
                    </div>
                    <div className="single-slide bg-image  bg-overlay--dark" data-bg="image/bg-images/home-3-slider-2.jpg">
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
                    </div>
                </div>
            </section>


            <section className="pt--30 section-margin">
                <h2 className="sr-only">Category Gallery Section</h2>
                <div className="container">
                    <div className="category-gallery-block">
                        <a href="#" className="single-block hr-large">
                            <img src="image/others/cat-gal-large.png" alt=""/>
                        </a>
                        <div className="single-block inner-block-wrapper">
                            <a href="#" className="single-image mid-image">
                                <img src="image/others/cat-gal-mid.png" alt=""/>
                            </a>
                            <a href="#" className="single-image small-image">
                                <img src="image/others/cat-gal-small.png" alt=""/>
                            </a>
                            <a href="#" className="single-image small-image">
                                <img src="image/others/cat-gal-small-2.jpg" alt=""/>
                            </a>
                            <a href="#" className="single-image mid-image">
                                <img src="image/others/cat-gal-mid-2.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
>>>>>>> 9bcb82bd9172b5c1c44ca493378990738e65edbc
            </section>
        </div>

    )
}

export default Section;