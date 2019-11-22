import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


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

            <Container>
                <Row>
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
            </Row>
            </Container>
            
            </main>
    </div>
    )
}

export default Cart;