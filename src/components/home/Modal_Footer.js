import React from 'react';


function Modal_Footer() {
    return (
        <div>
            
            <section className="section-margin">
                <div className="container">
                    <div className="section-title section-title--bordered mb-lg--60">
                        <h2>CLIENT TESTIMONIALS</h2>
                    </div>
                    <div className="sb-slick-slider testimonial-slider" data-slick-setting='{
                    "autoplay": true,
                    "autoplaySpeed": 8000,
                    "slidesToShow":3,
                    "dots":true
                }' data-slick-responsive='[
                    {"breakpoint":1200, "settings": {"slidesToShow": 2} },
                    {"breakpoint":992, "settings": {"slidesToShow": 1} },
                    {"breakpoint":768, "settings": {"slidesToShow": 1} },
                    {"breakpoint":490, "settings": {"slidesToShow": 1} }
                ]'>
                        <div className="single-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-image">
                                    <img src="image/others/client-1.png" alt=""/>
                                </div>
                                <div className="testimonial-body">
                                    <article>
                                        <h2 className="sr-only">Testimonial Article</h2>
                                        <p>version This is Photoshops of Lorem Ipsum. Proin gravida nibh vel velit.Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. In molestie augue magna. Pell..</p>
                                        <span className="d-block client-name">Rebecka Filson</span>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-image">
                                    <img src="image/others/client-2.png" alt=""/>
                                </div>
                                <div className="testimonial-body">
                                    <article>
                                        <h2 className="sr-only">Testimonial Article</h2>
                                        <p>In molestie augue magna.This is Photoshops version of Lorem Ipsum. Proin gravida
                                            nibh vel velit.Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Pell..</p>
                                        <span className="d-block client-name">Rebecka Filson</span>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-image">
                                    <img src="image/others/client-3.png" alt=""/>
                                </div>
                                <div className="testimonial-body">
                                    <article>
                                        <h2 className="sr-only">Testimonial Article</h2>
                                        <p>Lorem Ipsum This is Photoshops version of . Proin gravida nibh vel velit.Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. In molestie augue magna. Pell..</p>
                                        <span className="d-block client-name">Rebecka Filson</span>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-image">
                                    <img src="image/others/client-4.png" alt=""/>
                                </div>
                                <div className="testimonial-body">
                                    <article>
                                        <h2 className="sr-only">Testimonial Article</h2>
                                        <p>elit. In molestie This is Photoshops version of Lorem Ipsum. Proin gravida nibh
                                            vel velit.Lorem ipsum dolor sit amet, consectetur
                                            adipiscing augue magna. Pell..</p>
                                        <span className="d-block client-name">Rebecka Filson</span>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-image">
                                    <img src="image/others/client-5.png" alt=""/>
                                </div>
                                <div className="testimonial-body">
                                    <article>
                                        <h2 className="sr-only">Testimonial Article</h2>
                                        <p>Pell Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit.Lorem ipsum
                                            dolor sit amet, consectetur
                                            adipiscing elit. In molestie augue magna. This is..</p>
                                        <span className="d-block client-name">Rebecka Filson</span>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            <div className="modal fade modal-quick-view" id="quickModal" tabindex="-1" role="dialog"
            aria-labelledby="quickModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button type="button" className="close modal-close-btn ml-auto" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="product-details-modal">
                            <div className="row">
                                <div className="col-lg-5">
                                
                                    <div className="product-details-slider sb-slick-slider arrow-type-two" data-slick-setting='{
                "slidesToShow": 1,
                "arrows": false,
                "fade": true,
                "draggable": false,
                "swipe": false,
                "asNavFor": ".product-slider-nav"
                }'>
                                        <div className="single-slide">
                                            <img src="image/products/product-details-1.jpg" alt=""/>
                                        </div>
                                        <div className="single-slide">
                                            <img src="image/products/product-details-2.jpg" alt=""/>
                                        </div>
                                        <div className="single-slide">
                                            <img src="image/products/product-details-3.jpg" alt=""/>
                                        </div>
                                        <div className="single-slide">
                                            <img src="image/products/product-details-4.jpg" alt=""/>
                                        </div>
                                        <div className="single-slide">
                                            <img src="image/products/product-details-5.jpg" alt=""/>
                                        </div>
                                    </div>
                                   
                                    <div className="mt--30 product-slider-nav sb-slick-slider arrow-type-two"
                                        data-slick-setting='{
                "infinite":true,
                "autoplay": true,
                "autoplaySpeed": 8000,
                "slidesToShow": 4,
                "arrows": true,
                "prevArrow":{"buttonClass": "slick-prev","iconClass":"fa fa-chevron-left"},
                "nextArrow":{"buttonClass": "slick-next","iconClass":"fa fa-chevron-right"},
                "asNavFor": ".product-details-slider",
                "focusOnSelect": true
                }'>
                                        <div className="single-slide">
                                            <img src="image/products/product-details-1.jpg" alt=""/>
                                        </div>
                                        <div className="single-slide">
                                            <img src="image/products/product-details-2.jpg" alt=""/>
                                        </div>
                                        <div className="single-slide">
                                            <img src="image/products/product-details-3.jpg" alt=""/>
                                        </div>
                                        <div className="single-slide">
                                            <img src="image/products/product-details-4.jpg" alt=""/>
                                        </div>
                                        <div className="single-slide">
                                            <img src="image/products/product-details-5.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 mt--30 mt-lg--30">
                                    <div className="product-details-info pl-lg--30 ">
                                        <p className="tag-block">Tags: <a href="#">Movado</a>, <a href="#">Omega</a></p>
                                        <h3 className="product-title">Beats EP Wired On-Ear Headphone-Black</h3>
                                        <ul className="list-unstyled">
                                            <li>Ex Tax: <span className="list-value"> £60.24</span></li>
                                            <li>Brands: <a href="#" className="list-value font-weight-bold"> Canon</a></li>
                                            <li>Product Code: <span className="list-value"> model1</span></li>
                                            <li>Reward Points: <span className="list-value"> 200</span></li>
                                            <li>Availability: <span className="list-value"> In Stock</span></li>
                                        </ul>
                                        <div className="price-block">
                                            <span className="price-new">£73.79</span>
                                            <del className="price-old">£91.86</del>
                                        </div>
                                        <div className="rating-widget">
                                            <div className="rating-block">
                                                <span className="fas fa-star star_on"></span>
                                                <span className="fas fa-star star_on"></span>
                                                <span className="fas fa-star star_on"></span>
                                                <span className="fas fa-star star_on"></span>
                                                <span className="fas fa-star "></span>
                                            </div>
                                            <div className="review-widget">
                                                <a href="#">(1 Reviews)</a> <span>|</span>
                                                <a href="#">Write a review</a>
                                            </div>
                                        </div>
                                        <article className="product-details-article">
                                            <h4 className="sr-only">Product Summery</h4>
                                            <p>Long printed dress with thin adjustable straps. V-neckline and wiring under
                                                the Dust with ruffles at the bottom
                                                of the
                                                dress.</p>
                                        </article>
                                        <div className="add-to-cart-row">
                                            <div className="count-input-block">
                                                <span className="widget-label">Qty</span>
                                                <input type="number" className="form-control text-center" value="1"  />
                                            </div>
                                            <div className="add-cart-btn">
                                                <a href="#" className="btn btn-outlined--primary"><span
                                                        className="plus-icon">+</span>Add to Cart</a>
                                            </div>
                                        </div>
                                        <div className="compare-wishlist-row">
                                            <a href="#" className="add-link"><i className="fas fa-heart"></i>Add to Wish List</a>
                                            <a href="#" className="add-link"><i className="fas fa-random"></i>Add to Compare</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="widget-social-share">
                                <span className="widget-label">Share:</span>
                                <div className="modal-social-share">
                                    <a href="#" className="single-icon"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="single-icon"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="single-icon"><i className="fab fa-youtube"></i></a>
                                    <a href="#" className="single-icon"><i className="fab fa-google-plus-g"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
=======
            

        
        
   
            <section className="section-margin">
                <h2 className="sr-only">Brand Slider</h2>
                <div className="container">
                    <div className="brand-slider sb-slick-slider border-top border-bottom" data-slick-setting='{
                                                    "autoplay": true,
                                                    "autoplaySpeed": 8000,
                                                    "slidesToShow": 6
                                                    }' data-slick-responsive='[
                        {"breakpoint":992, "settings": {"slidesToShow": 4} },
                        {"breakpoint":768, "settings": {"slidesToShow": 3} },
                        {"breakpoint":575, "settings": {"slidesToShow": 3} },
                        {"breakpoint":480, "settings": {"slidesToShow": 2} },
                        {"breakpoint":320, "settings": {"slidesToShow": 1} }
                    ]'>
                        <div className="single-slide">
                            <img src="image/others/brand-1.jpg" alt=""/>
                        </div>
                        <div className="single-slide">
                            <img src="image/others/brand-2.jpg" alt=""/>
                        </div>
                        <div className="single-slide">
                            <img src="image/others/brand-3.jpg" alt=""/>
                        </div>
                        <div className="single-slide">
                            <img src="image/others/brand-4.jpg" alt=""/>
                        </div>
                        <div className="single-slide">
                            <img src="image/others/brand-5.jpg" alt=""/>
                        </div>
                        <div className="single-slide">
                            <img src="image/others/brand-6.jpg" alt=""/>
                        </div>
                        <div className="single-slide">
                            <img src="image/others/brand-1.jpg" alt=""/>
                        </div>
                        <div className="single-slide">
                            <img src="image/others/brand-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        


            <footer className="site-footer">
                <div className="container">
                    <div className="row justify-content-between  section-padding">
                        <div className=" col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-footer pb--40">
                                <div className="brand-footer footer-title">
                                    <img src="image/logo--footer.png" alt=""/>
                                </div>
                                <div className="footer-contact">
                                    <p><span className="label">Address:</span><span className="text">Example Street 98, HH2 BacHa, New
                                            York, USA</span></p>
                                    <p><span className="label">Phone:</span><span className="text">+18088 234 5678</span></p>
                                    <p><span className="label">Email:</span><span className="text">suport@hastech.com</span></p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-xl-3 col-lg-2 col-sm-6">
                            <div className="single-footer pb--40">
                                <div className="footer-title">
                                    <h3>Information</h3>
                                </div>
                                <ul className="footer-list normal-list">
                                    <li><a href="#">Prices drop</a></li>
                                    <li><a href="#">New products</a></li>
                                    <li><a href="#">Best sales</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-xl-3 col-lg-2 col-sm-6">
                            <div className="single-footer pb--40">
                                <div className="footer-title">
                                    <h3>Extras</h3>
                                </div>
                                <ul className="footer-list normal-list">
                                    <li><a href="#">Delivery</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Stores</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-title">
                                <h3>Newsletter Subscribe</h3>
                            </div>
                            <div className="newsletter-form mb--30">
                                <form action="https://demo.hasthemes.com/smartbooks-v2/smartbook/php/mail.php">
                                    <input type="email" className="form-control" placeholder="Enter Your Email Address Here..."  />
                                    <button className="btn btn--primary w-100">Subscribe</button>
                                </form>
                            </div>
                            <div className="social-block">
                                <h3 className="title">STAY CONNECTED</h3>
                                <ul className="social-list list-inline">
                                    <li className="single-social facebook"><a href="#"><i className="ion ion-social-facebook"></i></a>
                                    </li>
                                    <li className="single-social twitter"><a href="#"><i className="ion ion-social-twitter"></i></a></li>
                                    <li className="single-social google"><a href="#"><i
                                                className="ion ion-social-googleplus-outline"></i></a></li>
                                    <li className="single-social youtube"><a href="#"><i className="ion ion-social-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright-heading">Suspendisse in auctor augue. Cras fermentum est ac fermentum tempor. Etiam
                            vel magna volutpat, posuere eros</p>
                        <a href="#" className="payment-block">
                            <img src="image/icon/payment.png" alt=""/>
                        </a>
                        <p className="copyright-text">Copyright © 2019 <a href="#" className="author">Smartbook</a>. All Right Reserved.
                            <br/>
                            Design By Smartbook</p>
                    </div>
                </div>
            </footer>
>>>>>>> 9bcb82bd9172b5c1c44ca493378990738e65edbc
        </div>
    )
}

export default Modal_Footer;