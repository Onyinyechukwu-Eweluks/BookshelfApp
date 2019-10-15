import React, {Component} from 'react';
import HeaderTop from './components/home/HeaderTop';
import HeaderMobile from './components/home/HeaderMobile';
import FixedHeader from './components/home/FixedHeader';
import FixedFooter from './components/home/FixedFooter';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Pages
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/my-info/Cart'
import Checkout from './components/my-info/Checkout'
import Compare from './components/my-info/Compare';
import Whishlist from './components/my-info/Whishlist';
import MyAccount from './components/my-info/MyAccount';
import Blog from './components/Blog';
import Contact from './components/Contact';
import LoginRegister from './components/LoginRegister';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <HeaderTop />
            <HeaderMobile />
          <FixedHeader />

          <Route 
            exact= {true}
            path= '/'
            component= {Home}
          />

          <Route 
            path= '/product'
            component= {Product}
          />

          <Route 
              path= '/cart'
              component= {Cart}
          />

          <Route 
              path= '/checkout'
              component= {Checkout}
          />

          <Route 
              path= '/compare'
              component= {Compare}
          />

          <Route 
              path= '/whishlist'
              component= {Whishlist}
          />

          <Route 
              path= '/my-account'
              component= {MyAccount}
          />

          <Route 
              path= '/blog'
              component= {Blog}
          />

          <Route 
              path= '/my-account'
              component= {MyAccount}
          />

          <Route 
              path= '/contact'
              component= {Contact}
          />

          <Route 
              path= '/loginregister'
              component= {LoginRegister}
          />

          <FixedFooter />
        </Router>
        
        
        
      </div>
    )

  }
}
  


export default App;
