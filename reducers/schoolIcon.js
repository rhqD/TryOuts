import * as types from '../actions/consts';
import {createCommonReducer} from '../assets/reducerGenerator';

export default createCommonReducer({fetchingStatus: 0}, {
  [types.GET_SCHOOL_ICON_REQUEST]: (state, action) => ({...state, fetchingStatus: 1}),
  [types.GET_SCHOOL_ICON_SUCCESS]: (state, {data: {result: {url}}}) => ({...state, fetchingStatus: 2, url}),
  [types.GET_SCHOOL_ICON_FAILURE]: (state, action) => ({...state, fetchingStatus: 3})
});
