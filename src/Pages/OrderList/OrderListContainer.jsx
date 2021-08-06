import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import OrderList from "./OrderList";
import { getOrderList } from "./../../Redux/order-reducer";
import Preloader from "./../../Components/Preloader/Preloader";
import { getCities } from "../../Redux/cities-reducer";
import { getOrderStatus } from "../../Redux/orderStatus-reducer";
import ChangeOrderContainer from "./ChangeOrder/ChangeOrderContainer";

const OrderListContainer = ({
  getOrderList,
  orderList,
  response,
  getCities,
  cities,
  getOrderStatus,
  orderStatus,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [filerCityId, setFilterId] = useState("");
  const [filterStatusId, setFilterStatusId] = useState("");
  const [isOrderChangeActive, setOrderChangeActive] = useState(false);
  const [curOrderId, setCurOrderId] = useState("");

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  const handleOrderChange = (id) => {
    setCurOrderId(id);
    setOrderChangeActive(true);
  };

  const handlerApplyFilter = () => {
    if (filerCityId === "" && filterStatusId === "") {
      getOrderList(pageNumber);
    } else if (filterStatusId === "" && filerCityId !== "") {
      getOrderList(pageNumber, filerCityId);
    } else if (filerCityId === "" && filterStatusId !== "") {
      getOrderList(pageNumber, null, filterStatusId);
    } else {
      getOrderList(pageNumber, filerCityId, filterStatusId);
    }
  };

  useEffect(() => {
    if (filerCityId === "" && filterStatusId === "") {
      getOrderList(pageNumber);
    } else if (filterStatusId === "" && filerCityId !== "") {
      getOrderList(pageNumber, filerCityId);
    } else if (filerCityId === "" && filterStatusId !== "") {
      getOrderList(pageNumber, null, filterStatusId);
    } else {
      getOrderList(pageNumber, filerCityId, filterStatusId);
    }

    getCities();
    getOrderStatus();
  }, [pageNumber]);

  if (
    (!orderList ||
      orderList.length === 0 ||
      !cities ||
      cities.length === 0 ||
      !orderStatus ||
      orderStatus.length === 0) &&
    (!response || response.length === 0)
  ) {
    return <Preloader />;
  }
  return (
    <>
      {isOrderChangeActive && (
        <ChangeOrderContainer {...{ setOrderChangeActive, curOrderId }} />
      )}
      <OrderList
        {...{
          orderList,
          response,
          handlePageChange,
          cities,
          setFilterId,
          handlerApplyFilter,
          orderStatus,
          setFilterStatusId,
          handleOrderChange,
          isOrderChangeActive,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  orderList: state.order.orders,
  response: state.order.responseError,
  cities: state.cities.cities,
  orderStatus: state.orderStatus.orderStatus,
});

export default connect(mapStateToProps, {
  getOrderList,
  getCities,
  getOrderStatus,
})(OrderListContainer);
