import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCategory,
  getCurrentCar,
  deleteCar,
} from "../../Redux/cars-reducer";
import CarForm from "./CarForm";
import Preloader from "./../../Components/Preloader/Preloader";
import { useHistory, useRouteMatch } from "react-router";

const CarFormContainer = ({
  getCategory,
  category,
  getCurrentCar,
  curCar,
  deleteCar,
}) => {
  let match = useRouteMatch();
  const carId = match.params.carId;
  const history = useHistory();

  const handlerCarDelete = () => {
    deleteCar(carId);
    history.push(`/Cars`)
  };


  useEffect(() => {
    if (carId) getCurrentCar(carId);
  }, [carId]);

  useEffect(() => {
    getCategory();
  }, [carId]);

  if (
    !category ||
    category.length === 0 ||
    (carId && (!curCar || curCar.length === 0))
  ) {
    return <Preloader />;
  }
  return <CarForm {...{ category, curCar, carId, handlerCarDelete }} />;
};

const mapStateToProps = (state) => ({
  category: state.cars.category,
  curCar: state.cars.currentCar,
});

export default connect(mapStateToProps, {
  getCategory,
  getCurrentCar,
  deleteCar,
})(CarFormContainer);
