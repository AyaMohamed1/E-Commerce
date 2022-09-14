import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import productDetailsReducer from "./productDetailsReducer";
import womenProductsReducer from "./womenProductsReducer";
import menProductsReducer from "./menProductsReducer";

export default combineReducers({
  allProducts: productsReducer,
  productData: productDetailsReducer,
  womenProducts: womenProductsReducer,
  menProducts: menProductsReducer,
});
