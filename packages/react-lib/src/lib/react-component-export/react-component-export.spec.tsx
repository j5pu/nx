import { render } from '@testing-library/react';

import ReactComponentExport from './react-component-export';

describe('ReactComponentExport', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactComponentExport />);
    expect(baseElement).toBeTruthy();
  });
});
