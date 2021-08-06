import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import { deleteRateType, getRateType } from "../../Redux/rateType-reducer";
import RateType from "./RateType";
import AddRateTypeContainer from "./AddRateType/AddRateTypeContainer";
import ChangeRateTypeContainer from "./ChangeRateType/ChangeRateTypeContainer";
import { setRateTypeResponse } from "./../../Redux/rateType-reducer";

const RateTypeContainer = ({
  getRateType,
  rateType,
  deleteRateType,
  response,
  setRateTypeResponse,
  errorResponse,
}) => {
  const [isAddRatyTypeActive, setAddRateTypeActive] = useState(false);
  const [isChangeRateTypeActive, setChangeRateTypeActive] = useState(false);
  const [curRateTypeId, setCurRateTypeId] = useState("");

  const handlerAddRateType = () => {
    setAddRateTypeActive(true);
  };

  const handlerChangeRateType = (id) => {
    setCurRateTypeId(id);
    setChangeRateTypeActive(true);
  };

  const handlerDeleteRateType = (id) => {
    deleteRateType(id);
  };

  const closeRateTypeResponse = () => {
    setRateTypeResponse("");
    window.location.reload();
  };

  useEffect(() => {
    getRateType();
  }, []);

  if (
    (!rateType || rateType.length === 0) &&
    (!errorResponse || errorResponse.length === 0)
  ) {
    return <Preloader />;
  }

  return (
    <>
      {isAddRatyTypeActive && (
        <AddRateTypeContainer
          {...{ setAddRateTypeActive, response, closeRateTypeResponse }}
        />
      )}
      {isChangeRateTypeActive && (
        <ChangeRateTypeContainer
          {...{
            curRateTypeId,
            setChangeRateTypeActive,
            response,
            closeRateTypeResponse,
          }}
        />
      )}
      <RateType
        {...{
          rateType,
          isAddRatyTypeActive,
          handlerAddRateType,
          handlerDeleteRateType,
          handlerChangeRateType,
          isChangeRateTypeActive,
          response,
          closeRateTypeResponse,
          errorResponse,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  rateType: state.rateType.rateType,
  response: state.rateType.response,
  errorResponse: state.rateType.errorResponse,
});

export default connect(mapStateToProps, {
  getRateType,
  deleteRateType,
  setRateTypeResponse,
})(RateTypeContainer);
