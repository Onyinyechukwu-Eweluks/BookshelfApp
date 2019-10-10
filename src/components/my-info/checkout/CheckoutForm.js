import React, {Component} from 'react';

class CheckoutForm extends Component{
    render() {
        return(
            <div>
                <div class="checkout-form">
                      <div class="row row-40">
                        <div class="col-12">
                        <h1 class="quick-title">Checkout</h1>
                       
                       
                        <div class="checkout-quick-box">
                            <p><i class="far fa-sticky-note"></i>Returning customer? <a href="javascript:" class="slide-trigger" data-target="#quick-login">Click
                                here to login</a></p>
                        </div>
                        

                        <div class="checkout-slidedown-box" id="quick-login">
                            <form action="https://demo.hasthemes.com/smartbooks-v2/smartbook/">
                            <div class="quick-login-form">
                                <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new
                                customer
                                please
                                proceed to the Billing & Shipping section.</p>
                                <div class="form-group">
                                <label for="quick-user">Username or email *</label>
                                <input type="text" placeholder="" id="quick-user"/>
                                </div>
                                <div class="form-group">
                                <label for="quick-pass">Password *</label>
                                <input type="text" placeholder="" id="quick-pass"/>
                                </div>
                                <div class="form-group">
                                <div class="d-flex align-items-center flex-wrap">
                                    <a href="#" class="btn btn-outlined   mr-3">Login</a>
                                    <div class="d-inline-flex align-items-center">
                                    <input type="checkbox" id="accept_terms" class="mb-0 mr-1"/>
                                    <label for="accept_terms" class="mb-0">I’ve read and accept the terms &amp; conditions</label>
                                    </div>
                                </div>
                                <p><a href="javascript:" class="pass-lost mt-3">Lost your password?</a></p>
                                </div>
                            </div>
                            </form>
                        </div>
                    
                    
                        <div class="checkout-quick-box">
                            <p><i class="far fa-sticky-note"></i>Have a coupon? <a href="javascript:" class="slide-trigger" data-target="#quick-cupon">
                                Click here to enter your code</a></p>
                        </div>
                     

                        <div class="checkout-slidedown-box" id="quick-cupon">
                            <form action="https://demo.hasthemes.com/smartbooks-v2/smartbook/">
                            <div class="checkout_coupon">
                                <input type="text" class="mb-0" placeholder="Coupon Code"/>
                                <a href="#" class="btn btn-outlined">Apply coupon</a>
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
