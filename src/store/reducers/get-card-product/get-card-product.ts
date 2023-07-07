import { createSlice } from '@reduxjs/toolkit';
import { fetchDataCardProduct } from '../../api-actions/api-actions';
import { CardCamera } from '../../../types/store/store';
import { NameSpace } from '../../../const/const';
import { product } from '../../../util/mocks';

const initialState: CardCamera = {
  dataCamera: null
};

export const getCardProduct = createSlice({
  name: NameSpace.CardProduct,
  initialState,
  reducers: {
    functionForTestingReducers: (state) => {
      state.dataCamera = product;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDataCardProduct.fulfilled, (state, action) => {
        state.dataCamera = action.payload;
      });
  }
});

export const {functionForTestingReducers} = getCardProduct.actions;
