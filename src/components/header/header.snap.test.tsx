import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Header from './header';

const history = createMemoryHistory();
const children = <Header />;

describe('Component: Header', () => {
  it('should render correctly Header', () => {
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
