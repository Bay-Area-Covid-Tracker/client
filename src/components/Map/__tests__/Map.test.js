import React from 'react';
import { shallow } from 'enzyme';

import Map from '../Map';

describe('tests for Map', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<Map />);
			expect(tree).toMatchSnapshot();
		});
	});
});
