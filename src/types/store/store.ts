import { store } from '../../store/store/store';
import { listCamera, CardProduct, Reviews, PromoProduct, Review } from '../types-response/types-response';

export type Cameras = {
  cameras: listCamera | null;
  modifiedListProduct: listCamera | null;
}

export type CardCamera = {
  dataCamera: CardProduct | null;
}

export type SimilaCameras = {
  dataSimilaCameras: listCamera | null;
  sortListCamerra: listCamera | null;
  counterMin: number;
  counterMax: number;
}

export type ReviewsCamera = {
  dataReviews: Reviews | Array<Review>;
  resultSortReviews: Reviews | null;
  reviews: Reviews | null;
  counter: number;
}

export type PromoCamera = {
  dataPromoCamera: PromoProduct | null;
}

export type Cart = {
  dataProduct: listCamera | Array<CardProduct>;
  loading: boolean;
}

export type RootState = ReturnType<typeof store.getState>;
