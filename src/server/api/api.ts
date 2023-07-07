import axios, { AxiosInstance } from 'axios';
import { BACKEND_URL } from '../../const/const';

export const createAPI = (): AxiosInstance =>{
  const api = axios.create({
    baseURL: BACKEND_URL,
  });

  return api;
};
