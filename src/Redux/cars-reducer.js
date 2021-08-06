import { simbirSoftAPI } from "./../API/api";

const SET_CAR_LIST = "SET_CAR_LIST";
const SET_CATEGORY = "SET_CATEGORY";
const SET_RESPONSE = "SET_RESPONSE";
const SET_CURRENT_CAR = "SET_CURRENT_CAR";
const SET_ERROR_RESPONSE = "SET_ERROR_RESPONSE";

let initialState = {
  cars: [],
  category: [],
  response: [],
  errorResponse: [],
  currentCar: [],
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAR_LIST: {
      return {
        ...state,
        cars: action.cars,
      };
    }
    case SET_CURRENT_CAR: {
      return {
        ...state,
        currentCar: action.currentCar,
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        category: action.category,
      };
    }
    case SET_RESPONSE: {
      return {
        ...state,
        response: action.response,
      };
    }
    case SET_ERROR_RESPONSE: {
      return {
        ...state,
        errorResponse: action.errorResponse,
      }
    }
    default:
      return state;
  }
};

export const setCarList = (cars) => ({
  type: SET_CAR_LIST,
  cars,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

export const setResponse = (response) => ({
  type: SET_RESPONSE,
  response,
});

export const setCurrentCar = (currentCar) => ({
  type: SET_CURRENT_CAR,
  currentCar,
});

export const setErrorResponse = (errorResponse) => ({
  type: SET_ERROR_RESPONSE,
  errorResponse,
})

export const getCars = (page) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCars(page);
    if(response.status !== 200) {
      dispatch(setErrorResponse(response))
    } else 
    dispatch(setCarList(response.data));
  };
};

export const getCategory = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCategory();
    dispatch(setCategory(response));
  };
};

export const postCar = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postCar(formData);
    dispatch(setResponse(response));
  
  };
};

export const getCurrentCar = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCurrentCar(id);
    dispatch(setCurrentCar(response));
  };
};

export const deleteCar = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteCar(id);
    dispatch(setResponse(response));
   
  };
};

export const updateCar = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateCar(id, formData);
    dispatch(setResponse(response));
    
  };
};

export default carsReducer;
