import React, {Component} from 'react';
import Home from './components/Home';
import HeaderTop from './components/home/HeaderTop';
import HeaderMobile from './components/home/HeaderMobile';
import FixedHeader from './components/home/FixedHeader';
import Product from './components/Product'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
        </Router>
        
        
      </div>
    );

  }
}
  


export default App;
