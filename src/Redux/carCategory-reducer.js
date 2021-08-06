import { simbirSoftAPI } from "../API/api";

const SET_CAR_CATEGORIES = "SET_CAR_CATEGORIES";
const SET_CUR_CAR_CATEGORY = "SET_CUR_CAT_CATEGORY";
const SET_CAR_CATEGORY_RESPONSE = "SET_CAR_CATEGORY_RESPONSE";
const SET_ERROR_RESPONSE = "SET_ERROR_RESPONSE";

let intitialState = {
  carCategories: [],
  carCategory: [],
  response: [],
  errorResponse: [],
};

const carCategoriesReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_CAR_CATEGORIES: {
      return {
        ...state,
        carCategories: action.carCategories,
      };
    }
    case SET_CUR_CAR_CATEGORY: {
      return {
        ...state,
        carCategory: action.carCategory,
      };
    }
    case SET_CAR_CATEGORY_RESPONSE: {
      return {
        ...state,
        response: action.response,
      };
    }
    case SET_ERROR_RESPONSE: {
      return {
        ...state,
        errorResponse: action.errorResponse,
      };
    }
    default:
      return state;
  }
};

export const setCarCategories = (carCategories) => ({
  type: SET_CAR_CATEGORIES,
  carCategories,
});

export const setCarCategory = (carCategory) => ({
  type: SET_CUR_CAR_CATEGORY,
  carCategory,
});

export const setCarCategoryResponse = (response) => ({
  type: SET_CAR_CATEGORY_RESPONSE,
  response,
});

export const setErrorResponse = (errorResponse) => ({
  type: SET_ERROR_RESPONSE,
  errorResponse,
});

export const getCarCategories = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCarCategory();
    if (response.status !== 200) {
      dispatch(setErrorResponse(response));
    } else {
      dispatch(setCarCategories(response.data));
    }
  };
};

export const getCarCategory = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCurCarCategory(id);
    dispatch(setCarCategory(response));
  };
};

export const postCarCategory = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postCarCategory(formData);
    dispatch(setCarCategoryResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const updateCarCategory = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateCarCategory(id, formData);
    dispatch(setCarCategoryResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const deleteCarCategory = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteCarCategory(id);
    dispatch(setCarCategoryResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export default carCategoriesReducer;
