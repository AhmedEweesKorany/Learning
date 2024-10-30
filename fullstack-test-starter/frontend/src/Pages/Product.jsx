import React, { Component } from 'react';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import CartVisible from '../Context/CartVisible';

class Product extends Component {
  static contextType = CartVisible; // Access CartVisible context in class component

  render() {
    const [cartVisible] = this.context; // Destructure cartVisible from context

    return (
      <div>
        {cartVisible && (
          <div className="absolute w-full h-full bg-black/50 z-10"></div>
        )}
        <div className="px-20 py-4">
          <SingleProduct />
        </div>
      </div>
    );
  }
}

export default Product;
