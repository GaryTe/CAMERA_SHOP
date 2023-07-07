import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart } from '../../../types/store/store';
import { NameSpace } from '../../../const/const';
import { CardProduct } from '../../../types/types-response/types-response';

const initialState: Cart = {
  dataProduct: [],
  loading: false
};

export const getProductInCart = createSlice({
  name: NameSpace.AddProduct,
  initialState,
  reducers: {
    addProductInCart: (state, action: PayloadAction<CardProduct>) => {
      state.dataProduct.push(action.payload);
      if(state.dataProduct) {state.loading = true;}
    },
    closeModalWindow: (state) => {
      state.loading = false;
    }
  },
});

export const {addProductInCart, closeModalWindow} = getProductInCart.actions;
