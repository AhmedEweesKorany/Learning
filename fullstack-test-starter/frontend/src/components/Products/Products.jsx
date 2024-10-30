import React, { Component } from 'react';
import client from '../../ApolloClient';
import { gql } from '@apollo/client';
import logo from "../../assets/logo.png";
import NavContext from '../../Context/NavContext';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import CartContext from '../../Context/CartContext';


class Products extends Component {
    static contextType = NavContext; 

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cur: 'all' 
        };
    }

    componentDidMount() {
        client
            .query({
                query: gql`
                    query GetProducts {
                        Products {
                        id
                            name
                            category
                            inStock
                            gallery
                            prices {
                                amount
                                currency
                            }
                                 attributes{
      id
      items
      type
      name
    }
                            
                        }
                    }
                `,
            })
            .then((result) => {
                this.setState({ products: result.data.Products });
            })
            .catch((error) => console.error(error)); 
    }

    renderProduct(product, index,cartData,setCartData) {
        const galleryImage = JSON.parse(product.gallery) ? JSON.parse(product.gallery) : logo;
        const price = JSON.parse(product.prices[0].currency).symbol + product.prices[0].amount;
        console.log(product?.attributes )
        return (
            <div key={index} className='hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 cursor-pointer group mb-10' data-testid={`product-${product.name.toLowerCase().split(" ").join("-")}`}>
             <Link to={`/product/${product.id}`}>
             <div className='relative'>
                    <img src={galleryImage[0]} alt={product.name} className={`w-full h-[300px] object-contain ${!product.inStock && "opacity-20"}`} />
                    {!product.inStock && <h2 className='text-[50px] text-gray-700 opacity-40 absolute top-32 left-20'> out of stock </h2>}
                </div>
             </Link>

             {product.inStock && <div className='hidden group-hover:flex  w-[50px] h-[50px] bg-green-500 text-white rounded-full float-end items-center justify-center' onClick={()=>this.handleQuickAdd(cartData,setCartData,product)}>
                <IoCartOutline/>
                 </div>}
            
                <div>
                    <h1>{product.name}</h1>
                    <p>{price}</p>
                </div>
            </div>
        );
    }

    handleQuickAdd = (cartData,setCartData,product)=>{
       
        setCartData([...cartData,{
            id:product.id,
            name:product.name,
            price:product.prices[0].amount,
            currency:JSON.parse(product.prices[0].currency).symbol,
            attributes:product.attributes,
            selectedAttr:product?.attributes.length > 0 ? this.defaultAttr(product?.attributes) : [],
            quantity:1,
            gallery:product.gallery
          }])
    }

    defaultAttr = (attributes)=>{
        let res = {}
        attributes.map((attr)=>{
            JSON.parse(attr.items).map((pr)=>{
                if(res[attr.id] === undefined){

                    res[attr.id] = pr.value
                }
            })
        })

        return res
    }

    render() {
        const { products } = this.state;
        const cur = this.context[0]; 

        return (
            <CartContext.Consumer>
                {([cartData,setCartData])=>(
            <div>
                
                <h1 className='text-5xl font-bold my-20 uppercase'>{cur}</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-content-center'>
                    {
                        cur === "all" ?
                        products.map((product, index) => this.renderProduct(product, index,cartData,setCartData)) :
                        products.filter(product => product.category === cur).map((product, index) => this.renderProduct(product, index,cartData,setCartData))
                    }
                </div>
            </div>
                )}
                    </CartContext.Consumer>
        );
    }
}

export default Products;
