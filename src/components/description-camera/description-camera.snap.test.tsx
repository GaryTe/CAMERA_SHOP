import {render} from '@testing-library/react';
import DescriptionCamera from './description-camera';
import { product } from '../../util/mocks';

describe('Component: DescriptionCamera', () => {
  it('should render DescriptionCamera', () => {

    const {container} = render(
      <DescriptionCamera
        camera={product}
        onSetMadalWindowAddProduct={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
