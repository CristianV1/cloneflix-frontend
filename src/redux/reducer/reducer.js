import { TYPES } from "../actions/types";

const initialState = {
  user: {},
  contents: [],
  contentDetails: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case TYPES.GET_ALL_CONTENTS:
      return {
        ...state,
        contents: action.payload,
      };

    case TYPES.GET_USER_CONTENTS:
      return {
        ...state,
        contens: action.payload,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
