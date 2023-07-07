import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Catalog from './catalog';
import { store } from '../../store/store/store';
import { functionForTesting } from '../../store/reducers/get-list-camera/get-list-camera';

const history = createMemoryHistory();

const children = <Catalog />;

describe('Component: Catalog', () => {
  it('should render Catalog', () => {
    store.dispatch(functionForTesting());

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
