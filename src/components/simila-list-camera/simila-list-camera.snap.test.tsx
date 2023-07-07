import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {useState} from 'react';
import SimilaListCamera from './simila-list-camera';
import { functionForTesting } from '../../store/reducers/get-simila-product/get-simila-product';
import { store } from '../../store/store/store';

const mockUseState = jest.fn(() => useState(false));

describe('Component: SimilaListCamera', () => {
  it('should render SimilaListCamera', () => {
    store.dispatch(functionForTesting);

    const {container} = render(
      <Provider store={store}>
        <SimilaListCamera
          cameraId={'1'}
          onSetMadalWindowAddProduct={mockUseState}
        />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
