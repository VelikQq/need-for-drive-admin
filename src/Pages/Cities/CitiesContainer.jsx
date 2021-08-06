import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "./../../Components/Preloader/Preloader";
import Cities from "./Cities";
import {
  deleteCity,
  getCities,
  getLimitCities,
  setCityResponse,
} from "./../../Redux/cities-reducer";
import AddCityContainer from "./AddCity/AddCityContainer";
import ChangeCityContainer from "./ChangeCity/ChangeCityContainer";

const CitiesContainer = ({
  getCities,
  cities,
  deleteCity,
  setCityResponse,
  response,
  errorResponse,
}) => {
  const [isAddCityActive, setAddCityActive] = useState(false);
  const [isChangeCityActive, setChangeCityActive] = useState(false);
  const [curCityId, setCurCityId] = useState("");

  const handlerAddCity = () => {
    setAddCityActive(true);
  };

  const handlerChangeCity = (id) => {
    setCurCityId(id);
    setChangeCityActive(true);
  };

  const handlerDeleteCity = (id) => {
    deleteCity(id);
  };

  const closeCityResponse = () => {
    setCityResponse("");
    window.location.reload();
  };

  useEffect(() => {
    getCities();
  }, []);

  if (
    (!cities || cities.length === 0) &&
    (!errorResponse || errorResponse.length === 0)
  ) {
    return <Preloader />;
  }
  return (
    <>
      {isAddCityActive && (
        <AddCityContainer {...{ setAddCityActive, closeCityResponse }} />
      )}
      {isChangeCityActive && (
        <ChangeCityContainer
          {...{ setChangeCityActive, curCityId, closeCityResponse }}
        />
      )}
      <Cities
        {...{
          cities,
          handlerAddCity,
          isAddCityActive,
          handlerDeleteCity,
          handlerChangeCity,
          isChangeCityActive,
          closeCityResponse,
          response,
          errorResponse,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cities.cities,
  response: state.cities.response,
  errorResponse: state.cities.errorResponse,
});

export default connect(mapStateToProps, {
  getCities,
  deleteCity,
  setCityResponse,
})(CitiesContainer);
