import * as types from '../actions/consts';
import {createCommonReducer} from '../assets/reducerGenerator';

export default createCommonReducer({fetchingStatus: 0}, {
  [types.GET_STORAGE_DATA_REQUEST]: (state, action) => ({...state, fetchingStatus: 1}),
  [types.GET_STORAGE_DATA_SUCCESS]: (state, {data}) => ({...state, fetchingStatus: 2, data}),
  [types.GET_STORAGE_DATA_FAILURE]: (state, action) => ({...state, fetchingStatus: 3})
});
