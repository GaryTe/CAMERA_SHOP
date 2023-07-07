import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
//import userEvent from '@testing-library/user-event';
import PegeReviews from './page-reviews';
import { store } from '../../store/store/store';
import { functionForTesting } from '../../store/reducers/get-reviews/get-reviews';
import { review } from '../../util/mocks';

describe('Component: PegeReviews', () => {
  it('Hides the button "Show more reviews"  if the button is counter value is >= reviews', () => {

    render(
      <Provider store={store}>
        <PegeReviews cameraId={'1'} functionRequest={functionForTesting}/>
      </Provider>,
    );

    expect(screen.getByText('Показать больше отзывов')).toBeInTheDocument();

    store.dispatch(functionForTesting([review]));

    expect(screen.queryByRole('Показать больше отзывов')).not.toBeInTheDocument();
  });
});
