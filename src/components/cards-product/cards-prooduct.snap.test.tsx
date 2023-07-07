import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import CardsProduct from './cards-product';
import { store } from '../../store/store/store';
import { functionForTesting } from '../../store/reducers/get-simila-product/get-simila-product';
import { dataSimilaCameras } from '../../store/selectors/data-simila-cameras/selectors';

const history = createMemoryHistory();

const children = (
  <
    CardsProduct
    fetch={functionForTesting}
    selector={dataSimilaCameras}
  />
);


describe('Component: CardsProduct', () => {
  it('should render CardsProduct', () => {

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
