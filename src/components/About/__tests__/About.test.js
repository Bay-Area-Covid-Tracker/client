import React from 'react';
import { shallow } from 'enzyme';

import About from '../About';

describe('tests for About', () => {
	it('renders without crashing', () => {
		const tree = shallow(<About />);
		expect(tree).toMatchSnapshot();
	});
});
