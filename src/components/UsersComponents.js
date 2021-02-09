import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardComponent from "./CardComponent";
import { getuser } from "../redux/action/usersaction";

const UsersComponents = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { loading, error } = users;
  console.log(loading, error);
  useEffect(() => {
    dispatch(getuser());
  }, []);

  return (
    <>
      {loading && <p>Loading ...</p>}
      {users.users.length > 0 &&
        users.users.map((user) => <CardComponent user={user} key={user.id} />)}
      {users.users.length === 0 && !loading && <p>NO users avalable </p>}
      {error && !loading && <p>{error}</p>}
    </>
  );
};

export default UsersComponents;
