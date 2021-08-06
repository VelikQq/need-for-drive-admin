import React from "react";
import { Route, Switch } from "react-router";
import s from "./content.module.scss";
import Header from "../ContentHeader/Header";
import Footer from "../ContentFooter/Footer";
import OrderListContainer from "../../Pages/OrderList/OrderListContainer";
import CarListContainer from "./../../Pages/CarList/CarListContainer";
import CarFormContainer from "../../Pages/CarForm/CarFormContainer";
import CitiesContainer from "../../Pages/Cities/CitiesContainer";
import PointsContainer from "../../Pages/Points/PointsContainer";
import RatesContainer from "../../Pages/Rates/RatesContainer";
import RateTypeContainer from "../../Pages/RateType/RateTypeContainer";
import CarCategoriesContainer from "../../Pages/CarCategories/CarCategoriesContainer";
import OrderStatusContainer from "../../Pages/OrderStatus/OrderStatusContainer";

const Content = () => {
  return (
    <div className={s.contentWrapper}>
      <Header />

      <Switch>
        <Route path="/Orders">
          <OrderListContainer />
        </Route>
        <Route path="/Cars">
          <CarListContainer />
        </Route>
        <Route path="/AddCar">
          <CarFormContainer />
        </Route>
        <Route path="/ChangeCar/:carId">
          <CarFormContainer />
        </Route>
        <Route path="/Cities">
          <CitiesContainer />
        </Route>
        <Route path="/Points">
          <PointsContainer />
        </Route>
        <Route path="/Rates">
          <RatesContainer />
        </Route>
        <Route path="/RateType">
          <RateTypeContainer />
        </Route>
        <Route path="/CarCategory">
          <CarCategoriesContainer />
        </Route>
        <Route path="/OrderStatus">
          <OrderStatusContainer/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Content;
