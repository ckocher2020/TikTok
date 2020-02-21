/**
 * @format
 */

import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import App from '../../App';

it('renders correctly', () => {
  renderer.create(<App />);
});

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock')
);
