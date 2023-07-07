import { combineReducers } from '@reduxjs/toolkit';
import { getListCamera } from '../reducers/get-list-camera/get-list-camera';
import { getCardProduct } from '../reducers/get-card-product/get-card-product';
import { getSimilaProduct } from '../reducers/get-simila-product/get-simila-product';
import { getPromoProduct } from '../reducers/get-promo-product/get-promo-product';
import { getReviews } from '../reducers/get-reviews/get-reviews';
import { getProductInCart } from '../reducers/get-product-in-cart/get-product-in-cart';
import { NameSpace } from '../../const/const';

export const rootReducer = combineReducers ({
  [NameSpace.ListCamera]: getListCamera.reducer,
  [NameSpace.CardProduct]: getCardProduct.reducer,
  [NameSpace.SimilarProduct]: getSimilaProduct.reducer,
  [NameSpace.Reviews]: getReviews.reducer,
  [NameSpace.Promo]: getPromoProduct.reducer,
  [NameSpace.AddProduct]: getProductInCart.reducer
});
