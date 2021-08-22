import {store} from '@store';
import axiosClient from '../axiosClient';
const exampleApi = {
  getAll: (params?: any) => {
    const url = 'categories';
    return axiosClient.get(url, {params});
  },
  getWithToken: (params?: any) => {
    const {token} = store.getState().appReducer;
    const url = 'categories';
    return axiosClient.get(url, {
      params,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
  getListUser: (params?: any) => {
    const {token} = store.getState().appReducer;
    const url = 'listUser';
    return axiosClient.get(url, {
      params,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
};
export {exampleApi};
