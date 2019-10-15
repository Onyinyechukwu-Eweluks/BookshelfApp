import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'



function HeaderButtom () {
    return(
        <div className="header-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
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
                                            <li> <Link to="/compare">Compare</Link></li>
                                            <li> <Link to="/whishlist">Wishlist</Link></li>
                                            <li> <Link to="/my-account">My Account</Link></li>
                                        </ul>
                                    </li>
                                    


                                    <li className="menu-item has-children mega-menu">
                                        <Link to="/blog">Blog </Link>
                                       
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/contact">Contact</Link>
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