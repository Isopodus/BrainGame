import { createStore } from "redux";
import reducers from "./reducers";
import { setAction, cleanAction } from "./actions";

export const store = createStore(reducers);
export { setAction, cleanAction };
