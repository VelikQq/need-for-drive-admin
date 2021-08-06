import React from "react";
import { connect } from "react-redux";
import { postCity } from "../../../Redux/cities-reducer";
import AddCity from "./AddCity";

const AddCityContainer = ({
  setAddCityActive,
  postCity,
  response,
  closeCityResponse
}) => {
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.city);
    postCity(formData);
  };
  return (
    <AddCity {...{ setAddCityActive, onSubmit, response, closeCityResponse }} />
  );
};

const mapStateToProps = (state) => ({
  response: state.cities.response,
});

export default connect(mapStateToProps, { postCity, })(
  AddCityContainer
);
