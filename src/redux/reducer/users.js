import * as type from "../types";

const initstate = {
  users: [],
  loading: false,
  error: null,
};

const usersreducer = (state = initstate, action) => {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case type.GET_USERS_FAILD:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default usersreducer;
