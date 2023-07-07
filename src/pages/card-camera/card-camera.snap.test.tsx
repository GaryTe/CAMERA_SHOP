import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import CardCamera from './card-camera';
import { store } from '../../store/store/store';
import { functionForTesting } from '../../store/reducers/get-list-camera/get-list-camera';
import { functionForTestingReducers } from '../../store/reducers/get-card-product/get-card-product';
import { Path } from '../../const/const';

const history = createMemoryHistory();
history.push(`${Path.Catalog}${Path.Product}${1}`);

const children = <CardCamera />;

describe('Component: CardCamera', () => {
  it('should render CardCamera', () => {
    store.dispatch(functionForTesting());
    store.dispatch(functionForTestingReducers());

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
