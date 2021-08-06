import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import {
  deleteCarCategory,
  getCarCategories,
} from "../../Redux/carCategory-reducer";
import AddCarCategoryContainer from "./AddCarCategory/AddCarCategoryContainer";
import CarCategories from "./CarCategories";
import ChangeCarCategoryContainer from "./ChangeCarCategory/ChangeCarCategoryContainer";
import { setCarCategoryResponse } from "./../../Redux/carCategory-reducer";

const CarCategoriesContainer = ({
  getCarCategories,
  carCategories,
  deleteCarCategory,
  response,
  setCarCategoryResponse,
  errorResponse,
}) => {
  const [isAddCarCategory, setCarCategoryActive] = useState(false);
  const [isChangeCarCategotyActive, setChangeCarCategoryActive] =
    useState(false);
  const [curCarCategoryId, setCurCarCategoryId] = useState("");

  const handlerAddCarCategory = () => {
    setCarCategoryActive(true);
  };

  const hanlderChangeCarCategory = (id) => {
    setCurCarCategoryId(id);
    setChangeCarCategoryActive(true);
  };

  const handlerDeleteCarCategory = (id) => {
    deleteCarCategory(id);
  };

  const closeCarCategoryResponse = () => {
    setCarCategoryResponse("");
    window.location.reload();
  };

  useEffect(() => {
    getCarCategories();
  }, []);

  if (
    (!carCategories || carCategories.length === 0) &&
    (!errorResponse || errorResponse.length === 0)
  ) {
    return <Preloader />;
  }

  return (
    <>
      {isAddCarCategory && (
        <AddCarCategoryContainer
          {...{ setCarCategoryActive, response, closeCarCategoryResponse }}
        />
      )}
      {isChangeCarCategotyActive && (
        <ChangeCarCategoryContainer
          {...{
            curCarCategoryId,
            setChangeCarCategoryActive,
            response,
            closeCarCategoryResponse,
          }}
        />
      )}
      <CarCategories
        {...{
          carCategories,
          handlerAddCarCategory,
          isAddCarCategory,
          handlerDeleteCarCategory,
          hanlderChangeCarCategory,
          isChangeCarCategotyActive,
          response,
          closeCarCategoryResponse,
          errorResponse,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  carCategories: state.carCategories.carCategories,
  response: state.carCategories.response,
  errorResponse: state.carCategories.errorResponse,
});

export default connect(mapStateToProps, {
  getCarCategories,
  deleteCarCategory,
  setCarCategoryResponse,
})(CarCategoriesContainer);
