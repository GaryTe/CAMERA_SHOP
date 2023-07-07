import { getSimilaProduct } from './get-simila-product';
import { fetchDataSimilarProduct } from '../../api-actions/api-actions';
import { showMoreCards, showFewerCards } from './get-simila-product';
import { listProduct } from '../../../util/mocks';

const products = listProduct();

const state = {
  dataSimilaCameras: null,
  sortListCamerra: null,
  counterMin: 0,
  counterMax: 3
};

const firstModifiedState = {
  dataSimilaCameras: products,
  sortListCamerra: null,
  counterMin: 0,
  counterMax: 3
};

const secondModifiedState = {
  dataSimilaCameras: products,
  sortListCamerra: null,
  counterMin: 3,
  counterMax: 6
};

describe('Reducer: getSimilaProduct', () => {
  it('should update dataSimilaCameras, sortListCamerra', () => {
    expect(getSimilaProduct.reducer(state, {type: fetchDataSimilarProduct.fulfilled.type, payload: products}))
      .toEqual({
        dataSimilaCameras: products,
        sortListCamerra: products,
        counterMin: 0,
        counterMax: 3
      });
  });
  it('should update counterMin = 3 and counterMax = 6', () => {
    expect(getSimilaProduct.reducer(firstModifiedState, showMoreCards()))
      .toEqual({
        dataSimilaCameras: products,
        sortListCamerra: products,
        counterMin: 3,
        counterMax: 6
      });
  });
  it('should update counterMin = 0 and counterMax = 3', () => {
    expect(getSimilaProduct.reducer(secondModifiedState, showFewerCards()))
      .toEqual({
        dataSimilaCameras: products,
        sortListCamerra: products,
        counterMin: 0,
        counterMax: 3
      });
  });
});
