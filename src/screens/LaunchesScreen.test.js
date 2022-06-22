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

  test('page filters initially', async () => {
    const {queryByText} = render(<App />);
    const past = queryByText('Past');
    const upcoming = queryByText('Upcoming');
    const success = queryByText('Success');
    const failed = queryByText('Failed');

    expect(past).toBeTruthy();
    expect(success).toBeTruthy();
    expect(failed).toBeTruthy();
    expect(upcoming).toBeTruthy();
  });

  test('page filters after pressing past or upcoming', () => {
    const {getByText, queryByText} = render(<App />);
    const upcoming = queryByText('Upcoming');
    const past = queryByText('Past');

    fireEvent(upcoming, 'onPress');
    expect(() => getByText('Success')).toThrow('Unable to find an element');
    expect(() => getByText('Failed')).toThrow('Unable to find an element');
    fireEvent(past, 'onPress');
    expect(() => getByText('Success'));
    expect(() => getByText('Failed'));
  });
});
