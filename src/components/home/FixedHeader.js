import React from 'react';
import { Link } from 'react-router-dom';

function FixedHeader() {
    return(
        <div>
            <div className="sticky-init fixed-header common-sticky">
                <div className="container d-none d-lg-block">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <Link to="index.html" className="site-brand">
                                <img src="image/logo.png" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-8">
                            <div className="main-navigation flex-lg-right">
                                <ul className="main-menu menu-right ">
                                    <li className="menu-item ">
                                        <Link to="/home">Home </Link>
                                        
                                    </li>
                                   

                                    <li className="menu-item ">
                                        <Link to= '/product'>products </Link>
                                        
                                    </li>
                                    

                                    <li className="menu-item has-children">
                                        <Link to="javascript:void(0)">My-Info <i
                                                className="fas fa-chevron-down dropdown-arrow"></i></Link>
                                        <ul className="sub-menu">
                                            <li> <Link to="/cart">Cart</Link></li>
                                            <li> <Link to="/checkout">Checkout</Link></li>
                                            <li> <Link to="/compare">Compare</Link></li>
                                            <li> <Link to="/wishlist">Wishlist</Link></li>
                                            <li> <Link to="/my-account">My Account</Link></li>
                                        </ul>
                                    </li>
                                  
                                  
                                    <li className="menu-item ">
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
        </div>

    )
}

export default FixedHeader;