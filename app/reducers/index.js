// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import CrushReducer from './reducer-crush';

const rootReducer = combineReducers({
  counter,
  CrushReducer,
  router,
});

export default rootReducer;
