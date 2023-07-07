import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MessageAboutAddProduct from './message-about-add-product';
import { store } from '../../store/store/store';

const history = createMemoryHistory();

const children = <MessageAboutAddProduct path={'/'} />;

describe('Component: MessageAboutAddProduct', () => {
  it('should render MessageAboutAddProduct', () => {

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
