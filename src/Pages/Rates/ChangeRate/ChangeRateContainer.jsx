import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../../Components/Preloader/Preloader";
import ChangePoint from "./ChangeRate";
import { getRate, setRate } from "../../../Redux/rate-reducer";
import { getRateType } from "../../../Redux/rateType-reducer";
import ChangeRate from "./ChangeRate";
import { updateRate } from "./../../../Redux/rate-reducer";

const ChangeRateContainer = ({
  curRateId,
  setChangeRateActive,
  getRate,
  setRate,
  getRateType,
  rate,
  rateType,
  updateRate,
  response,
  closeRateResponse,
}) => {
  const [curRate, setCurRate] = useState();
  const [isRateTouched, setRateTouched] = useState(false);

  const handlerPutRate = (value) => {
    setRateTouched(true);
    setCurRate(value);
  };

  const handlerCancel = () => {
    setRate();
    setChangeRateActive(false);
  };
  const onSubmit = (values) => {
    if (values.price && curRate) {
      const formData = new FormData();
      formData.append("price", parseInt(values.price));
      formData.append("rateTypeId[id]", curRate);
      updateRate(curRateId, formData);
    }
  };

  useEffect(() => {
    getRate(curRateId);
    getRateType();
  }, [curRateId]);

  if (!rate || rate.length === 0 || !rateType || rateType.length === 0) {
    return <Preloader />;
  }
  return (
    <ChangeRate
      {...{
        onSubmit,
        rate,
        curRate,
        isRateTouched,
        handlerPutRate,
        handlerCancel,
        setRateTouched,
        rateType,
        response,
        closeRateResponse,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  rate: state.rates.rate,
  rateType: state.rateType.rateType,
});

export default connect(mapStateToProps, {
  getRate,
  setRate,
  getRateType,
  updateRate,
})(ChangeRateContainer);
