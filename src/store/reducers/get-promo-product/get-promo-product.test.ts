import { getPromoProduct } from './get-promo-product';
import { fetchDataPromoProduct } from '../../api-actions/api-actions';
import { promoProduct } from '../../../util/mocks';

const state = {dataPromoCamera: null};

describe('Reducer: getPromoProduct', () => {
  it('should update dataPromoCamera', () => {
    expect(getPromoProduct.reducer(state, {type: fetchDataPromoProduct.fulfilled.type, payload: promoProduct}))
      .toEqual({dataPromoCamera: promoProduct});
  });
});
