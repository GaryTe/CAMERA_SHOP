import { createSlice } from '@reduxjs/toolkit';
import { fetchDataPromoProduct } from '../../api-actions/api-actions';
import { PromoCamera } from '../../../types/store/store';
import { NameSpace } from '../../../const/const';
import { promoProduct } from '../../../util/mocks';

const initialState: PromoCamera = {
  promoCamerasData: null
};

export const getPromoProduct = createSlice({
  name: NameSpace.Promo,
  initialState,
  reducers: {
    functionForTesting: (state) => {
      state.promoCamerasData = promoProduct;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDataPromoProduct.fulfilled, (state, action) => {
        state.promoCamerasData = action.payload;
      });
  }
});

export const {functionForTesting} = getPromoProduct.actions;
