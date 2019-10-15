import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartTotal from './CartTotal'
import Button from 'react-bootstrap/Button'


class BillingAdd extends Component{
    state = {
        Firstname: "",
        Lastname: "",
        Companyname: "",
        Email: "",
        Phone: "",
        Address1: "",
        Address2: "",
        Town: "",
        State: "",
        ZipCode: "",

    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault();


    }
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
                                            <input type="text" placeholder="First Name" name= "Firstname" value= {this.state.Firstname} onChange= {e => this.handleChange(e)}/>
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Last Name*</label>
                                            <input type="text" placeholder="Last Name" value= {this.state.Lastname} onChange= {e => this.handleChange(e)}/>
                                        </div>
                                        <div className="col-12 mb--20">
                                            <label>Company Name</label>
                                            <input type="text" placeholder="Company Name" value= {this.state.Companyname} onChange= {e => this.handleChange(e)}/>
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
                                            <input type="email" placeholder="Email Address" value= {this.state.Email} onChange= {e => this.handleChange(e)}/>
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Phone no*</label>
                                            <input type="number" placeholder="Phone number" value= {this.state.Phone} onChange= {e => this.handleChange(e)}/>
                                        </div>
                                        <div className="col-12 mb--20">
                                            <label>Address*</label>
                                            <input type="text" placeholder="Address line 1" value= {this.state.Address1} onChange= {e => this.handleChange(e)}/>
                                            <input type="text" placeholder="Address line 2" value= {this.state.Address2} onChange= {e => this.handleChange(e)}/>
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Town/City*</label>
                                            <input type="text" placeholder="Town/City" value= {this.state.Town} onChange= {e => this.handleChange(e)}/>
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>State*</label>
                                            <input type="text" placeholder="State" value= {this.state.State} onChange= {e => this.handleChange(e)}/>
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Zip Code*</label>
                                            <input type="text" placeholder="Zip Code" value= {this.state.ZipCode} onChange= {e => this.handleChange(e)}/>
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
                            
                            <Button variant="outline-success" onSubmit= {e => this.handleSubmit(e)}>Submit</Button>
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