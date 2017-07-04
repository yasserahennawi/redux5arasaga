// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import CrushReducer from './reducer-crush';
import UserReducer from './reducer-user';

const rootReducer = combineReducers({
  counter,
  CrushReducer,
  UserReducer,
  router,
});

export default rootReducer;
