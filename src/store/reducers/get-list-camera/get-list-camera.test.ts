import { getListCamera } from './get-list-camera';
import { changeDataProducts } from './get-list-camera';
import { fetchDataListCamera } from '../../api-actions/api-actions';
import { sortDown } from '../../../util/util';
import { stringValue } from '../../../const/const';
import { listProduct } from '../../../util/mocks';

const products = listProduct();
const state = {cameras: null, modifiedProductsList: null};

describe('Reducer: getListCamera', () => {
  it('should update data product', () => {
    expect(getListCamera.reducer(state, {type: fetchDataListCamera.fulfilled.type, payload:products}))
      .toEqual({cameras: products, modifiedProductsList: sortDown(products, stringValue[0])});
  });
  it('should update data modifiedProductsList', () => {
    expect(getListCamera.reducer(state, changeDataProducts(products)))
      .toEqual({cameras: null, modifiedProductsList: products});
  });
});
