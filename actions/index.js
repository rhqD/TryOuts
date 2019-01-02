import {serviceApi} from '../assets/utils';
import * as types from './consts';

const NET_STORAGE_SERVER_END_POINT = '/common/schoolNetDisk/';

export const getSchoolIconUrl = () => (dispatch) => {
  dispatch({type: types.GET_SCHOOL_ICON_REQUEST});
  return serviceApi('/common/schoolSystemSetting/GetSchoolIcoUrl')
  .then((data) => {
    dispatch({
      type: types.GET_SCHOOL_ICON_SUCCESS,
      data
    });
  }).catch((error) => {
    dispatch({type: types.GET_SCHOOL_ICON_FAILURE});
  })
};

export const getStorageData = (orderType = 1) => (dispatch) => {
  dispatch({type: types.GET_STORAGE_DATA_REQUEST});
  return serviceApi(`${NET_STORAGE_SERVER_END_POINT}GetFolderTreeView?orderType=${orderType}`).then((res) => {
    const data = res.result;
    dispatch({type: types.GET_STORAGE_DATA_SUCCESS, data});
    return Promise.resolve(data);
  }).catch((error) => {
    dispatch({type: types.GET_STORAGE_DATA_FAILURE});
    return Promise.reject(error);
  });
};

export const getUserProfile = () => (dispatch) => {
  dispatch({type: types.APP_USER_PROFILE_REQUEST});
  serviceApi('/common/userProfile/GetUserProfile').then((json) => {
    dispatch({type: types.APP_USER_PROFILE_SUCCESS, data: json});
  }).catch(() => {
    dispatch({type: types.APP_USER_PROFILE_FAILURE});
  });
}
