import React from 'react';

function Cart() {
    return(
    <div>
        <section className="breadcrumb-section">
            <h2 className="sr-only">Site Breadcrumb</h2>
            <div className="container">
                <div className="breadcrumb-contents">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">Cart</li>
                    </ol>
                </nav>
                </div>
            </div>
            </section>
           

            <main className="cart-page-main-block inner-page-sec-padding-bottom">
            <div className="cart_area cart-area-padding  ">
                <div className="container">
                <div className="page-section-title">
                    <h1>Shopping Cart</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                    <form action="#" className="">
                        

                        <div className="cart-table table-responsive mb--40">
                        <table className="table">
                            

                            <thead>
                            <tr>
                                <th className="pro-remove"></th>
                                <th className="pro-thumbnail">Image</th>
                                <th className="pro-title">Product</th>
                                <th className="pro-price">Price</th>
                                <th className="pro-quantity">Quantity</th>
                                <th className="pro-subtotal">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            

                            <tr>
                                <td className="pro-remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                                <td className="pro-thumbnail"><a href="#"><img src="image/products/product-1.jpg" alt="Product"/></a></td>
                                <td className="pro-title"><a href="#">Rinosin Glasses</a></td>
                                <td className="pro-price"><span>$395.00</span></td>
                                <td className="pro-quantity">
                                <div className="pro-qty">
                                    <div className="count-input-block">
                                    <input type="number" className="form-control text-center" value="1"/>
                                    </div>
                                </div>
                                </td>
                                <td className="pro-subtotal"><span>$395.00</span></td>
                            </tr>
                            

                            <tr>
                                <td className="pro-remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                                <td className="pro-thumbnail"><a href="#"><img src="image/products/product-2.jpg" alt="Product"/></a></td>
                                <td className="pro-title"><a href="#">Rinosin Glasses</a></td>
                                <td className="pro-price"><span>$395.00</span></td>
                                <td className="pro-quantity">
                                <div className="pro-qty">
                                    <div className="count-input-block">
                                    <input type="number" className="form-control text-center" value="1"/>
                                    </div>
                                </div>
                                </td>
                                <td className="pro-subtotal"><span>$395.00</span></td>
                            </tr>
                            

                            <tr>
                                <td colspan="6" className="actions">
                                <div className="coupon-block">
                                    <div className="coupon-text">
                                    <label for="coupon_code">Coupon:</label>
                                    <input type="text" name="coupon_code" className="input-text" id="coupon_code" value="" placeholder="Coupon code"/>
                                    </div>
                                    <div className="coupon-btn">
                                    <input type="submit" className="btn btn-outlined" name="apply_coupon" value="Apply coupon"/>
                                    </div>
                                </div>
                                <div className="update-block text-right">
                                    <input type="submit" className="btn btn-outlined" name="update_cart" value="Update cart"/>
                                    <input type="hidden" id="_wpnonce" name="_wpnonce" value="05741b501f"/><input type="hidden" name="_wp_http_referer" value="/petmark/cart/"/>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="cart-section-2">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 mb--30 mb-lg--0">
                    

                    <div className="cart-block-title">
                        <h2>YOU MAY BE INTERESTED IN…</h2>
                    </div>
                    <div className="product-slider sb-slick-slider" data-slick-setting='{
                                            "autoplay": true,
                                            "autoplaySpeed": 8000,
                                            "slidesToShow": 2
                                            }' data-slick-responsive='[
                        {"breakpoint":992, "settings": {"slidesToShow": 2} },
                        {"breakpoint":768, "settings": {"slidesToShow": 3} },
                        {"breakpoint":575, "settings": {"slidesToShow": 2} },
                        {"breakpoint":480, "settings": {"slidesToShow": 1} },
                        {"breakpoint":320, "settings": {"slidesToShow": 1} }
                    ]'>
                        <div className="single-slide">
                        <div className="product-card">
                            <div className="product-header">
                            <span className="author">
                                                        Lpple
                                                    </span>
                            <h3><a href="product-details.html">Revolutionize Your BOOK With These Easy-peasy Tips</a></h3>
                            </div>
                            <div className="product-card--body">
                            <div className="card-image">
                                <img src="image/products/product-10.jpg" alt=""/>
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
                        </div>
                        <div className="single-slide">
                        <div className="product-card">
                            <div className="product-header">
                            <span className="author">
                                                        Jpple
                                                    </span>
                            <h3><a href="product-details.html">Turn Your BOOK Into High Machine</a></h3>
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
                        </div>
                        <div className="single-slide">
                        <div className="product-card">
                            <div className="product-header">
                            <span className="author">
                                                        Wpple
                                                    </span>
                            <h3><a href="product-details.html">3 Ways Create Better BOOK With</a></h3>
                            </div>
                            <div className="product-card--body">
                            <div className="card-image">
                                <img src="image/products/product-3.jpg" alt=""/>
                                <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                    <img src="image/products/product-2.jpg" alt=""/>
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
                        </div>
                        <div className="single-slide">
                        <div className="product-card">
                            <div className="product-header">
                            <span className="author">
                                                        Epple
                                                    </span>
                            <h3><a href="product-details.html">What You Can Learn From Bill Gates</a></h3>
                            </div>
                            <div className="product-card--body">
                            <div className="card-image">
                                <img src="image/products/product-5.jpg" alt=""/>
                                <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                    <img src="image/products/product-4.jpg" alt=""/>
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
                        </div>
                        <div className="single-slide">
                        <div className="product-card">
                            <div className="product-header">
                            <span className="author">
                                                        Hpple
                                                    </span>
                            <h3><a href="product-details.html">Simple Things You To Save BOOK</a></h3>
                            </div>
                            <div className="product-card--body">
                            <div className="card-image">
                                <img src="image/products/product-6.jpg" alt=""/>
                                <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                    <img src="image/products/product-4.jpg" alt=""/>
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
                        </div>
                    </div>
                    </div>
                    

                    <div className="col-lg-6 col-12 d-flex">
                    <div className="cart-summary">
                        <div className="cart-summary-wrap">
                        <h4><span>Cart Summary</span></h4>
                        <p>Sub Total <span className="text-primary">$1250.00</span></p>
                        <p>Shipping Cost <span className="text-primary">$00.00</span></p>
                        <h2>Grand Total <span className="text-primary">$1250.00</span></h2>
                        </div>
                        <div className="cart-summary-button">
                        <a href="checkout.html" className="checkout-btn c-btn btn--primary">Checkout</a>
                        <button className="update-btn c-btn btn-outlined">Update Cart</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </main>
    </div>
    )
}

export default Cart;