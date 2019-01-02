import {combineReducers} from 'redux';
import schoolIcon from './schoolIcon';
import storage from './storage';
import userProfile from './userProfile';

export default app = combineReducers({
  schoolIcon,
  storage,
  userProfile
});
