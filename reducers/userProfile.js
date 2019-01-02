import * as types from '../actions/consts';
import {createCommonReducer} from '../assets/reducerGenerator';

export default createCommonReducer({fetchingStatus: 0}, {
  [types.APP_USER_PROFILE_REQUEST]: (state, action) => ({...state, fetchingStatus: 1}),
  [types.APP_USER_PROFILE_SUCCESS]: (state, {data}) => ({...state, fetchingStatus: 2, user: data.result.user, serviceInfos: data.result.serviceInfos}),
  [types.APP_USER_PROFILE_FAILURE]: (state, action) => ({...state, fetchingStatus: 3})
});
