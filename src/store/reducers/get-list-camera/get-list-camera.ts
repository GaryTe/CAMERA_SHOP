import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDataListCamera } from '../../api-actions/api-actions';
import { sortDown } from '../../../util/util';
import { Cameras } from '../../../types/store/store';
import { NameSpace, stringValue } from '../../../const/const';
import { CamerasList } from '../../../types/types-response/types-response';
import { listProduct } from '../../../util/mocks';

const initialState: Cameras = {
  cameras: null,
  modifiedProductsList: null,
};

export const getListCamera = createSlice({
  name: NameSpace.ListCamera,
  initialState,
  reducers: {
    changeDataProducts: (state, action: PayloadAction<CamerasList>) => {
      state.modifiedProductsList = action.payload;
    },
    functionForTesting: (state) => {
      state.cameras = listProduct();
      state.modifiedProductsList = listProduct();
    }
  },

  extraReducers(builder) {
    builder
      .addCase(fetchDataListCamera.fulfilled, (state, action) => {
        state.cameras = action.payload;
        state.modifiedProductsList = sortDown(action.payload, stringValue[0]);
      });
  }
});

export const {changeDataProducts, functionForTesting} = getListCamera.actions;
