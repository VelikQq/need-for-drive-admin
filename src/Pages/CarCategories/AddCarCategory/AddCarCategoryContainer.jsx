import React, { useState } from "react";
import { connect } from "react-redux";
import { postCarCategory } from "../../../Redux/carCategory-reducer";
import AddCarCategory from "./AddCarCategory";

const AddCarCategotyContainer = ({
  setCarCategoryActive,
  postCarCategory,
  response,
  closeCarCategoryResponse,
}) => {
  const [categoryDescription, setCategoryDescription] = useState("");
  const [isDescriptionActive, setDescriptionActive] = useState(false);

  const handlerSetDescr = (value) => {
    setDescriptionActive(true);
    setCategoryDescription(value);
  };

  const onSubmit = (values) => {
    if (values.name && categoryDescription) {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", categoryDescription);
      postCarCategory(formData);
    }
  };
  return (
    <AddCarCategory
      {...{
        onSubmit,
        setCarCategoryActive,
        isDescriptionActive,
        handlerSetDescr,
        categoryDescription,
        setDescriptionActive,
        response,
        closeCarCategoryResponse,
      }}
    />
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { postCarCategory })(
  AddCarCategotyContainer
);
