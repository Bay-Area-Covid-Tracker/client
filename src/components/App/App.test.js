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

  describe('unit tests', () => {
    it('contains Home component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('Home').exists()).toBe(true);
    });
  });
});
