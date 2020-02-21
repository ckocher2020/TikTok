import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Screen from '../../Screen';

it('Screen renders correctly with defaults', () => {
  const screen = renderer.create(<Screen />).toJSON();
  expect(screen).toMatchSnapshot();
});
