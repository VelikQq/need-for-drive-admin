import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../../Components/Preloader/Preloader";
import { getPoint, setPoint, updatePoint } from "../../../Redux/points-reducer";
import ChangePoint from "./ChangePoint";
import { getCities } from "./../../../Redux/cities-reducer";

const ChangePointContainer = ({
  getPoint,
  setChangePointActive,
  curPointId,
  point,
  cities,
  updatePoint,
  setPoint,
  getCities,
  response,
  closePointResponse,
}) => {
  const [curCity, setCurCity] = useState();
  const [isCityTouched, setCityTouched] = useState(false);

  const handlerPutCity = (value) => {
    setCityTouched(true);
    setCurCity(value);
  };

  const handlerCancel = () => {
    setPoint();
    setChangePointActive(false);
  };
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("cityId[id]", curCity);
    formData.append("address", values.address);
    updatePoint(curPointId, formData);
  };

  useEffect(() => {
    getPoint(curPointId);
    getCities();
  }, [curPointId]);

  if (!point || point.length === 0 || !cities || cities.length === 0) {
    return <Preloader />;
  }
  return (
    <ChangePoint
      {...{
        onSubmit,
        handlerCancel,
        point,
        cities,
        curCity,
        isCityTouched,
        setCityTouched,
        handlerPutCity,
        setCurCity,
        response,
        closePointResponse,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  point: state.points.point,
  cities: state.cities.cities,
});

export default connect(mapStateToProps, {
  getCities,
  getPoint,
  updatePoint,
  setPoint,
})(ChangePointContainer);
