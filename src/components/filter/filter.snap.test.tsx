import {render} from '@testing-library/react';
import Filter from './filter';

const indicatorFilter = {
  category: '',
  typeCamera: '',
  levelProduct: '',
  priceFrom: '',
  priceTo: ''
};

describe('Component: Filter', () => {
  it('should render correctly Filter', () => {
    const {container} = render(
      <Filter
        onSetIndicatorFilter={jest.fn()}
        indicatorFilter={indicatorFilter}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
