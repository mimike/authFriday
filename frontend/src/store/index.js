import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import bathroomReducer from './bathroom';
import searchReducer from './search';
import reviewReducer from './review';
//import reservationReducer from './reservation';

const rootReducer = combineReducers({  //these all get run when root. but the switch statement default just return the state.
  session: sessionReducer,
  bathroom: bathroomReducer,
  search: searchReducer,
  //reservation: reservationReducer,
  review: reviewReducer



});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
