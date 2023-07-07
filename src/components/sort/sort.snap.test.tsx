import {render} from '@testing-library/react';
import Sort from './sort';
import { stringValue } from '../../const/const';

const valueSort = {
  priceOfPopularity: stringValue[0],
  descendingOfAscending: stringValue[2]
};

describe('Component: Sort', () => {
  it('should render correctly Sort', () => {
    const {container} = render(
      <Sort
        onSetValueSort={jest.fn()}
        valueSort={valueSort}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
