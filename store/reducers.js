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
    case "SET_SESSION": {
      let { session } = state;
      const { payload } = action;
      session = { ...session, ...payload };
      return { ...state, session };
    }
    case "CLEAR_SESSION": {
      return { ...state, session: initialState.session };
    }
    default:
      return state;
  }
}
