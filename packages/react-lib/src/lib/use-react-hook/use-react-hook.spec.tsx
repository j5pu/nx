import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useReactHook from './use-react-hook';

describe('useReactHook', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useReactHook());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
