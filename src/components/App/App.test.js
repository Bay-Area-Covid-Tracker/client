import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('tests for App component', () => {
  describe('snapshot tests', () => {
    it('renders without crashing', () => {
      const tree = shallow(<App />);
      expect(tree).toMatchSnapshot();
    });
  });

  // Renders with Main component that contains React router
  describe('unit tests', () => {
    it('contains Main component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('Main').exists()).toBe(true);
    });
  });
});
