import { AsyncStorage } from "react-native"
import _ from 'lodash';
const __USER_ACCOUNT_BASE__ = 'http://barryren:59851';

//调用服务器端认证方法进行用户登录认证，成功之后赋值LSKEY_ACCESS_TOKEN和LSKEY_REFRESH_TOKEN到浏览器storage中
const login = (accountIdStr, userName, password) => {
  const accoutParams = _.split(accountIdStr, '@', 2);
  let accountId = accoutParams[0];
  let serverName = 'cloud';

  if (accoutParams.length > 1){
    serverName = _.toLower(accoutParams[0]);
    accountId = accoutParams[1];
  }

  const user = `${userName}|||||${accountId}`;
  const authorizationUri = `${__USER_ACCOUNT_BASE__}/OAuth/Token`;
  const paramObject = {
    grant_type: 'password',
    client_id: 'LeyserSystem.LeyserInventory',
    userName: user,
    password
  };
  const params = Object.keys(paramObject).map((key) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(paramObject[key])}`;
  }).join('&');

  return fetch(authorizationUri, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: params
  })
    .then((response) => {
      if (!response.ok && response.status === 503){
        return Promise.reject();
      }
      if (response){
        return response.json();
      }
      else {
        return Promise.reject();
      }
    })
    .then(async (json) => {
      if (json.error){
        return Promise.reject(json);
      }
      await AsyncStorage.setItem('token', json.access_token);
      await AsyncStorage.setItem('refresh-token', json.refresh_token);
    });
};

const logoutAsync = async () => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('refresh-token');
}

export {
  login,
  logoutAsync
};
