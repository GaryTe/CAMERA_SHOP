import { createSlice } from '@reduxjs/toolkit';
import { fetchDataSimilarProduct } from '../../api-actions/api-actions';
import { SimilaCameras } from '../../../types/store/store';
import { NameSpace } from '../../../const/const';
import { listProduct } from '../../../util/mocks';

const initialState: SimilaCameras = {
  similaCamerasData: null,
  sortCamerasList: null,
  counterMin: 0,
  counterMax: 3
};

export const getSimilaProduct = createSlice({
  name: NameSpace.SimilarProduct,
  initialState,
  reducers: {
    showMoreCards: (state) => {
      if(state.similaCamerasData === null) {return;}
      state.counterMin += 3;
      state.counterMax += 3;
      state.sortCamerasList = state.similaCamerasData;
    },
    showFewerCards: (state) => {
      if(state.similaCamerasData === null) {return;}
      state.counterMin -= 3;
      state.counterMax -= 3;
      state.sortCamerasList = state.similaCamerasData;
    },
    functionForTesting: (state) => {
      state.sortCamerasList = listProduct();
      state.similaCamerasData = listProduct();
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDataSimilarProduct.fulfilled, (state, action) => {
        state.similaCamerasData = action.payload;
        state.sortCamerasList = state.similaCamerasData;
      });
  }
});

export const {showMoreCards, showFewerCards, functionForTesting} = getSimilaProduct.actions;
