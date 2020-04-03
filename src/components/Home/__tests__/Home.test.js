import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

describe('tests for Home component', () => {
  describe('snapshot tests', () => {
    it('renders without crashing', () => {
        const tree = shallow(<Home />);
        expect(tree).toMatchSnapshot();
    });
  });
});
