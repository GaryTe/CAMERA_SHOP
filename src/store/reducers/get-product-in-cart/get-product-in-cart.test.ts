import { getProductInCart } from './get-product-in-cart';
import { closeModalWindow, addProductInCart } from './get-product-in-cart';
import { product } from '../../../util/mocks';

const state = {dataProduct: [], loading: false};

describe('Reducer: getProductInCart', () => {
  it('changes loading to false', () => {
    expect(getProductInCart.reducer(state, closeModalWindow()))
      .toEqual({dataProduct: [], loading: false});
  });
  it('changes loading to true and update data for dataProduct', () => {
    expect(getProductInCart.reducer(state, addProductInCart(product)))
      .toEqual({dataProduct: [product], loading: true});
  });
});
