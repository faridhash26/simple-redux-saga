import { combineReducers } from "redux";

import usersreducer from "./users";

const rootreducer = combineReducers({
  users: usersreducer,
});
export default rootreducer;
