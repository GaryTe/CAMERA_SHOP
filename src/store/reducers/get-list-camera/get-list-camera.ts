import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDataListCamera } from '../../api-actions/api-actions';
import { down } from '../../../util/util';
import { Cameras } from '../../../types/store/store';
import { NameSpace, stringValue } from '../../../const/const';
import { listCamera } from '../../../types/types-response/types-response';
import { listProduct } from '../../../util/mocks';

const initialState: Cameras = {
  cameras: null,
  modifiedListProduct: null,
};

export const getListCamera = createSlice({
  name: NameSpace.ListCamera,
  initialState,
  reducers: {
    changeDataProduct: (state, action: PayloadAction<listCamera>) => {
      state.modifiedListProduct = action.payload;
    },
    functionForTesting: (state) => {
      state.cameras = listProduct();
      state.modifiedListProduct = listProduct();
    }
  },

  extraReducers(builder) {
    builder
      .addCase(fetchDataListCamera.fulfilled, (state, action) => {
        state.cameras = action.payload;
        state.modifiedListProduct = down(action.payload, stringValue[0]);
      });
  }
});

export const {changeDataProduct, functionForTesting} = getListCamera.actions;
