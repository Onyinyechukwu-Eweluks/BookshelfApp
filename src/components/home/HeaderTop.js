import React from 'react';
import HeaderButtom from './HeaderButtom'

function HeaderTop () {
    return(
        <div>
            <div class="site-header header-3  d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <ul className="header-top-list">
                            <li className="dropdown-trigger currency-dropdown"><a href="#">£ GBP </a><i
                                    className="fas fa-chevron-down dropdown-arrow"></i>
                                <ul className="dropdown-box">
                                    <li><a href="#">€ Euro</a></li>
                                    <li><a href="#">£ Pound Sterling</a></li>
                                    <li><a href="#">$ US Dollar</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-trigger language-dropdown"><a href="#"><span className="flag-img"><img
                                            src="image/icon/eng-flag.png" alt=""/></span>en-gb </a><i
                                    className="fas fa-chevron-down dropdown-arrow"></i>
                                <ul className="dropdown-box">
                                    <li> <a href="#"> <span className="flag-img"><img src="image/icon/eng-flag.png"
                                                    alt=""/></span>English</a></li>
                                    <li> <a href="#"> <span className="flag-img"><img src="image/icon/germany-flag.png"
                                                    alt=""/></span>Germany</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8 flex-lg-right">
                        <ul className="header-top-list">
                            <li><a href="#"><i className="icons-left fas fa-random"></i>My Compare</a>
                            </li>
                            <li className="dropdown-trigger language-dropdown"><a href="#"><i
                                        className="icons-left fas fa-heart"></i>
                                    wishlist (0)</a>
                            </li>
                            <li className="dropdown-trigger language-dropdown"><a href="#"><i
                                        className="icons-left fas fa-user"></i>
                                    My Account</a><i className="fas fa-chevron-down dropdown-arrow"></i>
                                <ul className="dropdown-box">
                                    <li> <a href="#">My Account</a></li>
                                    <li> <a href="#">Order History</a></li>
                                    <li> <a href="#">Transactions</a></li>
                                    <li> <a href="#">Downloads</a></li>
                                </ul>
                            </li>
                            <li><a href="#"><i className="icons-left fas fa-phone"></i> Contact</a>
                            </li>
                            <li><a href="#"><i className="icons-left fas fa-share"></i> Checkout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle pt--10 pb--10">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <a href="index.html" className="site-brand">
                                <img src="image/logo.png" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-5">
                            <div className="header-search-block">
                                <input type="text" placeholder="Search entire store here"/>
                                <button>Search</button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="main-navigation flex-lg-right">
                                <div className="cart-widget">
                                    <div className="login-block">
                                        <a href="login-register.html" className="font-weight-bold">Login</a> <br/>
                                        <span>or</span><a href="login-register.html">Register</a>
                                    </div>
                                    <div className="cart-block">
                                        <div className="cart-total">
                                            <span className="text-number">
                                                1
                                            </span>
                                            <span className="text-item">
                                                Shopping Cart
                                            </span>
                                            <span className="price">
                                                £0.00
                                                <i className="fas fa-chevron-down"></i>
                                            </span>
                                        </div>
                                        <div className="cart-dropdown-block">
                                            <div className=" single-cart-block ">
                                                <div className="cart-product">
                                                    <a href="product-details.html" className="image">
                                                        <img src="image/products/cart-product-1.jpg" alt=""/>
                                                    </a>
                                                    <div className="content">
                                                        <h3 className="title"><a href="product-details.html">Kodak PIXPRO
                                                                Astro Zoom AZ421 16 MP</a></h3>
                                                        <p className="price"><span className="qty">1 ×</span> £87.34</p>
                                                        <button className="cross-btn"><i className="fas fa-times"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" single-cart-block ">
                                                <div className="btn-block">
                                                    <a href="cart.html" className="btn">View Cart <i
                                                            className="fas fa-chevron-right"></i></a>
                                                    <a href="checkout.html" className="btn btn--primary">Check Out <i
                                                            className="fas fa-chevron-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <HeaderButtom />
            </div>
        </div>
    )
}

export default HeaderTop;