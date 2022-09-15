import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import productDetailsReducer from "./productDetailsReducer";
import womenProductsReducer from "./womenProductsReducer";
import menProductsReducer from "./menProductsReducer";
import addToCart from "./addToCartReducer";

export default combineReducers({
  allProducts: productsReducer,
  productData: productDetailsReducer,
  womenProducts: womenProductsReducer,
  menProducts: menProductsReducer,
  cartProducts: addToCart,
});
