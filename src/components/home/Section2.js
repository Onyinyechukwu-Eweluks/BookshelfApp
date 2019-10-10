import React from 'react';
<<<<<<< HEAD
import Carousel from 'react-bootstrap/Carousel';
=======
>>>>>>> 9bcb82bd9172b5c1c44ca493378990738e65edbc

function Section2() {
    return(
        <div>
            <section className="section-margin">
                <div className="container">
                    <div className="section-title section-title--bordered">
                        <h2>ARTS & PHOTOGRAPHY BOOKS</h2>
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
                                        <img src="image/products/product-10.jpg" alt=""/>
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


            <section className="section-margin">
                <div className="container">
                    <div className="section-title section-title--bordered">
                        <h2>CHILDREN’S BOOKS</h2>
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
                                        <img src="image/products/product-1.jpg" alt=""/>
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
                                        <img src="image/products/product-6.jpg" alt=""/>
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
                                        <img src="image/products/product-4.jpg" alt=""/>
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
                                        <img src="image/products/product-8.jpg" alt=""/>
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
                                        <img src="image/products/product-2.jpg" alt=""/>
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
                                        <img src="image/products/product-10.jpg" alt=""/>
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
        </div>
    )
}

export default Section2;