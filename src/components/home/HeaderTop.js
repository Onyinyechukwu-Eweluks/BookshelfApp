import React from 'react';
import HeaderButtom from './HeaderButtom'
import { Link } from 'react-router-dom';

function HeaderTop () {
    return(
        <div>
            <div class="site-header header-3  d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <ul className="header-top-list">
                            <li className="dropdown-trigger currency-dropdown"><Link to="#">£ GBP </Link><i
                                    className="fas fa-chevron-down dropdown-arrow"></i>
                                <ul className="dropdown-box">
                                    <li><Link to="#">€ Euro</Link></li>
                                    <li><Link to="#">£ Pound Sterling</Link></li>
                                    <li><Link to="#">$ US Dollar</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown-trigger language-dropdown"><Link to="#"><span className="flag-img"><img
                                            src="image/icon/eng-flag.png" alt=""/></span>en-gb </Link><i
                                    className="fas fa-chevron-down dropdown-arrow"></i>
                                <ul className="dropdown-box">
                                    <li> <Link to="#"> <span className="flag-img"><img src="image/icon/eng-flag.png"
                                                    alt=""/></span>English</Link></li>
                                    <li> <Link to="#"> <span className="flag-img"><img src="image/icon/germany-flag.png"
                                                    alt=""/></span>Germany</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8 flex-lg-right">
                        <ul className="header-top-list">
                            <li><Link to="#"><i className="icons-left fas fa-random"></i>My Compare</Link>
                            </li>
                            <li className="dropdown-trigger language-dropdown"><Link to="#"><i
                                        className="icons-left fas fa-heart"></i>
                                    wishlist (0)</Link>
                            </li>
                            <li className="dropdown-trigger language-dropdown"><Link to="#"><i
                                        className="icons-left fas fa-user"></i>
                                    My Account</Link><i className="fas fa-chevron-down dropdown-arrow"></i>
                                <ul className="dropdown-box">
                                    <li> <Link to="#">My Account</Link></li>
                                    <li> <Link to="#">Order History</Link></li>
                                    <li> <Link to="#">Transactions</Link></li>
                                    <li> <Link to="#">Downloads</Link></li>
                                </ul>
                            </li>
                            <li><Link to="#"><i className="icons-left fas fa-phone"></i> Contact</Link>
                            </li>
                            <li><Link to="#"><i className="icons-left fas fa-share"></i> Checkout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle pt--10 pb--10">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <Link to="index.html" className="site-brand">
                                <img src="image/logo.png" alt=""/>
                            </Link>
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
                                        <Link to="/loginregister" className="font-weight-bold">Login</Link> <br/>
                                        <span>or</span><Link to="/loginregister">Register</Link>
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
                                                    <Link to="product-details.html" className="image">
                                                        <img src="image/products/cart-product-1.jpg" alt=""/>
                                                    </Link>
                                                    <div className="content">
                                                        <h3 className="title"><Link to="product-details.html">Kodak PIXPRO
                                                                Astro Zoom AZ421 16 MP</Link></h3>
                                                        <p className="price"><span className="qty">1 ×</span> £87.34</p>
                                                        <button className="cross-btn"><i className="fas fa-times"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" single-cart-block ">
                                                <div className="btn-block">
                                                    <Link to="cart.html" className="btn">View Cart <i
                                                            className="fas fa-chevron-right"></i></Link>
                                                    <Link to="checkout.html" className="btn btn--primary">Check Out <i
                                                            className="fas fa-chevron-right"></i></Link>
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