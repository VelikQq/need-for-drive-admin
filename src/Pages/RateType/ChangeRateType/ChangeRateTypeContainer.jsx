import React, { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../../../Components/Preloader/Preloader";
import {
  getCurRateType,
  setCurRateType,
  updateRateType,
} from "../../../Redux/rateType-reducer";
import ChangeRateType from "./ChangeRateType";

const ChangeRateTypeContainer = ({
  curRateTypeId,
  setChangeRateTypeActive,
  getCurRateType,
  setCurRateType,
  curRateType,
  updateRateType,
  response,
  closeRateTypeResponse,
}) => {
  const handlerCancel = () => {
    setCurRateType();
    setChangeRateTypeActive(false);
  };

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("unit", values.unit);
    updateRateType(curRateTypeId, formData);
  };

  useEffect(() => {
    getCurRateType(curRateTypeId);
  }, [curRateTypeId]);

  if (!curRateType || curRateType.length === 0) {
    return <Preloader />;
  }
  return (
    <ChangeRateType
      {...{
        onSubmit,
        handlerCancel,
        curRateType,
        curRateType,
        response,
        closeRateTypeResponse,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  curRateType: state.rateType.curRateType,
});

export default connect(mapStateToProps, {
  getCurRateType,
  setCurRateType,
  updateRateType,
})(ChangeRateTypeContainer);
