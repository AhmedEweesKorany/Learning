import React, { Component } from 'react';
import NavContext from './Context/NavContext';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Product from './Pages/Product';
import CartContext from './Context/CartContext';
import CartVisible from './Context/CartVisible';
import QuantityContext from './Context/QuantityContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cur: "tech",
      cartData: [],
      cartVisible: false,
      quantity: 0
    };
  }

  setCur = (newCur) => {
    this.setState({ cur: newCur });
  };

  setCartData = (newCartData) => {
    this.setState({ cartData: newCartData });
  };

  setCartVisible = (newVisibility) => {
    this.setState({ cartVisible: newVisibility });
  };

  setQuantity = (newQuantity) => {
    this.setState({ quantity: newQuantity });
  };

  render() {
    const { cur, cartData, cartVisible, quantity } = this.state;

    return (
      <NavContext.Provider value={[cur, this.setCur]}>
        <QuantityContext.Provider value={[quantity, this.setQuantity]}>
          <CartVisible.Provider value={[cartVisible, this.setCartVisible]}>
            <CartContext.Provider value={[cartData, this.setCartData]}>
              <div>
                <Navbar />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/product/:id' element={<Product />} />
                </Routes>
              </div>
            </CartContext.Provider>
          </CartVisible.Provider>
        </QuantityContext.Provider>
      </NavContext.Provider>
    );
  }
}

export default App;
