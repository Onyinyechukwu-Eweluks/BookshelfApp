import React from 'react';

function FixedHeader() {
    return(
        <div>
            <div className="sticky-init fixed-header common-sticky">
                <div className="container d-none d-lg-block">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <a href="index.html" className="site-brand">
                                <img src="image/logo.png" alt=""/>
                            </a>
                        </div>
                        <div className="col-lg-8">
                            <div className="main-navigation flex-lg-right">
                                <ul className="main-menu menu-right ">
                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0)">Home <i
                                                className="fas fa-chevron-down dropdown-arrow"></i></a>
                                        
                                    </li>
                                   

                                    <li className="menu-item has-children mega-menu">
                                        <a href="javascript:void(0)">products <i
                                                className="fas fa-chevron-down dropdown-arrow"></i></a>
                                        <ul className="sub-menu four-column">
                                            <li className="cus-col-25">
                                                <h3 className="menu-title"><a href="javascript:void(0)">Shop Grid </a></h3>
                                                <ul className="mega-single-block">
                                                    <li><a href="shop-grid.html">Fullwidth</a></li>
                                                    <li><a href="shop-grid-left-sidebar.html">left Sidebar</a></li>
                                                    <li><a href="shop-grid-right-sidebar.html">Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="cus-col-25">
                                                <h3 className="menu-title"> <a href="javascript:void(0)">Shop List</a></h3>
                                                <ul className="mega-single-block">
                                                    <li><a href="shop-list.html">Fullwidth</a></li>
                                                    <li><a href="shop-list-left-sidebar.html">left Sidebar</a></li>
                                                    <li><a href="shop-list-right-sidebar.html">Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="cus-col-25">
                                                <h3 className="menu-title"> <a href="javascript:void(0)">Product Details 1</a>
                                                </h3>
                                                <ul className="mega-single-block">
                                                    <li><a href="product-details.html">Product Details Page</a></li>
                                                    <li><a href="product-details-affiliate.html">Product Details
                                                            Affiliate</a></li>
                                                    <li><a href="product-details-group.html">Product Details Group</a></li>
                                                    <li><a href="product-details-variable.html">Product Details
                                                            Variables</a></li>
                                                </ul>
                                            </li>
                                            <li className="cus-col-25">
                                                <h3 className="menu-title"><a href="javascript:void(0)">Product Details 2</a>
                                                </h3>
                                                <ul className="mega-single-block">
                                                    <li><a href="product-details-left-thumbnail.html">left Thumbnail</a>
                                                    </li>
                                                    <li><a href="product-details-right-thumbnail.html">Right Thumbnail</a>
                                                    </li>
                                                    <li><a href="product-details-left-gallery.html">Left Gallery</a></li>
                                                    <li><a href="product-details-right-gallery.html">Right Gallery</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    

                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0)">My-Info <i
                                                className="fas fa-chevron-down dropdown-arrow"></i></a>
                                        <ul className="sub-menu">
                                            <li> <a href="cart.html">Cart</a></li>
                                            <li> <a href="checkout.html">Checkout</a></li>
                                            <li> <a href="compare.html">Compare</a></li>
                                            <li> <a href="wishlist.html">Wishlist</a></li>
                                            <li> <a href="login-register.html">Login Register</a></li>
                                            <li> <a href="my-account.html">My Account</a></li>
                                        </ul>
                                    </li>
                                  
                                  
                                    <li className="menu-item has-children mega-menu">
                                        <a href="javascript:void(0)">Blog <i
                                                className="fas fa-chevron-down dropdown-arrow"></i></a>
                                        <ul className="sub-menu three-column">
                                            <li className="cus-col-33">
                                                <h3 className="menu-title"><a href="javascript:void(0)">Blog Grid</a></h3>
                                                <ul className="mega-single-block">
                                                    <li><a href="blog.html">Full Widh (Default)</a></li>
                                                    <li><a href="blog-left-sidebar.html">left Sidebar</a></li>
                                                    <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="cus-col-33">
                                                <h3 className="menu-title"><a href="javascript:void(0)">Blog List </a></h3>
                                                <ul className="mega-single-block">
                                                     <li><a href="blog-list.html">Full Widh (Default)</a></li> 
                                                    <li><a href="blog-list-left-sidebar.html">left Sidebar</a></li>
                                                    <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="cus-col-33">
                                                <h3 className="menu-title"><a href="javascript:void(0)">Blog Details</a></h3>
                                                <ul className="mega-single-block">
                                                    <li><a href="blog-details.html">Image Format (Default)</a></li>
                                                    <li><a href="blog-details-gallery.html">Gallery Format</a></li>
                                                    <li><a href="blog-details-audio.html">Audio Format</a></li>
                                                    <li><a href="blog-details-video.html">Video Format</a></li>
                                                    <li><a href="blog-details-left-sidebar.html">left Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="contact.html">Contact</a>
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