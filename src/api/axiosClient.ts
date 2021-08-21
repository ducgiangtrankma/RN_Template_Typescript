import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import queryString from 'query-string';
import {handleResponseAxios, dispatch} from '@common';
import {ApiConstants, appUrl} from '@config/api';
import {onLogout, onSetToken} from '@reducer/appReducer';
const AxiosInstance = axios.create({});
let refreshTokenRequest: Promise<string> | null = null;
const axiosClient = axios.create({
  baseURL: appUrl,
  headers: {
    'Content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  return config;
});
// refresh token
async function refresh_Token() {
  return AxiosInstance.post(`${appUrl}refreshToken`, {
    refresh_token: ApiConstants.REFRESH_TOKEN,
  })
    .then((res: AxiosResponse) => res.data.data)
    .catch(() => null);
}

axiosClient.interceptors.response.use(
  (response: any) => {
    if (response && response.data) {
      const result = handleResponseAxios(response);
      return result;
    }
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      error &&
      error.response &&
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      refreshTokenRequest = refreshTokenRequest
        ? refreshTokenRequest
        : refresh_Token();
      const newToken = await refreshTokenRequest;
      refreshTokenRequest = null;
      if (newToken === null) {
        dispatch(onLogout());
        return Promise.reject(error);
      }
      dispatch(onSetToken(newToken));
      axios.defaults.headers.common.Authorization = 'Bearer ' + newToken;
      originalRequest.headers.Authorization = 'Bearer ' + newToken;
      return AxiosInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);
export default axiosClient;
