import React, { Component } from "react";
import client from "../../ApolloClient";
import { gql } from "@apollo/client";
import SimpleSlider from "../Slider/Slider";
import parse from "html-react-parser";
import CartContextConsumer  from "../../Context/CartContext";
import CartVisibleConsumer from "../../Context/CartVisible";
import toast from "react-hot-toast";

import { useNavigate, useParams, useLocation } from "react-router-dom";

export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let params = useParams();
    let location = useLocation();
    let navigate = useNavigate();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
};


class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      attributes: {},
      errors: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.router.params;
    client
      .query({
        query: gql`
          query GetProduct($id: String) {
            Product(id: $id) {
              id
              name
              description
              brand
              inStock
              category
              gallery
              attributes {
                id
                items
                type
              }
              prices {
                amount
                currency
              }
            }
          }
        `,
        variables: { id },
      })
      .then((result) => {
        this.setState({ product: result.data.Product });
      })
      .catch((error) => console.error(error));
  }

  handleImgChange = (i) => {
    const li = document.getElementsByClassName("slick-dots")[0].children[i];
    li.querySelector("button").click();
  };

  handleAddItemToCart = (cartData, setCartData) => {
    const { product, attributes } = this.state;
    let err = [];
    product?.attributes.forEach((attr) => {
      if (attributes[attr.id] === undefined) {
        err.push(attr.id);
        this.setState({ errors: err });
      } else {
        this.setState({ errors: [] });
      }
    });

    if (err.length > 0) {
      return err.length > 1
        ? toast.error(`${err.join(" and ")} are required`)
        : toast.error(`${err.join(" ")} is required`);
    } else {
      setCartData([
        ...cartData,
        {
          id: product.id,
          name: product.name,
          price: product.prices[0].amount,
          currency: JSON.parse(product.prices[0].currency).symbol,
          attributes: product.attributes,
          selectedAttr: attributes,
          quantity: 1,
          gallery: product.gallery,
        },
      ]);
    }
  };

  render() {
    const { product, attributes, errors } = this.state;

    return (
      product && (
        <div className="flex gap-32 my-12 relative">
          <div className="flex gap-20 items-start">
            <div>
              <ul className="flex flex-col gap-6 my-4">
                {JSON.parse(product?.gallery).map((img, i) => {
                  return (
                    <li
                      key={i}
                      className="w-[100px] shadow  cursor-pointer"
                      onClick={() => this.handleImgChange(i)}
                    >
                      <img src={img} alt={`image ${i + 1}`} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-[600px] h-[300px]">
              <SimpleSlider gallery={JSON.parse(product?.gallery)} />
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold">{product?.name}</h1>

            {product?.attributes.length > 0 && (
              <div>
                {product?.attributes.map((attr, i) => (
                  <div key={i} className="flex flex-col gap-2 mt-10" data-testid={`product-attribute-${attr.id.toLowerCase().split(" ").join("-")}`}>
                    <h2 className="text-2xl font-bold">{attr.id}:</h2>
                    <ul className="flex gap-4">
                      {JSON.parse(attr.items).map((pr, i) => (
                       attr.type == "swatch" ? <li
                          key={i}
                          className={`${
                            attributes[attr.id] === pr.value
                              ? "border-4 border-green-500"
                              : ""
                          } w-[40px] h-[40px] cursor-pointer`}
                          onClick={() =>
                            this.setState({
                              attributes: {
                                ...attributes,
                                [attr.id]: pr.value,
                              },
                            })
                          }
                          style={
                            attr.type === "swatch"
                              ? { background: pr.displayValue }
                              : {}
                          }
                        >
                          {attr.type !== "swatch" && pr.displayValue}
                        </li> : <>
                        <li  onClick={() =>
                            this.setState({
                              attributes: {
                                ...attributes,
                                [attr.id]: pr.value,
                              },
                            })
                          }   className={`${
                            attributes[attr.id] === pr.value
                              ? "bg-black text-white"
                              : ""
                          } w-[40px] h-[40px] min-w-fit cursor-pointer border-2 border-black flex justify-center items-center p-2`}>
                              {pr.displayValue}
                        </li>
                        
                        </>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <div className="my-10 ">
              <h2 className="text-2xl font-bold my-4">Price:</h2>
              <p className="font-bold text-2xl">
                {JSON.parse(product.prices[0].currency).symbol}
                {product?.prices[0].amount}
              </p>

              <CartContextConsumer.Consumer>
                {([cartData, setCartData ]) => (
                  <CartVisibleConsumer.Consumer>
                    {([cartVisible, setCartVisible ]) => (
                      
                      <button
                        className={`${
                          !product.inStock &&
                          "grayscale cursor-not-allowed"
                        } ${
                          Object.keys(attributes).length !==
                            product.attributes.length &&
                          "grayscale cursor-not-allowed"
                        }  bg-green-500 text-white text-center w-full p-4 text-xl my-4`}
                        onClick={() => {
                          this.handleAddItemToCart(cartData, setCartData);
                          console.log("doneee")
                          setCartVisible(true);
                        }}
                        disabled={
                          Object.keys(attributes).length !==
                          product.attributes.length || !product.inStock
                        }

                        data-testid='add-to-cart'
                      >
                        Add To Cart
                        
                      </button>
                    )}
                  </CartVisibleConsumer.Consumer>
                )}
              </CartContextConsumer.Consumer>

              <div className="text-lg" data-testid='product-description'>{parse(product.description)}</div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default withRouter(SingleProduct);
