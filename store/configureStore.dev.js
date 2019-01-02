import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const enhancer = compose(
  applyMiddleware(thunk, createLogger())
);

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}
