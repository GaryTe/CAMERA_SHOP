import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Promo from './promo';
import { functionForTesting } from '../../store/reducers/get-promo-product/get-promo-product';
import { functionForTestingReducers } from '../../store/reducers/get-card-product/get-card-product';
import { store } from '../../store/store/store';

const history = createMemoryHistory();

const children = (
  <Promo
    requestDataPromoProduct={functionForTesting}
    requestDataCardProduct={functionForTestingReducers}
  />
);

describe('Component: Promo', () => {
  it('should render Promo', () => {

    const {container} = render(
      <Provider store={store}>
        <Router
          location={history.location}
          navigationType={history.action}
          navigator={history}
        >
          {children}
        </Router>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
