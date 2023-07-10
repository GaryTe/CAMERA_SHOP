import { store } from '../../store/store/store';
import { CamerasList, CardProduct, Reviews, PromoProduct, Review } from '../types-response/types-response';

export type Cameras = {
  cameras: CamerasList | null;
  modifiedProductsList: CamerasList | null;
}

export type CardCamera = {
  dataCamera: CardProduct | null;
}

export type SimilaCameras = {
  similaCamerasData: CamerasList | null;
  sortCamerasList: CamerasList | null;
  counterMin: number;
  counterMax: number;
}

export type ReviewsCamera = {
  reviewsData: Reviews | Array<Review>;
  resultSortReviews: Reviews | null;
  reviews: Reviews | null;
  counter: number;
}

export type PromoCamera = {
  promoCamerasData: PromoProduct | null;
}

export type Cart = {
  productsData: CamerasList | Array<CardProduct>;
  loading: boolean;
}

export type RootState = ReturnType<typeof store.getState>;
