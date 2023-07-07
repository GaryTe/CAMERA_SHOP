import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { listCamera, CardProduct, Reviews, PromoProduct, Review } from '../../types/types-response/types-response';
import { DataForNewReview } from '../../types/type-request/type-request';
import { APIRoute } from '../../const/const';

export const fetchDataListCamera = createAsyncThunk<listCamera, undefined, {
  extra: AxiosInstance;
}>(
  'data/responseListCamera',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<listCamera>(APIRoute.Cameras);
    return data;
  },
);

export const fetchDataCardProduct = createAsyncThunk<CardProduct, number, {
  extra: AxiosInstance;
}>(
  'data/responseCardProduct',
  async (cameraId: number, {extra: api}) => {
    const {data} = await api.get<CardProduct>(`${APIRoute.Cameras}/${cameraId}`);
    return data;
  },
);

export const fetchDataSimilarProduct = createAsyncThunk<listCamera, number, {
  extra: AxiosInstance;
}>(
  'data/responseSimilarProduct',
  async (cameraId: number, {extra: api}) => {
    const {data} = await api.get<listCamera>(`${APIRoute.Cameras}/${cameraId}${APIRoute.Similar}`);
    return data;
  },
);

export const fetchDataReviews = createAsyncThunk<Reviews, number, {
  extra: AxiosInstance;
}>(
  'data/responseReviews',
  async (cameraId: number, {extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Cameras}/${cameraId}${APIRoute.Reviews}`);
    return data;
  },
);

export const fetchDataPromoProduct = createAsyncThunk<PromoProduct, undefined, {
  extra: AxiosInstance;
}>(
  'data/responsePromoProduct',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PromoProduct>(APIRoute.Promo);
    return data;
  },
);

export const fetchPostNewReview = createAsyncThunk<Review, DataForNewReview, {
  extra: AxiosInstance;
}>(
  'data/responseYoreReview',
  async (dataReview: DataForNewReview, {extra: api}) => {
    const {data} = await api.post<Review>(APIRoute.Reviews, dataReview);
    return data;
  },
);
