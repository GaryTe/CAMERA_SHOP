import {render} from '@testing-library/react';
import MessageDispatchReview from './message-dispatch-review';

describe('Component: MessageDispatchReview', () => {
  it('should render MessageDispatchReview', () => {

    const {container} = render(
      <MessageDispatchReview onSetModalWindowMessage={jest.fn()}/>
    );

    expect(container).toMatchSnapshot();
  });
});
