import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../../Components/Preloader/Preloader";
import AddRate from "./AddRate";
import { postRate } from "./../../../Redux/rate-reducer";
import { getRateType } from "./../../../Redux/rateType-reducer";

const AddRateContainer = ({
  getRateType,
  setAddRateActive,
  rateType,
  postRate,
  response,
  closeRateResponse,
}) => {
  const [curRate, setCurRate] = useState();
  const [isRateTouched, setRateTouched] = useState(false);

  const handlerPutRate = (value) => {
    setRateTouched(true);
    setCurRate(value);
  };
  const onSubmit = (values) => {
    if (values.price && curRate) {
      const formData = new FormData();
      formData.append("price", parseInt(values.price));
      formData.append("rateTypeId[id]", curRate);
      postRate(formData);
    } else {
      setRateTouched(true);
    }
  };

  useEffect(() => {
    getRateType();
  }, []);

  if (!rateType || rateType.length === 0) {
    return <Preloader />;
  }
  return (
    <AddRate
      {...{
        onSubmit,
        curRate,
        isRateTouched,
        rateType,
        setAddRateActive,
        setRateTouched,
        handlerPutRate,
        response,
        closeRateResponse,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  rateType: state.rateType.rateType,
});

export default connect(mapStateToProps, { getRateType, postRate })(
  AddRateContainer
);
