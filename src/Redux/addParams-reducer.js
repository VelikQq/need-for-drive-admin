import { simbirsoftAPI } from "../API/api";

const SET_CAR_PARAMS = "SET_CAR_PARAMS";

let initialState = {
  additionalParameters: [
    {
      id: 12,
      name: "Полный бак",
      resultName: "Топливо",
      resultValue: "100%",
      price: 500,
      checked: false,
    },
    {
      id: 23,
      name: "Детское кресло",
      resultName: "Детское кресло",
      resultValue: "Да",
      price: 200,
      checked: false,
    },
    {
      id: 33,
      name: "Правый руль",
      resultName: "Правый руль",
      resultValue: "Да",
      price: 1600,
      checked: false,
    },
  ],
};

const addParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAR_PARAMS: {
      const id = action.id;
      const exist = state.additionalParameters.some((item) => item.id === id);
      if (exist) {
        const additionalParameters = state.additionalParameters.map((item) =>
          item.id === id
            ? {
                ...item,
                checked: !item.checked,
              }
            : item
        );
        return { ...state, additionalParameters };
      } else {
        return {
          ...state,
        };
      }
    }

    default:
      return state;
  }
};

export const setCarParams = (id) => ({
  type: SET_CAR_PARAMS,
  id,
});

export default addParamsReducer;
