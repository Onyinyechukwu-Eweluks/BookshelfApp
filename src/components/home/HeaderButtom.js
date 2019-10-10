import React from 'react';
import { Link } from 'react-router-dom';


function HeaderButtom () {
    return(
        <div className="header-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
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
                        <div className="col-lg-3">
                            <div className="header-phone ">
                                <div className="icon">
                                    <i className="fas fa-headphones-alt"></i>
                                </div>
                                <div className="text">
                                    <p>Free Support 24/7</p>
                                    <p className="font-weight-bold number">+01-202-555-0181</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-navigation flex-lg-right">
                                <ul className="main-menu menu-right li-last-0">
                                    <li className="menu-item ">
                                        <Link to="/">Home </Link>
                                        
                                    </li>
                                    


                                    <li className="menu-item ">
                                        <Link to="/product">products </Link>
                                        
                                    </li>
                                   
                                    <li className="menu-item has-children">
                                        <Link to="javascript:void(0)">My-Info <i
                                                className="fas fa-chevron-down dropdown-arrow"></i></Link>
                                        <ul className="sub-menu">
                                            <li> <Link to="/cart">Cart</Link></li>
                                            <li> <Link to="/checkout">Checkout</Link></li>
                                            <li> <Link to="compare.html">Compare</Link></li>
                                            <li> <Link to="wishlist.html">Wishlist</Link></li>
                                            <li> <Link to="login-register.html">Login Register</Link></li>
                                            <li> <Link to="my-account.html">My Account</Link></li>
                                        </ul>
                                    </li>
                                    


                                    <li className="menu-item has-children mega-menu">
                                        <Link to="javascript:void(0)">Blog <i
                                                className="fas fa-chevron-down dropdown-arrow"></i></Link>
                                        <ul className="sub-menu three-column">
                                            <li className="cus-col-33">
                                                <h3 className="menu-title"><Link to="javascript:void(0)">Blog Grid</Link></h3>
                                                <ul className="mega-single-block">
                                                    <li><Link to="blog.html">Full Widh (Default)</Link></li>
                                                    <li><Link to="blog-left-sidebar.html">left Sidebar</Link></li>
                                                    <li><Link to="blog-right-sidebar.html">Right Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li className="cus-col-33">
                                                <h3 className="menu-title"><Link to="javascript:void(0)">Blog List </Link></h3>
                                                <ul className="mega-single-block">
                                                     <li><Link to="blog-list.html">Full Widh (Default)</Link></li> 
                                                    <li><Link to="blog-list-left-sidebar.html">left Sidebar</Link></li>
                                                    <li><Link to="blog-list-right-sidebar.html">Right Sidebar</Link></li>
                                             </ul>
                                            </li>
                                            <li className="cus-col-33">
                                                <h3 className="menu-title"><Link to="javascript:void(0)">Blog Details</Link>
                                                </h3>
                                                <ul className="mega-single-block">
                                                    <li><Link to="blog-details.html">Image Format (Default)</Link></li>
                                                    <li><Link to="blog-details-gallery.html">Gallery Format</Link></li>
                                                    <li><Link to="blog-details-audio.html">Audio Format</Link></li>
                                                    <li><Link to="blog-details-video.html">Video Format</Link></li>
                                                    <li><Link to="blog-details-left-sidebar.html">left Sidebar</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="contact.html">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    )
}

export default HeaderButtom;