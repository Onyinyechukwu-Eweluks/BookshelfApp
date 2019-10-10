import React from 'react';

function MainProduct () {
    return(
        <div>
<<<<<<< HEAD
              <main className="inner-page-sec-padding-bottom">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-9">
                        <div className="shop-toolbar with-sidebar mb--30">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-2 col-sm-6">
                           

                            <div className="product-view-mode">
                                <a href="#" className="sorting-btn" data-target="grid"><i className="fas fa-th"></i></a>
                                <a href="#" className="sorting-btn" data-target="grid-four">
                                <span className="grid-four-icon">
                        <i className="fas fa-grip-vertical"></i><i className="fas fa-grip-vertical"></i>
                    </span>
                                </a>
                                <a href="#" className="sorting-btn  active" data-target="list"><i className="fas fa-list"></i></a>
                            </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6  mt--10 mt-sm--0">
                            <span className="toolbar-status">
                    Showing 1 to 9 of 14 (2 Pages)
                </span>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6  mt--10 mt-md--0">
                            <div className="sorting-selection">
                                <span>Show:</span>
                                <select className="form-control nice-select sort-select">
                                <option value="" selected="selected">3</option>
                                <option value="">9</option>
                                <option value="">5</option>
                                <option value="">10</option>
                                <option value="">12</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-4 col-sm-6 mt--10 mt-md--0 ">
                            <div className="sorting-selection">
                                <span>Sort By:</span>
                                <select className="form-control nice-select sort-select mr-0 wide">
                                <option value="" selected="selected">Default Sorting</option>
                                <option value="">Sort
                                    By:Name (A - Z)</option>
                                <option value="">Sort
                                    By:Name (Z - A)</option>
                                <option value="">Sort
                                    By:Price (Low &gt; High)</option>
                                <option value="">Sort
                                    By:Price (High &gt; Low)</option>
                                <option value="">Sort
                                    By:Rating (Highest)</option>
                                <option value="">Sort
                                    By:Rating (Lowest)</option>
                                <option value="">Sort
                                    By:Model (A - Z)</option>
                                <option value="">Sort
                                    By:Model (Z - A)</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="shop-toolbar d-none">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-2 col-sm-6">
                          

                            <div className="product-view-mode">
                                <a href="#" className="sorting-btn active" data-target="grid"><i className="fas fa-th"></i></a>
                                <a href="#" className="sorting-btn" data-target="grid-four">
                                <span className="grid-four-icon">
                        <i className="fas fa-grip-vertical"></i><i className="fas fa-grip-vertical"></i>
                    </span>
                                </a>
                                <a href="#" className="sorting-btn" data-target="list "><i className="fas fa-list"></i></a>
                            </div>
                            </div>
                            <div className="col-xl-5 col-md-4 col-sm-6  mt--10 mt-sm--0">
                            <span className="toolbar-status">
                    Showing 1 to 9 of 14 (2 Pages)
                </span>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6  mt--10 mt-md--0">
                            <div className="sorting-selection">
                                <span>Show:</span>
                                <select className="form-control nice-select sort-select">
                                <option value="" selected="selected">3</option>
                                <option value="">9</option>
                                <option value="">5</option>
                                <option value="">10</option>
                                <option value="">12</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mt--10 mt-md--0 ">
                            <div className="sorting-selection">
                                <span>Sort By:</span>
                                <select className="form-control nice-select sort-select mr-0">
                                <option value="" selected="selected">Default Sorting</option>
                                <option value="">Sort
                                    By:Name (A - Z)</option>
                                <option value="">Sort
                                    By:Name (Z - A)</option>
                                <option value="">Sort
                                    By:Price (Low &gt; High)</option>
                                <option value="">Sort
                                    By:Price (High &gt; Low)</option>
                                <option value="">Sort
                                    By:Rating (Highest)</option>
                                <option value="">Sort
                                    By:Rating (Lowest)</option>
                                <option value="">Sort
                                    By:Model (A - Z)</option>
                                <option value="">Sort
                                    By:Model (Z - A)</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="shop-product-wrap list with-pagination row space-db--30 shop-border">
                        <div className="col-lg-4 col-sm-6">
                            <div className="product-card card-style-list">
                            <div className="product-grid-content">
                                <div className="product-header">
                                <a href="#" className="author">
                                    Epple
                                </a>
                                <h3><a href="product-details.html">Here Is A Quick Cure For Book</a></h3>
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
                                        <a href="#" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                            <div className="product-list-content">
                                <div className="card-image">
                                <img src="image/products/product-3.jpg" alt=""/>
                                </div>
                                <div className="product-card--body">
                                <div className="product-header">
                                    <a href="#" className="author">
                                    Gpple
                                    </a>
                                    <h3><a href="product-details.html" tabindex="0">Qpple cPad with Retina Display MD510LL/A</a></h3>
                                </div>
                                <article>
                                    <h2 className="sr-only">Card List Article</h2>
                                    <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic
                                    lets you enjoy
                                    up to 40,000 songs or..</p>
                                </article>
                                <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                </div>
                                <div className="rating-block">
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star "></span>
                                </div>
                                <div className="btn-block">
                                    <a href="#" className="btn btn-outlined">Add To Cart</a>
                                    <a href="#" className="card-link"><i className="fas fa-heart"></i> Add To Wishlist</a>
                                    <a href="#" className="card-link"><i className="fas fa-random"></i> Add To Cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="product-card card-style-list">
                            <div className="product-grid-content">
                                <div className="product-header">
                                <a href="#" className="author">
                                    Lpple
                                </a>
                                <h3><a href="product-details.html">Simple Things You To Save BOOK</a></h3>
                                </div>
                                <div className="product-card--body">
                                <div className="card-image">
                                    <img src="image/products/product-4.jpg" alt=""/>
                                    <div className="hover-contents">
                                    <a href="product-details.html" className="hover-image">
                                        <img src="image/products/product-5.jpg" alt=""/>
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
                                        <a href="#" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                            <div className="product-list-content">
                                <div className="card-image">
                                <img src="image/products/product-6.jpg" alt=""/>
                                </div>
                                <div className="product-card--body">
                                <div className="product-header">
                                    <a href="#" className="author">
                                    fpple
                                    </a>
                                    <h3><a href="product-details.html" tabindex="0">Apple iPad with Retina Display MD510LL/A</a></h3>
                                </div>
                                <article>
                                    <h2 className="sr-only">Card List Article</h2>
                                    <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic
                                    lets you enjoy
                                    up to 40,000 songs or..</p>
                                </article>
                                <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                </div>
                                <div className="rating-block">
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star "></span>
                                </div>
                                <div className="btn-block">
                                    <a href="#" className="btn btn-outlined">Add To Cart</a>
                                    <a href="#" className="card-link"><i className="fas fa-heart"></i> Add To Wishlist</a>
                                    <a href="#" className="card-link"><i className="fas fa-random"></i> Add To Cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="product-card card-style-list">
                            <div className="product-grid-content">
                                <div className="product-header">
                                <a href="#" className="author">
                                    Cpple
                                </a>
                                <h3><a href="product-details.html">3 Ways Create Better BOOK With</a></h3>
                                </div>
                                <div className="product-card--body">
                                <div className="card-image">
                                    <img src="image/products/product-7.jpg" alt=""/>
                                    <div className="hover-contents">
                                    <a href="product-details.html" className="hover-image">
                                        <img src="image/products/product-8.jpg" alt=""/>
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
                                        <a href="#" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                            <div className="product-list-content">
                                <div className="card-image">
                                <img src="image/products/product-7.jpg" alt=""/>
                                </div>
                                <div className="product-card--body">
                                <div className="product-header">
                                    <a href="#" className="author">
                                    Apple
                                    </a>
                                    <h3><a href="product-details.html" tabindex="0">Apple iPad with Retina Display MD510LL/A</a></h3>
                                </div>
                                <article>
                                    <h2 className="sr-only">Card List Article</h2>
                                    <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic
                                    lets you enjoy
                                    up to 40,000 songs or..</p>
                                </article>
                                <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                </div>
                                <div className="rating-block">
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star "></span>
                                </div>
                                <div className="btn-block">
                                    <a href="#" className="btn btn-outlined">Add To Cart</a>
                                    <a href="#" className="card-link"><i className="fas fa-heart"></i> Add To Wishlist</a>
                                    <a href="#" className="card-link"><i className="fas fa-random"></i> Add To Cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="product-card card-style-list">
                            <div className="product-grid-content">
                                <div className="product-header">
                                <a href="#" className="author">
                                    Rpple
                                </a>
                                <h3><a href="product-details.html">Simple Things You To Save BOOK</a></h3>
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
                                        <a href="#" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                            <div className="product-list-content">
                                <div className="card-image">
                                <img src="image/products/product-8.jpg" alt=""/>
                                </div>
                                <div className="product-card--body">
                                <div className="product-header">
                                    <a href="#" className="author">
                                    Apple
                                    </a>
                                    <h3><a href="product-details.html" tabindex="0">Apple iPad with Retina Display MD510LL/A</a></h3>
                                </div>
                                <article>
                                    <h2 className="sr-only">Card List Article</h2>
                                    <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic
                                    lets you enjoy
                                    up to 40,000 songs or..</p>
                                </article>
                                <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                </div>
                                <div className="rating-block">
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star "></span>
                                </div>
                                <div className="btn-block">
                                    <a href="#" className="btn btn-outlined">Add To Cart</a>
                                    <a href="#" className="card-link"><i className="fas fa-heart"></i> Add To Wishlist</a>
                                    <a href="#" className="card-link"><i className="fas fa-random"></i> Add To Cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="product-card card-style-list">
                            <div className="product-grid-content">
                                <div className="product-header">
                                <a href="#" className="author">
                                    Gpple
                                </a>
                                <h3><a href="product-details.html">How Deal With Very Bad BOOK</a></h3>
                                </div>
                                <div className="product-card--body">
                                <div className="card-image">
                                    <img src="image/products/product-9.jpg" alt=""/>
                                    <div className="hover-contents">
                                    <a href="product-details.html" className="hover-image">
                                        <img src="image/products/product-10.jpg" alt=""/>
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
                                        <a href="#" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                            <div className="product-list-content">
                                <div className="card-image">
                                <img src="image/products/product-9.jpg" alt=""/>
                                </div>
                                <div className="product-card--body">
                                <div className="product-header">
                                    <a href="#" className="author">
                                    Apple
                                    </a>
                                    <h3><a href="product-details.html" tabindex="0">Apple iPad with Retina Display MD510LL/A</a></h3>
                                </div>
                                <article>
                                    <h2 className="sr-only">Card List Article</h2>
                                    <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic
                                    lets you enjoy
                                    up to 40,000 songs or..</p>
                                </article>
                                <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                </div>
                                <div className="rating-block">
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star "></span>
                                </div>
                                <div className="btn-block">
                                    <a href="#" className="btn btn-outlined">Add To Cart</a>
                                    <a href="#" className="card-link"><i className="fas fa-heart"></i> Add To Wishlist</a>
                                    <a href="#" className="card-link"><i className="fas fa-random"></i> Add To Cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="product-card card-style-list">
                            <div className="product-grid-content">
                                <div className="product-header">
                                <a href="#" className="author">
                                    Rtpple
                                </a>
                                <h3><a href="product-details.html">The Hidden Mystery Behind</a></h3>
                                </div>
                                <div className="product-card--body">
                                <div className="card-image">
                                    <img src="image/products/product-10.jpg" alt=""/>
                                    <div className="hover-contents">
                                    <a href="product-details.html" className="hover-image">
                                        <img src="image/products/product-9.jpg" alt=""/>
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
                                        <a href="#" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                            <div className="product-list-content">
                                <div className="card-image">
                                <img src="image/products/product-10.jpg" alt=""/>
                                </div>
                                <div className="product-card--body">
                                <div className="product-header">
                                    <a href="#" className="author">
                                    Apple
                                    </a>
                                    <h3><a href="product-details.html" tabindex="0">Apple iPad with Retina Display MD510LL/A</a></h3>
                                </div>
                                <article>
                                    <h2 className="sr-only">Card List Article</h2>
                                    <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic
                                    lets you enjoy
                                    up to 40,000 songs or..</p>
                                </article>
                                <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                </div>
                                <div className="rating-block">
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star "></span>
                                </div>
                                <div className="btn-block">
                                    <a href="#" className="btn btn-outlined">Add To Cart</a>
                                    <a href="#" className="card-link"><i className="fas fa-heart"></i> Add To Wishlist</a>
                                    <a href="#" className="card-link"><i className="fas fa-random"></i> Add To Cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="product-card card-style-list">
                            <div className="product-grid-content">
                                <div className="product-header">
                                <a href="#" className="author">
                                    Upple
                                </a>
                                <h3><a href="product-details.html">Little Known Ways To Rid Yourself</a></h3>
                                </div>
                                <div className="product-card--body">
                                <div className="card-image">
                                    <img src="image/products/product-11.jpg" alt=""/>
                                    <div className="hover-contents">
                                    <a href="product-details.html" className="hover-image">
                                        <img src="image/products/product-12.jpg" alt=""/>
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
                                        <a href="#" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                            <div className="product-list-content">
                                <div className="card-image">
                                <img src="image/products/product-11.jpg" alt=""/>
                                </div>
                                <div className="product-card--body">
                                <div className="product-header">
                                    <a href="#" className="author">
                                    Apple
                                    </a>
                                    <h3><a href="product-details.html" tabindex="0">Apple iPad with Retina Display MD510LL/A</a></h3>
                                </div>
                                <article>
                                    <h2 className="sr-only">Card List Article</h2>
                                    <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic
                                    lets you enjoy
                                    up to 40,000 songs or..</p>
                                </article>
                                <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                </div>
                                <div className="rating-block">
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star "></span>
                                </div>
                                <div className="btn-block">
                                    <a href="#" className="btn btn-outlined">Add To Cart</a>
                                    <a href="#" className="card-link"><i className="fas fa-heart"></i> Add To Wishlist</a>
                                    <a href="#" className="card-link"><i className="fas fa-random"></i> Add To Cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="product-card card-style-list">
                            <div className="product-grid-content">
                                <div className="product-header">
                                <a href="#" className="author">
                                    Bpple
                                </a>
                                <h3><a href="product-details.html">Qple GPad with Retina Sisplay</a></h3>
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
                                        <a href="#" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                            <div className="product-list-content">
                                <div className="card-image">
                                <img src="image/products/product-2.jpg" alt=""/>
                                </div>
                                <div className="product-card--body">
                                <div className="product-header">
                                    <a href="#" className="author">
                                    Apple
                                    </a>
                                    <h3><a href="product-details.html" tabindex="0">Apple iPad with Retina Display MD510LL/A</a></h3>
                                </div>
                                <article>
                                    <h2 className="sr-only">Card List Article</h2>
                                    <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic
                                    lets you enjoy
                                    up to 40,000 songs or..</p>
                                </article>
                                <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                </div>
                                <div className="rating-block">
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star star_on"></span>
                                    <span className="fas fa-star "></span>
                                </div>
                                <div className="btn-block">
                                    <a href="#" className="btn btn-outlined">Add To Cart</a>
                                    <a href="#" className="card-link"><i className="fas fa-heart"></i> Add To Wishlist</a>
                                    <a href="#" className="card-link"><i className="fas fa-random"></i> Add To Cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        

                        <div className="row pt--30">
                        <div className="col-md-12">
                            <div className="pagination-block">
                            <ul className="pagination-btns flex-center">
                                <li><a href="#" className="single-btn prev-btn ">|<i className="zmdi zmdi-chevron-left"></i> </a></li>
                                <li><a href="#" className="single-btn prev-btn "><i className="zmdi zmdi-chevron-left"></i> </a></li>
                                <li className="active"><a href="#" className="single-btn">1</a></li>
                                <li><a href="#" className="single-btn">2</a></li>
                                <li><a href="#" className="single-btn">3</a></li>
                                <li><a href="#" className="single-btn">4</a></li>
                                <li><a href="#" className="single-btn next-btn"><i className="zmdi zmdi-chevron-right"></i></a></li>
                                <li><a href="#" className="single-btn next-btn"><i className="zmdi zmdi-chevron-right"></i>|</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        

                        <div className="modal fade modal-quick-view" id="quickModal" tabindex="-1" role="dialog" aria-labelledby="quickModal" aria-hidden="true">
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
                                    

                                    <div className="mt--30 product-slider-nav sb-slick-slider arrow-type-two" data-slick-setting='{
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
                                        <p>Long printed dress with thin adjustable straps. V-neckline and wiring under the Dust with ruffles at the bottom
                                        of the
                                        dress.</p>
                                    </article>
                                    <div className="add-to-cart-row">
                                        <div className="count-input-block">
                                        <span className="widget-label">Qty</span>
                                        <input type="number" className="form-control text-center" value="1"/>
                                        </div>
                                        <div className="add-cart-btn">
                                        <a href="#" className="btn btn-outlined--primary"><span className="plus-icon">+</span>Add to Cart</a>
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
                    </div>
                    <div className="col-lg-3  mt--40 mt-lg--0">
                        <div className="inner-page-sidebar">
                       

                        <div className="single-block">
                            <h3 className="sidebar-title">Categories</h3>
                            <ul className="sidebar-menu--shop">
                            <li><a href="#">Accessories (5)</a></li>
                            <li><a href="#">Arts & Photography (10)</a></li>
                            <li><a href="#">Biographies (16)</a></li>
                            <li><a href="#">Business & Money (0)</a></li>
                            <li><a href="#">Calendars (6)</a></li>
                            <li><a href="#">Children's Books (9)</a></li>
                            <li><a href="#">Comics (16)</a></li>
                            <li><a href="#">Cookbooks (7)</a></li>
                            <li><a href="#">Education (3)</a></li>
                            <li><a href="#">House Plants (6)</a></li>
                            <li><a href="#">Indoor Living (9)</a></li>
                            <li><a href="#">Perfomance Filters (5)</a></li>
                            <li><a href="#">Shop (16)</a>
                                <ul className="inner-cat-items">
                                <li><a href="#">Saws (0)</a></li>
                                <li><a href="#">Concrete Tools (7)</a></li>
                                <li><a href="#">Drills (2)</a></li>
                                <li><a href="#">Sanders (1)</a></li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        

                        <div className="single-block">
                            <h3 className="sidebar-title">Fillter By Price</h3>
                            <div className="range-slider pt--30">
                            <div className="sb-range-slider"></div>
                            <div className="slider-price">
                                <p>
                                <input type="text" id="amount" readonly=""/>
                                </p>
                            </div>
                            </div>
                        </div>
                        

                        <div className="single-block">
                            <h3 className="sidebar-title">Manufacturer</h3>
                            <ul className="sidebar-menu--shop menu-type-2">
                            <li><a href="#">Christian Dior <span>(5)</span></a></li>
                            <li><a href="#">Diesel <span>(8)</span></a></li>
                            <li><a href="#">Ferragamo <span>(11)</span></a></li>
                            <li><a href="#">Hermes <span>(14)</span></a></li>
                            <li><a href="#">Louis Vuitton <span>(12)</span></a></li>
                            <li><a href="#">Tommy Hilfiger <span>(0)</span></a></li>
                            <li><a href="#">Versace <span>(0)</span></a></li>
                            </ul>
                        </div>
                       

                        <div className="single-block">
                            <h3 className="sidebar-title">Select By Color</h3>
                            <ul className="sidebar-menu--shop menu-type-2">
                            <li><a href="#">Black <span>(5)</span></a></li>
                            <li><a href="#">Blue <span>(6)</span></a></li>
                            <li><a href="#">Brown <span>(4)</span></a></li>
                            <li><a href="#">Green <span>(7)</span></a></li>
                            <li><a href="#">Pink <span>(6)</span></a></li>
                            <li><a href="#">Red <span>(5)</span></a></li>
                            <li><a href="#">White <span>(8)</span></a></li>
                            <li><a href="#">Yellow <span>(11)</span> </a></li>
                            </ul>
                        </div>
                        

                        <div className="single-block">
                            <a href="#" className="promo-image sidebar">
                            <img src="image/others/home-side-promo.jpg" alt=""/>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </main>
=======
>>>>>>> 9bcb82bd9172b5c1c44ca493378990738e65edbc
            
        </div>

    )
}

export default MainProduct;