import { createSlice } from '@reduxjs/toolkit';
import { fetchDataSimilarProduct } from '../../api-actions/api-actions';
import { SimilaCameras } from '../../../types/store/store';
import { NameSpace } from '../../../const/const';
import { listProduct } from '../../../util/mocks';

const initialState: SimilaCameras = {
  dataSimilaCameras: null,
  sortListCamerra: null,
  counterMin: 0,
  counterMax: 3
};

export const getSimilaProduct = createSlice({
  name: NameSpace.SimilarProduct,
  initialState,
  reducers: {
    showMoreCards: (state) => {
      if(state.dataSimilaCameras === null) {return;}
      state.counterMin += 3;
      state.counterMax += 3;
      state.sortListCamerra = state.dataSimilaCameras;
    },
    showFewerCards: (state) => {
      if(state.dataSimilaCameras === null) {return;}
      state.counterMin -= 3;
      state.counterMax -= 3;
      state.sortListCamerra = state.dataSimilaCameras;
    },
    functionForTesting: (state) => {
      state.sortListCamerra = listProduct();
      state.dataSimilaCameras = listProduct();
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDataSimilarProduct.fulfilled, (state, action) => {
        state.dataSimilaCameras = action.payload;
        state.sortListCamerra = state.dataSimilaCameras;
      });
  }
});

export const {showMoreCards, showFewerCards, functionForTesting} = getSimilaProduct.actions;
