import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCities } from "../../../Redux/cities-reducer";
import AddPoint from "./AddPoint";
import Preloader from "./../../../Components/Preloader/Preloader";
import { postPoint } from "./../../../Redux/points-reducer";

const AddPointContainer = ({
  getCities,
  setAddPointActive,
  cities,
  postPoint,
  response,
  closePointResponse,
}) => {
  const [curCity, setCurCity] = useState();
  const [isCityTouched, setCityTouched] = useState(false);
  const handlerPutCity = (value) => {
    setCityTouched(true);
    setCurCity(value);
  };
  const onSubmit = (values) => {
    if (values.name && values.address && curCity) {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("cityId[id]", curCity);
      formData.append("address", values.address);

      postPoint(formData);
    } else {
      setCityTouched(true);
    }
  };

  useEffect(() => {
    getCities();
  }, []);
  if (!cities || cities.length === 0) {
    return <Preloader />;
  }
  return (
    <AddPoint
      {...{
        onSubmit,
        setAddPointActive,
        cities,
        curCity,
        handlerPutCity,
        isCityTouched,
        setCityTouched,
        response,
        closePointResponse,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  cities: state.cities.cities,
});

export default connect(mapStateToProps, { getCities, postPoint })(
  AddPointContainer
);
