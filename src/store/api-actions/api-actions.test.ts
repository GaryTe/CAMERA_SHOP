import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import { RootState } from '../../types/store/store';
import { createAPI } from '../../server/api/api';
import { APIRoute } from '../../const/const';
import {
  listProduct,
  product,
  review,
  promoProduct,
  addReview
} from '../../util/mocks';
import {
  fetchDataListCamera,
  fetchDataCardProduct,
  fetchDataSimilarProduct,
  fetchDataReviews,
  fetchDataPromoProduct,
  fetchPostNewReview
} from './api-actions';

const products = listProduct();
const reviews = [review, review];

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);

  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      RootState,
      Action<string>,
      ThunkDispatch<RootState, typeof api, Action>
    >(middlewares);
  it('If status 200 returns an array with products', async () => {
    const store = mockStore();
    mockAPI.onGet(APIRoute.Cameras).reply(200, products);

    const data = await store.dispatch(fetchDataListCamera());
    expect(data.payload).toEqual(products);
  });
  it('If status 200 returns object with description product', async () => {
    const store = mockStore();
    mockAPI.onGet(`${APIRoute.Cameras}/${1}`).reply(200, product);

    const data = await store.dispatch(fetchDataCardProduct(1));
    expect(data.payload).toEqual(product);
  });
  it('If status 200 returns an array with similar products', async () => {
    const store = mockStore();
    mockAPI.onGet(`${APIRoute.Cameras}/${1}${APIRoute.Similar}`).reply(200, products);

    const data = await store.dispatch(fetchDataSimilarProduct(1));
    expect(data.payload).toEqual(products);
  });
  it('If status 200 returns an array with reviews', async () => {
    const store = mockStore();
    mockAPI.onGet(`${APIRoute.Cameras}/${1}${APIRoute.Reviews}`).reply(200, reviews);

    const data = await store.dispatch(fetchDataReviews(1));
    expect(data.payload).toEqual(reviews);
  });
  it('If status 200 returns object with description promo product', async () => {
    const store = mockStore();
    mockAPI.onGet(APIRoute.Promo).reply(200, promoProduct);

    const data = await store.dispatch(fetchDataPromoProduct());
    expect(data.payload).toEqual(promoProduct);
  });
  it('If status 200 returns object with review', async () => {
    const store = mockStore();
    mockAPI.onPost(APIRoute.Reviews).reply(200, review);

    const data = await store.dispatch(fetchPostNewReview(addReview));
    expect(data.payload).toEqual(review);
  });
});
