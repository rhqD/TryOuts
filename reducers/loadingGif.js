import * as types from '../actions/consts';
import {createCommonReducer} from '../assets/reducerGenerator';

export default createCommonReducer({showCount: 0}, {
  [types.SHOW_LOADING_GIF]: (state, action) => ({
    showCount: state.showCount + 1
  }),
  [types.CLOSE_LOADING_GIF]: (state, {data}) => ({
    showCount: state.showCount - 1
  })
});
