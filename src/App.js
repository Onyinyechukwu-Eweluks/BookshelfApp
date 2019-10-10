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

          <FixedFooter />
        </Router>
        
        
        
      </div>
    );

  }
}
  


export default App;
