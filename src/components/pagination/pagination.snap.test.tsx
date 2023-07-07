import {render} from '@testing-library/react';
import Pagination from './pagination';
import { listProduct } from '../../util/mocks';

describe('Component: Pagination', () => {
  it('should render Pagination', () => {

    const {container} = render(
      <Pagination
        products={listProduct()}
        productPerPage={1}
        onSetCurrentPage={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
