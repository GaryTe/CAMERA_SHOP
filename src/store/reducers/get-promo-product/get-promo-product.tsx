import { createSlice } from '@reduxjs/toolkit';
import { fetchDataPromoProduct } from '../../api-actions/api-actions';
import { PromoCamera } from '../../../types/store/store';
import { NameSpace } from '../../../const/const';
import { promoProduct } from '../../../util/mocks';

const initialState: PromoCamera = {
  dataPromoCamera: null
};

export const getPromoProduct = createSlice({
  name: NameSpace.Promo,
  initialState,
  reducers: {
    functionForTesting: (state) => {
      state.dataPromoCamera = promoProduct;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDataPromoProduct.fulfilled, (state, action) => {
        state.dataPromoCamera = action.payload;
      });
  }
});

export const {functionForTesting} = getPromoProduct.actions;
