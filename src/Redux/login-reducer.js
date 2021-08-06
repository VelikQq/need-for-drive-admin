import { simbirSoftAPI } from "./../API/api";
import Cookies from "js-cookie";
import { tokenExpire } from "./../helpers/constants";

const SET_USER_TOKEN = "SET_USER_TOKEN";
const SET_RESPONSE = "SET_RESPONSE";

let initialState = {
  response: [],
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN: {
      Cookies.set("userToken", action.userToken.access_token, {
        expires: tokenExpire,
      });
      Cookies.set("refreshToken", action.userToken.refresh_token, {
        expires: 1,
      });
      window.location.reload();
    }
    case SET_RESPONSE: {
      return {
        ...state,
        response: action.response,
      };
    }
    default:
      return state;
  }
};

export const setUserToken = (userToken) => ({
  type: SET_USER_TOKEN,
  userToken,
});

export const setResponse = (response) => ({
  type: SET_RESPONSE,
  response,
});

export const logIn = (loginData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.authUser(loginData);
    if (response.data.access_token) {
      dispatch(setUserToken(response.data));
    } else {
      dispatch(setResponse(response.data));
    }
  };
};

export const refreshToken = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.refreshToken();
    if (response.data.access_token) {
      dispatch(setUserToken(response.data));
    } else {
      dispatch(setResponse(response.data));
    }
  };
};
export default loginReducer;
