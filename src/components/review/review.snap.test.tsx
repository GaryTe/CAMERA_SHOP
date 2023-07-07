import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {useState} from 'react';
import Review from './review';
import { store } from '../../store/store/store';

const mockUseState = jest.fn(() => useState(false));

const history = createMemoryHistory();

const children = (
  <Review
    cameraId={'1'}
    onSetModalWindow={mockUseState}
    onSetModalWindowMessage={mockUseState}
  />
);

describe('Component: Review', () => {
  it('should render Review', () => {

    const {container} = render(
      <Provider store={store}>
        <Router
          location={history.location}
          navigationType={history.action}
          navigator={history}
        >
          {children}
        </Router>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
