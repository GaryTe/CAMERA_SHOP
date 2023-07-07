import { getCardProduct } from './get-card-product';
import { fetchDataCardProduct } from '../../api-actions/api-actions';
import { product } from '../../../util/mocks';

const state = {dataCamera: null};

describe('Reducer: getCardProduct', () => {
  it('should update dataCamera', () => {
    expect(getCardProduct.reducer(state, {type: fetchDataCardProduct.fulfilled.type, payload:product}))
      .toEqual({dataCamera: product});
  });
});
