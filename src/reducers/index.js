import login from "./login";
import signup from "./signup";
import products from "./products";
import shops from "./shops";
import categories from "./categories";
import { combineReducers } from "redux";
import appStatus from "./appStatus";
import product from "./product";

export default combineReducers({
  login,
  signup,
  products,
  shops,
  categories,
  appStatus,
  product
});
