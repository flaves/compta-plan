import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import eventReducer from '../reducers/eventReducer';

const reducers = combineReducers({
  event: eventReducer,
});

const initialState = {};

const middleware = applyMiddleware(thunk as ThunkMiddleware);

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(middleware)
);

export type State = ReturnType<typeof reducers>;

export default store;
