const SET_ACTIONS = {
  token: "SET_TOKEN",
  user: "SET_USER",
  session: "SET_SESSION",
};
const CLEAN_ACTIONS = {
  session: "CLEAR_SESSION",
};

export const setAction = (type, payload) => {
  return { type: SET_ACTIONS[type], payload };
};
export const cleanAction = type => {
  return { type: CLEAN_ACTIONS[type] };
};
