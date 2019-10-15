import React, {Component} from 'react';

class CheckoutForm extends Component{
    render() {
        return(
            <div>
                <div className="checkout-form">
                    <div className="row row-40">
                        <div className="col-12">
                            <h1 className="quick-title">Checkout</h1>
                        
                        
                            <div className="checkout-quick-box">
                                <p><i className="far fa-sticky-note"></i>Returning customer? <a href="javascript:" className="slide-trigger" data-target="#quick-login">Click
                                    here to login</a></p>
                            </div>
                            

                            <div className="checkout-slidedown-box" id="quick-login">
                                <form action="https://demo.hasthemes.com/smartbooks-v2/smartbook/">
                                <div className="quick-login-form">
                                    <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new
                                    customer
                                    please
                                    proceed to the Billing & Shipping section.</p>
                                    <div className="form-group">
                                    <label for="quick-user">Username or email *</label>
                                    <input type="text" placeholder="" id="quick-user"/>
                                    </div>
                                    <div className="form-group">
                                    <label for="quick-pass">Password *</label>
                                    <input type="text" placeholder="" id="quick-pass"/>
                                    </div>
                                    <div className="form-group">
                                    <div className="d-flex align-items-center flex-wrap">
                                        <a href="#" className="btn btn-outlined   mr-3">Login</a>
                                        <div className="d-inline-flex align-items-center">
                                        <input type="checkbox" id="accept_terms" className="mb-0 mr-1"/>
                                        <label for="accept_terms" className="mb-0">I’ve read and accept the terms &amp; conditions</label>
                                        </div>
                                    </div>
                                    <p><a href="javascript:" className="pass-lost mt-3">Lost your password?</a></p>
                                    </div>
                                </div>
                                </form>
                            </div>
                        
                        
                            <div className="checkout-quick-box">
                                <p><i className="far fa-sticky-note"></i>Have a coupon? <a href="javascript:" className="slide-trigger" data-target="#quick-cupon">
                                    Click here to enter your code</a></p>
                            </div>
                        

                            <div className="checkout-slidedown-box" id="quick-cupon">
                                <form action="https://demo.hasthemes.com/smartbooks-v2/smartbook/">
                                <div className="checkout_coupon">
                                    <input type="text" className="mb-0" placeholder="Coupon Code"/>
                                    <a href="#" className="btn btn-outlined">Apply coupon</a>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutForm;
