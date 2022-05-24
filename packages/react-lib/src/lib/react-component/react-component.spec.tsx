import { render } from '@testing-library/react';

import ReactComponent from './react-component';

describe('ReactComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactComponent />);
    expect(baseElement).toBeTruthy();
  });
});
