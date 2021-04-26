import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import { composeWithDevTools } from "redux-devtools-extension";

type InitialStoreState = () => unknown;

const configureStore = (initialState?: InitialStoreState) => createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(
        applyMiddleware(reduxImmutableStateInvariant())
    )
);

export default configureStore;