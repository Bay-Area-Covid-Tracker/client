import React from 'react';
import { shallow } from 'enzyme';

import NavigationBar from '../NavigationBar';

describe('tests for Navigation', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<NavigationBar />);
			expect(tree).toMatchSnapshot();
		});
	});
});
