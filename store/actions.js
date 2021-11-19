const SET_ACTIONS = {
  user: "SET_USER",
  token: "SET_TOKEN",
};
const CLEAN_ACTIONS = {};

export const setAction = (type, payload) => {
  return { type: SET_ACTIONS[type], payload };
};
export const cleanAction = type => {
  return { type: CLEAN_ACTIONS[type] };
};
