import React, {Component} from 'react';

class BillingAdd extends Component{
    render() {
        return(
            <div>
                <div class="col-lg-7 mb--20">
                
                <div id="billing-form" class="mb-40">
                  <h4 class="checkout-title">Billing Address</h4>
                  <div class="row">
                    <div class="col-md-6 col-12 mb--20">
                      <label>First Name*</label>
                      <input type="text" placeholder="First Name"/>
                    </div>
                    <div class="col-md-6 col-12 mb--20">
                      <label>Last Name*</label>
                      <input type="text" placeholder="Last Name"/>
                    </div>
                    <div class="col-12 mb--20">
                      <label>Company Name</label>
                      <input type="text" placeholder="Company Name"/>
                    </div>
                    <div class="col-12 col-12 mb--20">
                      <label>Country*</label>
                      <select class="nice-select">
                        <option>Bangladesh</option>
                        <option>China</option>
                        <option>country</option>
                        <option>India</option>
                        <option>Japan</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-12 mb--20">
                      <label>Email Address*</label>
                      <input type="email" placeholder="Email Address"/>
                    </div>
                    <div class="col-md-6 col-12 mb--20">
                      <label>Phone no*</label>
                      <input type="text" placeholder="Phone number"/>
                    </div>
                    <div class="col-12 mb--20">
                      <label>Address*</label>
                      <input type="text" placeholder="Address line 1"/>
                      <input type="text" placeholder="Address line 2"/>
                    </div>
                    <div class="col-md-6 col-12 mb--20">
                      <label>Town/City*</label>
                      <input type="text" placeholder="Town/City"/>
                    </div>
                    <div class="col-md-6 col-12 mb--20">
                      <label>State*</label>
                      <input type="text" placeholder="State"/>
                    </div>
                    <div class="col-md-6 col-12 mb--20">
                      <label>Zip Code*</label>
                      <input type="text" placeholder="Zip Code"/>
                    </div>
                    <div class="col-12 mb--20 ">
                      <div class="block-border check-bx-wrapper">
                        <div class="check-box">
                          <input type="checkbox" id="create_account"/>
                          <label for="create_account">Create an Acount?</label>
                        </div>
                        <div class="check-box">
                          <input type="checkbox" id="shiping_address" data-shipping/>
                          <label for="shiping_address">Ship to Different Address</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        )
    }
}

export default BillingAdd;