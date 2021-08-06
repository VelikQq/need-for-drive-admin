import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../../Components/Preloader/Preloader";
import {
  getCarCategory,
  setCarCategory,
  updateCarCategory,
} from "./../../../Redux/carCategory-reducer";
import ChangeCarCategory from "./ChangeCarCategory";

const ChangeCarCategoryContainer = ({
  curCarCategoryId,
  setChangeCarCategoryActive,
  getCarCategory,
  setCarCategory,
  carCategory,
  updateCarCategory,
  response,
  closeCarCategoryResponse,
}) => {
  const [categoryDescription, setCategoryDescription] = useState("");
  const [isDescriptionActive, setDescriptionActive] = useState(false);

  const handlerSetDescr = (value) => {
    setDescriptionActive(true);
    setCategoryDescription(value);
  };

  const handlerCancel = () => {
    setCarCategory();
    setChangeCarCategoryActive(false);
  };

  const onSubmit = (values) => {
    const formData = new FormData();
    if (values.name && categoryDescription) {
      formData.append("name", values.name);
      formData.append("description", categoryDescription);
      updateCarCategory(curCarCategoryId, formData);
    }
  };

  useEffect(() => {
    getCarCategory(curCarCategoryId);
  }, [curCarCategoryId]);

  if (!carCategory || carCategory.length === 0) {
    return <Preloader />;
  }
  return (
    <ChangeCarCategory
      {...{
        onSubmit,
        handlerCancel,
        carCategory,
        isDescriptionActive,
        categoryDescription,
        setDescriptionActive,
        handlerSetDescr,
        setCategoryDescription,
        response,
        closeCarCategoryResponse,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  carCategory: state.carCategories.carCategory,
});

export default connect(mapStateToProps, {
  getCarCategory,
  setCarCategory,
  updateCarCategory,
})(ChangeCarCategoryContainer);
