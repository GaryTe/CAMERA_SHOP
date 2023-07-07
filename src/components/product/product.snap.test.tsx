import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Product from './product';
import { listProduct } from '../../util/mocks';

const history = createMemoryHistory();

const children = <Product products={listProduct()}/>;


describe('Component: Product', () => {
  it('should render Product', () => {

    const {container} = render(
      <Router
        location={history.location}
        navigationType={history.action}
        navigator={history}
      >
        {children}
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
