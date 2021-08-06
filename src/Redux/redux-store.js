import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import loginReducer from "./login-reducer";
import orderReducer from "./order-reducer";
import citiesReducer from "./cities-reducer";
import orderStatusReducer from "./orderStatus-reducer";
import carsReducer from "./cars-reducer";
import pointsReducer from "./points-reducer";
import ratesReducer from "./rate-reducer";
import rateTypeReducer from "./rateType-reducer";
import carCategoriesReducer from "./carCategory-reducer";
import addParamsReducer from "./addParams-reducer";

let reducers = combineReducers({
  login: loginReducer,
  order: orderReducer,
  cities: citiesReducer,
  orderStatus: orderStatusReducer,
  cars: carsReducer,
  points: pointsReducer,
  rates: ratesReducer,
  rateType: rateTypeReducer,
  carCategories: carCategoriesReducer,
  addParams: addParamsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
