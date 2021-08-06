import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import {
  deleteOrderStatus,
  getOrderStatus,
} from "../../Redux/orderStatus-reducer";
import AddOrderStatusContainer from "./AddOrderStatus/AddOrderStatusContainer";
import ChangeOrderStatusContainer from "./ChangeOrderStatus/ChangeOrderStatusContainer";
import OrderStauts from "./OrderStatus";
import { setOrderStatusResponse } from "./../../Redux/orderStatus-reducer";

const OrderStatusContainer = ({
  getOrderStatus,
  orderStatus,
  deleteOrderStatus,
  response,
  setOrderStatusResponse,
  errorResponse,
}) => {
  const [isAddOrderStatusActive, setAddOrderStatusActive] = useState(false);
  const [isChangeOrderStatusActive, setChangeOrderStatusActive] =
    useState(false);
  const [curOrderStatusId, setCurOrderStatusId] = useState("");

  const handlerAddOrderStatus = () => {
    setAddOrderStatusActive(true);
  };

  const handlerChangeOrderStatus = (id) => {
    setCurOrderStatusId(id);
    setChangeOrderStatusActive(true);
  };

  const handlerDeleteOrderStatus = (id) => {
    deleteOrderStatus(id);
  };

  const closeOrderStatusResponse = () => {
    setOrderStatusResponse("");
    window.location.reload();
  };

  useEffect(() => {
    getOrderStatus();
  }, []);

  if (
    (!orderStatus || orderStatus.length === 0) &&
    (!errorResponse || errorResponse.length === 0)
  ) {
    return <Preloader />;
  }

  return (
    <>
      {isAddOrderStatusActive && (
        <AddOrderStatusContainer
          {...{ setAddOrderStatusActive, response, closeOrderStatusResponse }}
        />
      )}
      {isChangeOrderStatusActive && (
        <ChangeOrderStatusContainer
          {...{
            curOrderStatusId,
            setChangeOrderStatusActive,
            response,
            closeOrderStatusResponse,
          }}
        />
      )}
      <OrderStauts
        {...{
          orderStatus,
          isAddOrderStatusActive,
          handlerAddOrderStatus,
          handlerDeleteOrderStatus,
          handlerChangeOrderStatus,
          isChangeOrderStatusActive,
          response,
          closeOrderStatusResponse,
          errorResponse,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  orderStatus: state.orderStatus.orderStatus,
  response: state.orderStatus.response,
  errorResponse: state.orderStatus.errorResponse,
});

export default connect(mapStateToProps, {
  getOrderStatus,
  deleteOrderStatus,
  setOrderStatusResponse,
})(OrderStatusContainer);
