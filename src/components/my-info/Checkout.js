import React from 'react';
import CheckoutForm from './checkout/CheckoutForm';
import BillingAdd from './checkout/BillingAdd';



function Checkout() {
    return(
        <div>
            <section className="breadcrumb-section">
                <h2 className="sr-only">Site Breadcrumb</h2>
                <div className="container">
                    <div className="breadcrumb-contents">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Checkout</li>
                        </ol>
                    </nav>
                    </div>
                </div>
            </section>

            <main id="content" className="page-section inner-page-sec-padding-bottom space-db--20">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            
                            <CheckoutForm />
                              <BillingAdd />
                         
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Checkout;