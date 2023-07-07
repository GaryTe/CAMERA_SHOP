import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ScreenError from './screen-error';

const history = createMemoryHistory();

const children = <ScreenError/>;

describe('Component: ScreenError', () => {
  it('should render ScreenError', () => {

    const {container} = render(
      <Router
        location={history.location}
        navigationType={history.action}
        navigator={history}
      >
        {children}
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
