import React, {Component} from 'react'

class CartTotal extends Component{
    render() {
        return(
            <div>
                 
                    <div className="row">
                        

                        <div className="col-12">
                        <div className="checkout-cart-total">
                            <h2 className="checkout-title">YOUR ORDER</h2>
                            <h4>Product <span>Total</span></h4>
                            <ul>
                            <li><span className="left">Cillum dolore tortor nisl X 01</span> <span className="right">$25.00</span></li>
                            <li><span className="left">Auctor gravida pellentesque X 02 </span><span className="right">$50.00</span></li>
                            <li><span className="left">Condimentum posuere consectetur X 01</span> <span className="right">$29.00</span></li>
                            <li><span className="left">Habitasse dictumst elementum X 01</span> <span className="right">$10.00</span></li>
                            </ul>
                            <p>Sub Total <span>$104.00</span></p>
                            <p>Shipping Fee <span>$00.00</span></p>
                            <h4>Grand Total <span>$104.00</span></h4>
                            <div className="method-notice mt--25">
                            <article>
                                <h3 className="d-none sr-only">blog-article</h3>
                                Sorry, it seems that there are no available payment methods for your state. Please contact us if you
                                require
                                assistance
                                or wish to make alternate arrangements.
                            </article>
                            </div>
                            <div className="term-block">
                            <input type="checkbox" id="accept_terms2"/>
                            <label for="accept_terms2">I’ve read and accept the terms & conditions</label>
                            </div>
                            <button className="place-order w-100">Place order</button>
                        </div>
                        </div>
                    </div>
                </div>
         
        )   
    }
}

export default CartTotal;