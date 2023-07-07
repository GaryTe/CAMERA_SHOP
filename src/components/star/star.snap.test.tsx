import {render} from '@testing-library/react';
import Star from './star';

const number = 3;

describe('Component: Star', () => {
  it('should render correctly Star', () => {
    const {container} = render(<Star result={number} />);

    expect(container).toMatchSnapshot();
  });
});
