import * as types from '../actions/consts';
import {createCommonReducer} from '../assets/reducerGenerator';
import _ from 'lodash';
export default createCommonReducer({stack: [], filesLoadingStatus: 0}, {
  [types.GET_STORAGE_DATA_REQUEST]: (state, action) => ({...state, stack: []}),
  [types.GET_STORAGE_DATA_SUCCESS]: (state, {data}) => ({...state, stack: [data]}),
  [types.GET_STORAGE_DATA_FAILURE]: (state, action) => ({...state, stack: []}),
  [types.GO_BACK_TO_DIRECTORY]: (state, action) => ({...state, stack: state.stack.slice(0, -1)}),
  [types.GO_TO_DIRECTORY]: (state, action) => ({...state, stack: [...state.stack, _.last(state.stack).subFolders.find(it => it.id === action.id)]}),
  [types.GET_FILES_REQUEST]: (state, action) => ({...state, filesLoadingStatus: 1}),
  [types.GET_FILES_FAILURE]: (state, action) => ({...state, filesLoadingStatus: 3}),
  [types.GET_FILES_SUCCESS]: (state, action) => {
    const {folderId, data} = action;
    const curr = _.last(state.stack);
    if (curr.id === folderId){
      const rest = state.stack.slice(0, -1);
      curr.files = data;
      return {...state, stack: [...state.stack], filesLoadingStatus: 2}
    }
    return state;
  }
});
