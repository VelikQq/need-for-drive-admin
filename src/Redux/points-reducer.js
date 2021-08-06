import { simbirSoftAPI } from "./../API/api";

const SET_POINTS = "SET_POINTS";
const SET_CUR_POINT = "SET_CUR_POINT";
const SET_POINT_RESPONSE = "SET_POINT_RESPONSE";
const SET_ERROR_RESPONSE = "SET_ERROR_RESPONSE";

let intitialState = {
  points: [],
  point: [],
  response: [],
  errorResponse: [],
};

const pointsReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_POINTS: {
      return {
        ...state,
        points: action.points,
      };
    }
    case SET_CUR_POINT: {
      return {
        ...state,
        point: action.point,
      };
    }
    case SET_POINT_RESPONSE: {
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

export const setPoints = (points) => ({
  type: SET_POINTS,
  points,
});

export const setPoint = (point) => ({
  type: SET_CUR_POINT,
  point,
});

export const setPointResponse = (response) => ({
  type: SET_POINT_RESPONSE,
  response,
});

export const setErrorResponse = (errorResponse) => ({
  type: SET_ERROR_RESPONSE,
  errorResponse,
});

export const getPoints = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getPoints();
    if (response.status !== 200) {
      dispatch(setErrorResponse(response));
    } else {
      dispatch(setPoints(response.data));
    }
  };
};

export const getPoint = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getPoint(id);
    dispatch(setPoint(response));
  };
};

export const postPoint = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postPoint(formData);
    dispatch(setPointResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const updatePoint = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updatePoint(id, formData);
    dispatch(setPointResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const deletePoint = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deletePoint(id);
    dispatch(setPointResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export default pointsReducer;
