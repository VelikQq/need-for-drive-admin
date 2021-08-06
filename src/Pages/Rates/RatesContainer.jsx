import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import {
  deleteRate,
  getRates,
  setRateResponse,
} from "../../Redux/rate-reducer";
import AddRateContainer from "./AddRate/AddRateContainer";
import ChangeRateContainer from "./ChangeRate/ChangeRateContainer";
import Rates from "./Rates";

const RatesContainer = ({
  getRates,
  rates,
  deleteRate,
  response,
  setRateResponse,
  errorResponse,
}) => {
  const [isAddRateActive, setAddRateActive] = useState(false);
  const [isChangeRateActive, setChangeRateActive] = useState(false);
  const [curRateId, setCurRateId] = useState("");

  const handlerAddRate = () => {
    setAddRateActive(true);
  };

  const handlerChangeRate = (id) => {
    setCurRateId(id);
    setChangeRateActive(true);
  };

  const handlerDeleteRate = (id) => {
    deleteRate(id);
  };

  const closeRateResponse = () => {
    setRateResponse("");
    window.location.reload();
  };

  useEffect(() => {
    getRates();
  }, []);

  if (
    (!rates || rates.length === 0) &&
    (!errorResponse || errorResponse.length === 0)
  ) {
    return <Preloader />;
  }

  return (
    <>
      {isAddRateActive && (
        <AddRateContainer
          {...{ setAddRateActive, response, closeRateResponse }}
        />
      )}
      {isChangeRateActive && (
        <ChangeRateContainer
          {...{ curRateId, setChangeRateActive, response, closeRateResponse }}
        />
      )}
      <Rates
        {...{
          rates,
          handlerDeleteRate,
          handlerAddRate,
          isAddRateActive,
          handlerChangeRate,
          isChangeRateActive,
          response,
          closeRateResponse,
          errorResponse,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  rates: state.rates.rates,
  response: state.rates.response,
  errorResponse: state.rates.errorResponse,
});

export default connect(mapStateToProps, {
  getRates,
  deleteRate,
  setRateResponse,
})(RatesContainer);
