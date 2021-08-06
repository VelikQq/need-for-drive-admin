import React, { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../../../Components/Preloader/Preloader";
import {
  getCurOrderStatus,
  setCurOrderStatus,
  updateOrderStatus,
} from "../../../Redux/orderStatus-reducer";
import ChangeOrderStatus from "./ChangeOrderStatus";

const ChangeCityContainer = ({
  curOrderStatusId,
  setChangeOrderStatusActive,
  curOrderStatus,
  setCurOrderStatus,
  getCurOrderStatus,
  updateOrderStatus,
  response,
  closeOrderStatusResponse,
}) => {
  const handlerCancel = () => {
    setCurOrderStatus();
    setChangeOrderStatusActive(false);
  };

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    updateOrderStatus(curOrderStatusId, formData);
  };

  useEffect(() => {
    getCurOrderStatus(curOrderStatusId);
  }, [curOrderStatusId]);

  if (!curOrderStatus || curOrderStatus.length === 0) {
    return <Preloader />;
  }
  return (
    <ChangeOrderStatus
      {...{
        onSubmit,
        handlerCancel,
        curOrderStatus,
        response,
        closeOrderStatusResponse,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  curOrderStatus: state.orderStatus.curOrderStatus,
});

export default connect(mapStateToProps, {
  getCurOrderStatus,
  setCurOrderStatus,
  updateOrderStatus,
})(ChangeCityContainer);
