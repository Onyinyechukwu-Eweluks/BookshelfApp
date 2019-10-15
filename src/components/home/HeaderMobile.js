import React from 'react';
import { Link } from 'react-router-dom';

function HeaderMobile () {
    return(
        <div>
            <div className="site-mobile-menu">
            <header className="mobile-header d-block d-lg-none pt--10 pb-md--10">
                <div className="container">
                    <div className="row align-items-sm-end align-items-center">
                        <div className="col-md-4 col-7">
                            <Link to="index.html" className="site-brand">
                                <img src="image/logo.png" alt=""/>
                            </Link>
                        </div>
                        <div className="col-md-5 order-3 order-md-2">
                            <nav className="category-nav   ">
                                <div>
                                    <Link to="javascript:void(0)" className="category-trigger"><i
                                            className="fa fa-bars"></i>Browse
                                        categories</Link>
                                    <ul className="category-menu">
                                        <li className="cat-item has-children">
                                            <Link to="#">Arts & Photography</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="#">Bags & Cases</Link></li>
                                                <li><Link to="#">Binoculars & Scopes</Link></li>
                                                <li><Link to="#">Digital Cameras</Link></li>
                                                <li><Link to="#">Film Photography</Link></li>
                                                <li><Link to="#">Lighting & Studio</Link></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item has-children mega-menu"><Link to="#">Biographies</Link>
                                            <ul className="sub-menu">
                                                <li className="single-block">
                                                    <h3 className="title">WHEEL SIMULATORS</h3>
                                                    <ul>
                                                        <li><Link to="#">Bags & Cases</Link></li>
                                                        <li><Link to="#">Binoculars & Scopes</Link></li>
                                                        <li><Link to="#">Digital Cameras</Link></li>
                                                        <li><Link to="#">Film Photography</Link></li>
                                                        <li><Link to="#">Lighting & Studio</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="single-block">
                                                    <h3 className="title">WHEEL SIMULATORS</h3>
                                                    <ul>
                                                        <li><Link to="#">Bags & Cases</Link></li>
                                                        <li><Link to="#">Binoculars & Scopes</Link></li>
                                                        <li><Link to="#">Digital Cameras</Link></li>
                                                        <li><Link to="#">Film Photography</Link></li>
                                                        <li><Link to="#">Lighting & Studio</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="single-block">
                                                    <h3 className="title">WHEEL SIMULATORS</h3>
                                                    <ul>
                                                        <li><Link to="#">Bags & Cases</Link></li>
                                                        <li><Link to="#">Binoculars & Scopes</Link></li>
                                                        <li><Link to="#">Digital Cameras</Link></li>
                                                        <li><Link to="#">Film Photography</Link></li>
                                                        <li><Link to="#">Lighting & Studio</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="single-block">
                                                    <h3 className="title">WHEEL SIMULATORS</h3>
                                                    <ul>
                                                        <li><Link to="#">Bags & Cases</Link></li>
                                                        <li><Link to="#">Binoculars & Scopes</Link></li>
                                                        <li><Link to="#">Digital Cameras</Link></li>
                                                        <li><Link to="#">Film Photography</Link></li>
                                                        <li><Link to="#">Lighting & Studio</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="cat-item has-children"><Link to="#">Business & Money</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="#">Brake Tools</Link></li>
                                                <li><Link to="#">Driveshafts</Link></li>
                                                <li><Link to="#">Emergency Brake</Link></li>
                                                <li><Link to="#">Spools</Link></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item has-children"><Link to="#">Calendars</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="#">Brake Tools</Link></li>
                                                <li><Link to="#">Driveshafts</Link></li>
                                                <li><Link to="#">Emergency Brake</Link></li>
                                                <li><Link to="#">Spools</Link></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item has-children"><Link to="#">Children's Books</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="#">Brake Tools</Link></li>
                                                <li><Link to="#">Driveshafts</Link></li>
                                                <li><Link to="#">Emergency Brake</Link></li>
                                                <li><Link to="#">Spools</Link></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item has-children"><Link to="#">Comics</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="#">Brake Tools</Link></li>
                                                <li><Link to="#">Driveshafts</Link></li>
                                                <li><Link to="#">Emergency Brake</Link></li>
                                                <li><Link to="#">Spools</Link></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item"><Link to="#">Perfomance Filters</Link></li>
                                        <li className="cat-item has-children"><Link to="#">Cookbooks</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="#">Brake Tools</Link></li>
                                                <li><Link to="#">Driveshafts</Link></li>
                                                <li><Link to="#">Emergency Brake</Link></li>
                                                <li><Link to="#">Spools</Link></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item "><Link to="#">Accessories</Link></li>
                                        <li className="cat-item "><Link to="#">Education</Link></li>
                                        <li className="cat-item hidden-menu-item"><Link to="#">Indoor Living</Link></li>
                                        <li className="cat-item"><Link to="#" className="js-expand-hidden-menu">More
                                                Categories</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-3 col-5  order-md-3 text-right">
                            <div className="mobile-header-btns header-top-widget">
                                <ul className="header-links">
                                    <li className="sin-link">
                                        <Link to="cart.html" className="cart-link link-icon"><i className="ion-bag"></i></Link>
                                    </li>
                                    <li className="sin-link">
                                        <Link to="javascript:" className="link-icon hamburgur-icon off-canvas-btn"><i
                                                className="ion-navicon"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            


            <aside className="off-canvas-wrapper">
                <div className="btn-close-off-canvas">
                    <i className="ion-android-close"></i>
                </div>
                <div className="off-canvas-inner">
                   


                    <div className="search-box offcanvas">
                        <form>
                            <input type="text" placeholder="Search Here"/>
                            <button className="search-btn"><i className="ion-ios-search-strong"></i></button>
                        </form>
                    </div>
                    


                    <div className="mobile-navigation">
                       
                        <nav className="off-canvas-nav">
                            <ul className="mobile-menu main-mobile-menu">
                                <li className="menu-item-has-children">
                                    <Link to="/home">Home</Link>
                                </li>
                                
                                <li className="menu-item-has-children">
                                    <Link to="/product">Products</Link>
                                    
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="#">My-Info</Link>
                                    <ul className="sub-menu">
                                        <li> <Link to="cart.html">Cart</Link></li>
                                        <li> <Link to="checkout.html">Checkout</Link></li>
                                        <li> <Link to="compare.html">Compare</Link></li>
                                        <li> <Link to="wishlist.html">Wishlist</Link></li>
                                        <li> <Link to="login-register.html">Login Register</Link></li>
                                        <li> <Link to="my-account.html">My Account</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="/blog">Blog</Link>
                                    
                                </li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                        
                    </div>
                    
                    <nav className="off-canvas-nav">
                        <ul className="mobile-menu menu-block-2">
                            <li className="menu-item-has-children">
                                <Link to="#">Currency - USD $ <i className="fas fa-angle-down"></i></Link>
                                <ul className="sub-menu">
                                    <li> <Link to="cart.html">USD $</Link></li>
                                    <li> <Link to="checkout.html">EUR €</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link to="#">Lang - Eng<i className="fas fa-angle-down"></i></Link>
                                <ul className="sub-menu">
                                    <li>Eng</li>
                                    <li>Ban</li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link to="#">My Account <i className="fas fa-angle-down"></i></Link>
                                <ul className="sub-menu">
                                    <li><Link to="#">My Account</Link></li>
                                    <li><Link to="#">Order History</Link></li>
                                    <li><Link to="#">Transactions</Link></li>
                                    <li><Link to="#">Downloads</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="off-canvas-bottom">
                        <div className="contact-list mb--10">
                            <Link to="#" className="sin-contact"><i className="fas fa-mobile-alt"></i>(12345) 78790220</Link>
                            <Link to="#" className="sin-contact"><i className="fas fa-envelope"></i>examle@handart.com</Link>
                        </div>
                        <div className="off-canvas-social">
                            <Link to="#" className="single-icon"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="#" className="single-icon"><i className="fab fa-twitter"></i></Link>
                            <Link to="#" className="single-icon"><i className="fas fa-rss"></i></Link>
                            <Link to="#" className="single-icon"><i className="fab fa-youtube"></i></Link>
                            <Link to="#" className="single-icon"><i className="fab fa-google-plus-g"></i></Link>
                            <Link to="#" className="single-icon"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </aside>
           
        </div>
        </div>
    )
}

export default HeaderMobile;