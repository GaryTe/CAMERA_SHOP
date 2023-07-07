import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import AddProduct from './add-product';
import { product } from '../../util/mocks';
import { store } from '../../store/store/store';

describe('Component: AddProduct', () => {
  it('should render AddProduct', () => {

    const {container} = render(
      <Provider store={store}>
        <AddProduct
          dataProduct={product}
          onSetModalWindow={jest.fn()}
        />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
