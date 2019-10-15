import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartTotal from './CartTotal'


class BillingAdd extends Component{
    render() {
        return(
            <div>
                <div className="checkout-form">
                    <Row>
                        <Col>
                    
                            <div id="billing-form" className="mb-40">
                                <h4 className="checkout-title">Billing Address</h4>
                                <div className="row">
                                    <div className="col-md-6 col-12 mb--20">
                                        <label>First Name*</label>
                                        <input type="text" placeholder="First Name"/>
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                        <label>Last Name*</label>
                                        <input type="text" placeholder="Last Name"/>
                                        </div>
                                        <div className="col-12 mb--20">
                                        <label>Company Name</label>
                                        <input type="text" placeholder="Company Name"/>
                                        </div>
                                        <div className="col-12 col-12 mb--20">
                                        <label>Country*</label>
                                        <select className="nice-select">
                                            <option>Bangladesh</option>
                                            <option>China</option>
                                            <option>country</option>
                                            <option>India</option>
                                            <option>Japan</option>
                                        </select>
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                        <label>Email Address*</label>
                                        <input type="email" placeholder="Email Address"/>
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                        <label>Phone no*</label>
                                        <input type="text" placeholder="Phone number"/>
                                        </div>
                                        <div className="col-12 mb--20">
                                        <label>Address*</label>
                                        <input type="text" placeholder="Address line 1"/>
                                        <input type="text" placeholder="Address line 2"/>
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                        <label>Town/City*</label>
                                        <input type="text" placeholder="Town/City"/>
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                        <label>State*</label>
                                        <input type="text" placeholder="State"/>
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                        <label>Zip Code*</label>
                                        <input type="text" placeholder="Zip Code"/>
                                        </div>
                                        <div className="col-12 mb--20 ">
                                        <div className="block-border check-bx-wrapper">
                                            <div className="check-box">
                                            <input type="checkbox" id="create_account"/>
                                            <label for="create_account">Create an Acount?</label>
                                            </div>
                                            <div className="check-box">
                                            <input type="checkbox" id="shiping_address" data-shipping/>
                                            <label for="shiping_address">Ship to Different Address</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="order-note-block mt--30">
                                <label for="order-note">Order notes</label>
                                <textarea id="order-note" cols="30" rows="10" className="order-note" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                            </div>
                        </Col>
                        <Col>
                        <CartTotal />
                        </Col>
                       
                       
                        
                    </Row>
            

                </div>
            </div>
        )
    }
}

export default BillingAdd;