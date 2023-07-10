import { getProductInCart } from './get-product-in-cart';
import { closeModalWindow, addProductInCart } from './get-product-in-cart';
import { product } from '../../../util/mocks';

const state = {productsData: [], loading: false};

describe('Reducer: getProductInCart', () => {
  it('changes loading to false', () => {
    expect(getProductInCart.reducer(state, closeModalWindow()))
      .toEqual({productsData: [], loading: false});
  });
  it('changes loading to true and update data for productsData', () => {
    expect(getProductInCart.reducer(state, addProductInCart(product)))
      .toEqual({productsData: [product], loading: true});
  });
});
