import React, { Component } from 'react';
import Products from '../components/Products/Products';
import CartVisible from '../Context/CartVisible';

class Home extends Component {
  static contextType = CartVisible; // Set CartVisible context as static contextType

  render() {
    const [cartVisible, setCartVisible] = this.context; // Access CartVisible from context

    return (
      <div className="relative">
        {cartVisible && (
          <div className="absolute w-full h-full bg-black/50 z-10"></div>
        )}
        <div className="px-20 py-4">
          <Products />
        </div>
      </div>
    );
  }
}

export default Home;
