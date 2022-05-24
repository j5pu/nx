import { render } from '@testing-library/react';

import NextComponent from './next-component';

describe('NextComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextComponent />);
    expect(baseElement).toBeTruthy();
  });
});
