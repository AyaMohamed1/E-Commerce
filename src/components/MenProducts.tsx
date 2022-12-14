import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMenProducts } from "../actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import IMenProducts from "../interfaces/MenProducts";
import NavBar from "./NavBar";

const MenProducts: React.FunctionComponent<IMenProducts> = (props) => {
  useEffect(() => {
    props.fetchMenProducts();
  }, []);
  // console.log(props.allProducts);
  return (
    <div>
      <NavBar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Customers also purchased
                </h2> */}

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {props.menProducts.map((product: any) => (
              <Link to={`/details/${product.id}`} key={product.id}>
                <div className="group relative">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={product.image}
                      // alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700">
                        <p>{product.title}</p>
                      </h3>
                      {/* <p className="mt-1 text-sm text-gray-500">{product.rate}</p> */}
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  // console.log(state);
  return { menProducts: state.menProducts };
};

export default connect(mapStateToProps, {
  fetchMenProducts,
})(MenProducts);
