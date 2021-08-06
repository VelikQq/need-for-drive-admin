import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ChangeOrder from "./ChangeOrder";
import {
  getOrder,
  setOrder,
  setOrderResponse,
  updateOrder,
} from "./../../../Redux/order-reducer";
import Preloader from "./../../../Components/Preloader/Preloader";
import { getCities } from "../../../Redux/cities-reducer";
import { getPoints } from "../../../Redux/points-reducer";
import { getOrderStatus } from "../../../Redux/orderStatus-reducer";
import { getRates } from "../../../Redux/rate-reducer";
import { setCarParams } from "../../../Redux/addParams-reducer";

const ChangeOrderContainer = ({
  getOrder,
  getCities,
  getPoints,
  getRates,
  getOrderStatus,
  curOrderId,
  setOrderChangeActive,
  order,
  cities,
  points,
  orderStatus,
  rates,
  addParams,
  setCarParams,
  updateOrder,
  orderResponse,
  setOrderResponse,
}) => {
  useEffect(() => {
    getOrder(curOrderId);
    getCities();
    getPoints();
    getOrderStatus();
    getRates();
  }, [curOrderId]);

  const [availParams, setAvailParams] = useState(false);

  const handlerCancel = () => {
    setAvailParams(false);
    setOrder();
    setOrderChangeActive(false);
    window.location.reload();
  };

  const closeResponse = () => {
    setOrderResponse();
    window.location.reload();
  };

  if (
    !order ||
    order.length === 0 ||
    !cities ||
    cities.length === 0 ||
    !points ||
    points.length === 0 ||
    !orderStatus ||
    orderStatus.length === 0 ||
    !rates ||
    rates.length === 0 ||
    !addParams ||
    addParams.length === 0
  ) {
    return <Preloader />;
  }
  return (
    <ChangeOrder
      {...{
        order,
        cities,
        points,
        orderStatus,
        rates,
        handlerCancel,
        addParams,
        setCarParams,
        availParams,
        setAvailParams,
        updateOrder,
        orderResponse,
        closeResponse,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  order: state.order.order,
  cities: state.cities.cities,
  points: state.points.points,
  orderStatus: state.orderStatus.orderStatus,
  rates: state.rates.rates,
  addParams: state.addParams.additionalParameters,
  orderResponse: state.order.orderResponse,
});

export default connect(mapStateToProps, {
  getOrder,
  getCities,
  getPoints,
  getOrderStatus,
  getRates,
  setCarParams,
  setOrder,
  updateOrder,
  setOrderResponse,
})(ChangeOrderContainer);
