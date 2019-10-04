import React from 'react';


function Section3() {
    return(
        <div>
            <section className="section-margin">
                <div className="container">
                    <div className="section-title section-title--bordered">
                        <h2>BIOGRAPHIES BOOKS</h2>
                    </div>
                    <div className="product-slider sb-slick-slider slider-border-single-row" data-slick-setting='{
                            "autoplay": true,
                            "autoplaySpeed": 8000,
                            "slidesToShow": 5,
                            "dots":true
                        }' data-slick-responsive='[
                            {"breakpoint":1200, "settings": {"slidesToShow": 4} },
                            {"breakpoint":992, "settings": {"slidesToShow": 3} },
                            {"breakpoint":768, "settings": {"slidesToShow": 2} },
                            {"breakpoint":480, "settings": {"slidesToShow": 1} },
                            {"breakpoint":320, "settings": {"slidesToShow": 1} }
                        ]'>
                        <div className="single-slide">
                            <div className="product-card">
                                <div className="product-header">
                                    <a href="#" className="author">
                                        Lpple
                                    </a>
                                    <h3><a href="product-details.html">Revolutionize Your BOOK With</a></h3>
                                </div>
                                <div className="product-card--body">
                                    <div className="card-image">
                                        <img src="image/products/product-2.jpg" alt=""/>
                                        <div className="hover-contents">
                                            <a href="product-details.html" className="hover-image">
                                                <img src="image/products/product-1.jpg" alt=""/>
                                            </a>
                                            <div className="hover-btns">
                                                <a href="cart.html" className="single-btn">
                                                    <i className="fas fa-shopping-basket"></i>
                                                </a>
                                                <a href="wishlist.html" className="single-btn">
                                                    <i className="fas fa-heart"></i>
                                                </a>
                                                <a href="compare.html" className="single-btn">
                                                    <i className="fas fa-random"></i>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#quickModal"
                                                    className="single-btn">
                                                    <i className="fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-block">
                                        <span className="price">£51.20</span>
                                        <del className="price-old">£51.20</del>
                                        <span className="price-discount">20%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="product-card">
                                <div className="product-header">
                                    <a href="#" className="author">
                                        Jpple
                                    </a>
                                    <h3><a href="product-details.html">Turn Your BOOK Into High Machine</a>
                                    </h3>
                                </div>
                                <div className="product-card--body">
                                    <div className="card-image">
                                        <img src="image/products/product-2.jpg" alt=""/>
                                        <div className="hover-contents">
                                            <a href="product-details.html" className="hover-image">
                                                <img src="image/products/product-1.jpg" alt=""/>
                                            </a>
                                            <div className="hover-btns">
                                                <a href="cart.html" className="single-btn">
                                                    <i className="fas fa-shopping-basket"></i>
                                                </a>
                                                <a href="wishlist.html" className="single-btn">
                                                    <i className="fas fa-heart"></i>
                                                </a>
                                                <a href="compare.html" className="single-btn">
                                                    <i className="fas fa-random"></i>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#quickModal"
                                                    className="single-btn">
                                                    <i className="fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-block">
                                        <span className="price">£51.20</span>
                                        <del className="price-old">£51.20</del>
                                        <span className="price-discount">20%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="product-card">
                                <div className="product-header">
                                    <a href="#" className="author">
                                        Wpple
                                    </a>
                                    <h3><a href="product-details.html">3 Ways Create Better BOOK With</a></h3>
                                </div>
                                <div className="product-card--body">
                                    <div className="card-image">
                                        <img src="image/products/product-3.jpg" alt=""/>
                                        <div className="hover-contents">
                                            <a href="product-details.html" className="hover-image">
                                                <img src="image/products/product-2.jpg" alt=""/>
                                            </a>
                                            <div className="hover-btns">
                                                <a href="cart.html" className="single-btn">
                                                    <i className="fas fa-shopping-basket"></i>
                                                </a>
                                                <a href="wishlist.html" className="single-btn">
                                                    <i className="fas fa-heart"></i>
                                                </a>
                                                <a href="compare.html" className="single-btn">
                                                    <i className="fas fa-random"></i>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#quickModal"
                                                    className="single-btn">
                                                    <i className="fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-block">
                                        <span className="price">£51.20</span>
                                        <del className="price-old">£51.20</del>
                                        <span className="price-discount">20%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="product-card">
                                <div className="product-header">
                                    <a href="#" className="author">
                                        Epple
                                    </a>
                                    <h3><a href="product-details.html">What You Can Learn From Bill Gates</a>
                                    </h3>
                                </div>
                                <div className="product-card--body">
                                    <div className="card-image">
                                        <img src="image/products/product-5.jpg" alt=""/>
                                        <div className="hover-contents">
                                            <a href="product-details.html" className="hover-image">
                                                <img src="image/products/product-4.jpg" alt=""/>
                                            </a>
                                            <div className="hover-btns">
                                                <a href="cart.html" className="single-btn">
                                                    <i className="fas fa-shopping-basket"></i>
                                                </a>
                                                <a href="wishlist.html" className="single-btn">
                                                    <i className="fas fa-heart"></i>
                                                </a>
                                                <a href="compare.html" className="single-btn">
                                                    <i className="fas fa-random"></i>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#quickModal"
                                                    className="single-btn">
                                                    <i className="fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-block">
                                        <span className="price">£51.20</span>
                                        <del className="price-old">£51.20</del>
                                        <span className="price-discount">20%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="product-card">
                                <div className="product-header">
                                    <a href="#" className="author">
                                        Hpple
                                    </a>
                                    <h3><a href="product-details.html">a Half Very Simple Things You To</a></h3>
                                </div>
                                <div className="product-card--body">
                                    <div className="card-image">
                                        <img src="image/products/product-6.jpg" alt=""/>
                                        <div className="hover-contents">
                                            <a href="product-details.html" className="hover-image">
                                                <img src="image/products/product-4.jpg" alt=""/>
                                            </a>
                                            <div className="hover-btns">
                                                <a href="cart.html" className="single-btn">
                                                    <i className="fas fa-shopping-basket"></i>
                                                </a>
                                                <a href="wishlist.html" className="single-btn">
                                                    <i className="fas fa-heart"></i>
                                                </a>
                                                <a href="compare.html" className="single-btn">
                                                    <i className="fas fa-random"></i>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#quickModal"
                                                    className="single-btn">
                                                    <i className="fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-block">
                                        <span className="price">£51.20</span>
                                        <del className="price-old">£51.20</del>
                                        <span className="price-discount">20%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="product-card">
                                <div className="product-header">
                                    <a href="#" className="author">
                                        Bpple
                                    </a>
                                    <h3><a href="product-details.html">Here Is A Quick Cure For Book</a>
                                    </h3>
                                </div>
                                <div className="product-card--body">
                                    <div className="card-image">
                                        <img src="image/products/product-8.jpg" alt=""/>
                                        <div className="hover-contents">
                                            <a href="product-details.html" className="hover-image">
                                                <img src="image/products/product-7.jpg" alt=""/>
                                            </a>
                                            <div className="hover-btns">
                                                <a href="cart.html" className="single-btn">
                                                    <i className="fas fa-shopping-basket"></i>
                                                </a>
                                                <a href="wishlist.html" className="single-btn">
                                                    <i className="fas fa-heart"></i>
                                                </a>
                                                <a href="compare.html" className="single-btn">
                                                    <i className="fas fa-random"></i>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#quickModal"
                                                    className="single-btn">
                                                    <i className="fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-block">
                                        <span className="price">£51.20</span>
                                        <del className="price-old">£51.20</del>
                                        <span className="price-discount">20%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="product-card">
                                <div className="product-header">
                                    <a href="#" className="author">
                                        zpple
                                    </a>
                                    <h3><a href="product-details.html">BOOK: Do You Really Need It? This </a></h3>
                                </div>
                                <div className="product-card--body">
                                    <div className="card-image">
                                        <img src="image/products/product-13.jpg" alt=""/>
                                        <div className="hover-contents">
                                            <a href="product-details.html" className="hover-image">
                                                <img src="image/products/product-11.jpg" alt=""/>
                                            </a>
                                            <div className="hover-btns">
                                                <a href="cart.html" className="single-btn">
                                                    <i className="fas fa-shopping-basket"></i>
                                                </a>
                                                <a href="wishlist.html" className="single-btn">
                                                    <i className="fas fa-heart"></i>
                                                </a>
                                                <a href="compare.html" className="single-btn">
                                                    <i className="fas fa-random"></i>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#quickModal"
                                                    className="single-btn">
                                                    <i className="fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-block">
                                        <span className="price">£51.20</span>
                                        <del className="price-old">£51.20</del>
                                        <span className="price-discount">20%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      


            <section className="mb--30 space-dt--30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 mt--30">
                            <div className="feature-box h-100">
                                <div className="icon">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <div className="text">
                                    <h5>Free Shipping Item</h5>
                                    <p> Orders over $500</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mt--30">
                            <div className="feature-box h-100">
                                <div className="icon">
                                    <i className="fas fa-redo-alt"></i>
                                </div>
                                <div className="text">
                                    <h5>Money Back Guarantee</h5>
                                    <p>100% money back</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mt--30">
                            <div className="feature-box h-100">
                                <div className="icon">
                                    <i className="fas fa-piggy-bank"></i>
                                </div>
                                <div className="text">
                                    <h5>Cash On Delivery</h5>
                                    <p>Lorem ipsum dolor amet</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mt--30">
                            <div className="feature-box h-100">
                                <div className="icon">
                                    <i className="fas fa-life-ring"></i>
                                </div>
                                <div className="text">
                                    <h5>Help & Support</h5>
                                    <p>Call us : + 0123.4567.89</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section-margin">
                <h1 className="sr-only">Promotion Section</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <a href="#" className="promo-image promo-overlay">
                                <img src="image/bg-images/promo-banner-with-text.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="#" className="promo-image promo-overlay">
                                <img src="image/bg-images/promo-banner-with-text-2.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
    )
}

export default Section3;