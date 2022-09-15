import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProductDetails, addToCart } from "../actions";
import { RouteComponentProps } from "react-router-dom";
import IProductDetails from "../interfaces/ProductDetails";
import NavBar from "./NavBar";

const ProductDetails: React.FunctionComponent<
  IProductDetails & RouteComponentProps<any>
> = (props) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let idx = props.match.params.number;
    // console.log(idx);
    props.getProductDetails(idx);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Product Details
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={props.productData.image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {props.productData.title}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">product color</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${props.productData.price}
                </p>
              </div>
            </div>
            <div className="my-20">
              <h2>{props.productData.description}</h2>
              <button
                type="submit"
                className="my-4 group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => {
                  console.log("Adding to cart");
                  setQuantity(quantity + 1);
                  props.addToCart({
                    id: props.productData.id,
                    image: props.productData.image,
                    title: props.productData.title,
                    price: props.productData.price,
                    quantity: quantity + 1,
                  });
                }}
              >
                Add To Cart
              </button>
              <div className="flex justify-between">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
                <h2 className=""> {quantity} </h2>

                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                    // else if(quantity == 1){
                    //   setQuantity(quantity - 1);

                    // }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  // console.log(state);
  return { productData: state.productData, cartProducts: state.cartProducts };
};

export default connect(mapStateToProps, {
  getProductDetails,
  addToCart,
})(ProductDetails);
