import { combineReducers } from "redux";
import { productReducer, selectedProduct } from "./productReducer";

const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProduct,
});
export default reducer;
