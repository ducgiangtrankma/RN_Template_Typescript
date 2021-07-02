/* eslint-disable @typescript-eslint/no-explicit-any */
import {ResponseBase} from '@config/type';
import {StyleSheet} from 'react-native';
import {TIME_OUT, RESULT_CODE_PUSH_OUT} from '@config/api';
import {select} from 'redux-saga/effects';
import Axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {RootState} from '@store';
import {dispatch} from '@common';
import {AppSate, onSetToken} from '@reducer/appReducer';
import {ApiConstants, appUrl} from '@config/api';
import {handleResponseAxios, handleErrorAxios, _onPushLogout} from '@common';
const tokenKeyHeader = 'authorization';
let refreshTokenRequest: Promise<string> | null = null;
const AxiosInstance = Axios.create({});

AxiosInstance.interceptors.response.use(
  response => response,
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
        : refreshToken(originalRequest);
      const newToken = await refreshTokenRequest;
      refreshTokenRequest = null;
      if (newToken === null) {
        return Promise.reject(error);
      }
      dispatch(onSetToken(newToken));
      originalRequest.headers[tokenKeyHeader] = newToken;
      return AxiosInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);

// refresh token
async function refreshToken(originalRequest: any) {
  return AxiosInstance.get(ApiConstants.REFRESH_TOKEN, originalRequest)
    .then((res: AxiosResponse) => res.data.data)
    .catch(() => null);
}

// base
function* Request<T = unknown>(
  config: AxiosRequestConfig,
  isCheckOut = true,
): Generator<unknown, ResponseBase<T>, any> {
  const {token}: AppSate = yield select((x: any) => x.appReducer);
  const defaultConfig: AxiosRequestConfig = {
    baseURL: appUrl,
    timeout: TIME_OUT,
    headers: {
      'Content-Type': 'application/json',
      [tokenKeyHeader]: token,
    },
  };
  return yield AxiosInstance.request(
    StyleSheet.flatten([defaultConfig, config]),
  )
    .then((res: AxiosResponse<T>) => {
      const result = handleResponseAxios(res);
      return result;
    })
    .catch((error: AxiosError) => {
      const result = handleErrorAxios(error);
      if (!isCheckOut) {
        return result;
      }
      if (result.code === RESULT_CODE_PUSH_OUT && isCheckOut) {
        _onPushLogout();
        return null;
      } else {
        return result;
      }
    });
}
// get
function* Get<T>(
  url: string,
  param?: any,
): Generator<unknown, ResponseBase<T>, any> {
  return yield Request<T>({url: url, params: param, method: 'GET'});
}

// post
function* Post<T>(
  url: string,
  data: any,
): Generator<unknown, ResponseBase<T>, any> {
  return yield Request<T>({url: url, data: data, method: 'POST'});
}

// post file
function* PostWithFile<T>(
  url: string,
  data: any,
): Generator<unknown, ResponseBase<T>, any> {
  const {token} = yield select((x: RootState) => x.appReducer);
  const header: any = {token: token, 'Content-Type': 'multipart/form-data'};
  return yield Request<T>({
    url: url,
    data: data,
    method: 'POST',
    headers: header,
  });
}

// put
function* Put<T>(
  url: string,
  data: any,
  params?: any,
): Generator<unknown, ResponseBase<T>, any> {
  return yield Request<T>({
    url: url,
    data: data,
    params: params,
    method: 'PUT',
  });
}

// delete
function* Delete<T>(
  url: string,
  params?: any,
): Generator<unknown, ResponseBase<T>, any> {
  return yield Request<T>({
    url: url,
    params: params,
    method: 'DELETE',
  });
}
export const ServiceSaga = {
  Get,
  Post,
  Put,
  Delete,
  PostWithFile,
  Request,
};
