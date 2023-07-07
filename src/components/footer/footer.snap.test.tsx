import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Footer from './footer';

const history = createMemoryHistory();
const children = <Footer />;

describe('Component: Footer', () => {
  it('should render correctly Footer', () => {
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
