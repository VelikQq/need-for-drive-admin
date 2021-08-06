import { simbirSoftAPI } from "./../API/api";

const SET_CITIES = "SET_CITIES";
const SET_CUR_CITY = "SET_CUR_CITY";
const SET_RESPONSE = "SET_RESPONSE";
const SET_ERROR_RESPONSE = "SET_ERROR_RESPONSE";

let initialState = {
  cities: [],
  curCity: [],
  response: [],
  errorResponse: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES: {
      return {
        ...state,
        cities: action.cities,
      };
    }
    case SET_CUR_CITY: {
      return {
        ...state,
        curCity: action.curCity,
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
      };
    }
    default:
      return state;
  }
};

export const setCities = (cities) => ({
  type: SET_CITIES,
  cities,
});

export const setCurCity = (curCity) => ({
  type: SET_CUR_CITY,
  curCity,
});

export const setCityResponse = (response) => ({
  type: SET_RESPONSE,
  response,
});

export const setErrorResponse = (errorResponse) => ({
  type: SET_ERROR_RESPONSE,
  errorResponse,
});

export const getCities = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCities();
    if (response.status !== 200) {
      dispatch(setErrorResponse(response));
    } else {
      dispatch(setCities(response.data));
    }
  };
};

export const getCurCity = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCurCity(id);
    dispatch(setCurCity(response));
  };
};

export const postCity = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postCity(formData);
    dispatch(setCityResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const updateCity = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateCity(id, formData);
    dispatch(setCityResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const deleteCity = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteCity(id);
    dispatch(setCityResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export default citiesReducer;
