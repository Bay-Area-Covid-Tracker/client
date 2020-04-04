import React from 'react';
import { shallow } from 'enzyme';

import CountyCard from '../CountyCard';

describe('tests for CountyCard', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<CountyCard />);
			expect(tree.html()).toMatchSnapshot();
		});
	});
});
