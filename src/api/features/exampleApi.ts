import {store} from '@store';
import axiosClient from '../axiosClient';
const {token} = store.getState().appReducer;

const exampleApi = {
  getAll: (params?: any) => {
    const url = 'categories';
    return axiosClient.get(url, {params});
  },
  getWithToken: (params?: any) => {
    const url = 'categories';
    return axiosClient.get(url, {
      params,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
};
export {exampleApi};
