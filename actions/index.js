import {serviceApi} from '../assets/utils';
import * as types from './consts';

const NET_STORAGE_SERVER_END_POINT = '/common/schoolNetDisk/';

export const showLoadingGif = () => ({
  type: types.SHOW_LOADING_GIF
});

export const closeLoadingGif = () => ({
  type: types.CLOSE_LOADING_GIF
});

export const getSchoolIconUrl = () => (dispatch) => {
  dispatch({type: types.GET_SCHOOL_ICON_REQUEST});
  dispatch(showLoadingGif());
  return serviceApi('/common/schoolSystemSetting/GetSchoolIcoUrl')
  .then((data) => {
    dispatch(closeLoadingGif());
    dispatch({
      type: types.GET_SCHOOL_ICON_SUCCESS,
      data
    });
    return Promise.resolve(data);
  }).catch((error) => {
    dispatch(closeLoadingGif());
    dispatch({type: types.GET_SCHOOL_ICON_FAILURE});
    return Promise.reject(error);
  })
};

export const getStorageData = (orderType = 1) => (dispatch) => {
  dispatch({type: types.GET_STORAGE_DATA_REQUEST});
  dispatch(showLoadingGif());
  return serviceApi(`${NET_STORAGE_SERVER_END_POINT}GetFolderTreeView?orderType=${orderType}`).then((res) => {
    dispatch(closeLoadingGif());
    const data = res.result;
    dispatch({type: types.GET_STORAGE_DATA_SUCCESS, data});
    return Promise.resolve(data);
  }).catch((error) => {
    dispatch(closeLoadingGif());
    dispatch({type: types.GET_STORAGE_DATA_FAILURE});
    return Promise.reject(error);
  });
};

export const getUserProfile = () => (dispatch) => {
  dispatch({type: types.APP_USER_PROFILE_REQUEST});
  dispatch(showLoadingGif());
  return serviceApi('/common/userProfile/GetUserProfile').then((json) => {
    dispatch(closeLoadingGif());
    dispatch({type: types.APP_USER_PROFILE_SUCCESS, data: json});
    return Promise.resolve(json);
  }).catch((error) => {
    dispatch(closeLoadingGif());
    dispatch({type: types.APP_USER_PROFILE_FAILURE});
    return Promise.reject(error);
  });
}

export const goBackToDirectory = () => (dispatch) => {
  dispatch({type: types.GO_BACK_TO_DIRECTORY});
}

export const goToDirectory = (id) => (dispatch) => {
  dispatch({type: types.GO_TO_DIRECTORY, id});
}

export const getFiles = (folderId) => (dispatch) => {
  dispatch({type: types.GET_FILES_REQUEST, folderId});
  return serviceApi(`${NET_STORAGE_SERVER_END_POINT}GetFiles?folderId=${folderId}&view=${1}&myFolderMode=${false}`).then((res) => {
    const data = res.result.files;
    dispatch({type: types.GET_FILES_SUCCESS, data, folderId});
    return Promise.resolve(data);
  }).catch((error) => {
    dispatch({type: types.GET_FILES_FAILURE, folderId});
    return Promise.reject(error);
  });
}
