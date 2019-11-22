import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Nav } from 'react-bootstrap'


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
                            
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" class="category-trigger">Browse categories              
                                </Dropdown.Toggle>
                               
                                <Dropdown.Menu>
                                    <Dropdown.Item class="cat-item has-children">
                                    <Link to="#">Arts & Photography</Link>
                                     
                                    
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                    <Link to="#">Biographies</Link>
                                        
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                    <Link to="#">Business & Money</Link>
                                        
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                    <Link to="#">Calendars</Link>
                                        
                                    </Dropdown.Item>
                                    <Dropdown.Item><Link to="#">Children's Books</Link>
                                        
                                    </Dropdown.Item>
                                    <Dropdown.Item><Link to="#">Comics</Link>
                                        
                                    </Dropdown.Item>
                                    <Dropdown.Item><Link to="#">Perfomance Filters</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="#">Cookbooks</Link>
                                        
                                    </Dropdown.Item>
                                    <Dropdown.Item><Link to="#">Accessories</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="#">Education</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="#">Indoor Living</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to="#" className="js-expand-hidden-menu">More
                                            Categories</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </nav>
                        </div>
                        <div className="col-md-3 col-5  order-md-3 text-right">
                            <div className="mobile-header-btns header-top-widget">
                                <ul className="header-links">
                                    <li className="sin-link">
                                        <Link to="/cart" className="cart-link link-icon"><i className="ion-bag"></i></Link>
                                    </li>
                                    <li className="sin-link">
                                        <Link to="#" className="link-icon hamburgur-icon off-canvas-btn"><i
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
                        <Nav defaultActiveKey="/" as="ul" className="off-canvas-nav flex-column mobile-menu main-mobile-menu">
                            <Nav.Item as="li" className="menu-item-has-children">
                                <Link to="/">Home</Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="menu-item-has-children">
                                <Link to="/product">Products</Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="menu-item-has-children">
                                <Link to="#">My-Info</Link>
                                        <ul className="sub-menu">
                                            <li> <Link to="/cart">Cart</Link></li>
                                            <li> <Link to="/checkout">Checkout</Link></li>
                                            <li> <Link to="/compare">Compare</Link></li>
                                            <li> <Link to="/wishlist">Wishlist</Link></li>
                                            <li> <Link to="/loginregister">Login/Register</Link></li>
                                            <li> <Link to="/my-account">My Account</Link></li>
                                        </ul>
                            </Nav.Item>
                            <Nav.Item as="li" className="menu-item-has-children">
                                <Link to="/blog">Blog</Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="menu-item-has-children">
                                <Link to="/contact">Contact</Link>
                            </Nav.Item>
                        </Nav>
                       
                        
                        
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