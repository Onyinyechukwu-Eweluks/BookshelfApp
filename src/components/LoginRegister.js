import React, {Component} from 'react'

class LoginRegister extends Component{
    render() {
        return(
            <div>
                <section className="breadcrumb-section">
                <h2 className="sr-only">Site Breadcrumb</h2>
                <div className="container">
                    <div className="breadcrumb-contents">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Login</li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </section>
               
                <main className="page-section inner-page-sec-padding-bottom">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
                       
                        <div className="login-box">
                        <h4 className="login-title">New Customer</h4>
                        <p><span className="font-weight-bold">Register</span></p>
                        <p> By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the
                            orders
                            you have previously made.</p>
                        <a href="#" className="btn btn-outlined   mr-3">Continue</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                        <form action="https://demo.hasthemes.com/smartbooks-v2/smartbook/">
                        <div className="login-form">
                            <h4 className="login-title">Returning Customer</h4>
                            <p><span className="font-weight-bold">I am a returning customer</span></p>
                            <div className="row">
                            <div className="col-md-12 col-12 mb--15">
                                <label for="email">Enter you email address here...</label>
                                <input className="mb-0 form-control" type="email" id="email" placeholder="Enter you email address here..."/>
                            </div>
                            <div className="col-12 mb--20">
                                <label for="password">Password</label>
                                <input className="mb-0 form-control" type="password" id="password"/>
                                <a href="#" className="forget-pass">Forgotten Password</a>
                            </div>
                            <div className="col-md-12">
                                <a href="#" className="btn btn-outlined">Login</a>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </main>

            </div>
        )
    }
}

export default LoginRegister;