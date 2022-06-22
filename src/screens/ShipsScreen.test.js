import App, {queryClient} from './../App';
import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420

// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  beforeEach(() => {
    queryClient.clear();
    queryClient.setDefaultOptions({queries: {cacheTime: 0}});
  });

  test('page filters initially & navigation', async () => {
    const {queryByText} = render(<App />);
    const toClick = await queryByText('ShipsStack');
    fireEvent(toClick, 'press');

    const newHeader = queryByText('Active');

    expect(newHeader).toBeTruthy();
  });
});
