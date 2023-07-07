import { getListCamera } from './get-list-camera';
import { changeDataProduct } from './get-list-camera';
import { fetchDataListCamera } from '../../api-actions/api-actions';
import { down } from '../../../util/util';
import { stringValue } from '../../../const/const';
import { listProduct } from '../../../util/mocks';

const products = listProduct();
const state = {cameras: null, modifiedListProduct: null};

describe('Reducer: getListCamera', () => {
  it('should update data product', () => {
    expect(getListCamera.reducer(state, {type: fetchDataListCamera.fulfilled.type, payload:products}))
      .toEqual({cameras: products, modifiedListProduct: down(products, stringValue[0])});
  });
  it('should update data modifiedListProduct', () => {
    expect(getListCamera.reducer(state, changeDataProduct(products)))
      .toEqual({cameras: null, modifiedListProduct: products});
  });
});
