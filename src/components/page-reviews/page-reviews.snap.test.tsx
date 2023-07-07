import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import PegeReviews from './page-reviews';
import { store } from '../../store/store/store';
import { functionForTesting } from '../../store/reducers/get-reviews/get-reviews';

describe('Component: PegeReviews', () => {
  it('should render PegeReviews', () => {

    const {container} = render(
      <Provider store={store}>
        <PegeReviews cameraId={'1'} functionRequest={functionForTesting}/>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
