import React from "react";
import { connect } from "react-redux";
import AddRateType from "./AddRateType";
import { postRateType } from "./../../../Redux/rateType-reducer";

const AddRateTypeContainer = ({
  setAddRateTypeActive,
  postRateType,
  response,
  closeRateTypeResponse,
}) => {
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("unit", values.unit);
    postRateType(formData);
  };
  return (
    <AddRateType
      {...{ onSubmit, setAddRateTypeActive, response, closeRateTypeResponse }}
    />
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { postRateType })(AddRateTypeContainer);
