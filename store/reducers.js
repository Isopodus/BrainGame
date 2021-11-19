import initialState from "./state";

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case "SET_USER": {
      let { user } = state;
      const { payload } = action;
      user = { ...user, ...payload };
      return { ...state, user };
    }
    case "SET_TOKEN": {
      const { payload } = action;
      return { ...state, token: payload };
    }
    default:
      return state;
  }
}
