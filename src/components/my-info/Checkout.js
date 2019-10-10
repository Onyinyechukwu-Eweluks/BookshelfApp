import React from 'react';
import CheckoutForm from './checkout/CheckoutForm';
import BillingAdd from './checkout/BillingAdd';

function Checkout() {
    return(
        <div>
            <section class="breadcrumb-section">
                <h2 class="sr-only">Site Breadcrumb</h2>
                <div class="container">
                    <div class="breadcrumb-contents">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active">Checkout</li>
                        </ol>
                    </nav>
                    </div>
                </div>
            </section>

            <main id="content" class="page-section inner-page-sec-padding-bottom space-db--20">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="checkout-form">
                                <div class="row row-40">
                                  <CheckoutForm />
                                    <BillingAdd />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Checkout;