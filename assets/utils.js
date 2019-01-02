import { AsyncStorage } from "react-native"
import _ from 'lodash';
const __WEB_API_BASE__ = 'http://barryren:28072';

const getTokenAsync = async () => {
  return await AsyncStorage.getItem('token');
};

export const serviceApi = (url, options = {}, baseUrl = '', responseOption) => {
  return getTokenAsync().then((token) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers
    };
    if (headers['Content-Type'] === 'multipart/form-data'){
      delete headers['Content-Type'];
    }
    const base = baseUrl || `${__WEB_API_BASE__}/api/services`;
    return processResponsePromise(fetch(`${base}${url}`, {
      ...options,
      headers
    }));
  });
};

const processResponsePromise = (promise) => {
  return promise
  .then((response) => {
    return handleByStatus(response);
  })
  .then((res) => (res.json()))
  .then((json) => {
    if (json && json.result && _.isBoolean(json.result.success) && !json.result.success){
      return Promise.reject(json.result);
    }
    return json;
  });
};

const handleByStatus = (response) => {
  if (!response || !response.status){
    return Promise.reject();
  }
  const {status} = response;
  if (status === 401){
    return Promise.reject(401);
  }
  if (status === 403){
    return Promise.reject(403);
  }
  if (status === 500){
    return Promise.reject(500);
  }
  if (status === 503){
    return Promise.reject(503);
  }
  return Promise.resolve(response);
};
