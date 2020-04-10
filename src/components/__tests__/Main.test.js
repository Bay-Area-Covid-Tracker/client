import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from '../Main';

describe('tests for Main', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<Router><Main /></Router>);
			expect(tree).toMatchSnapshot();
		});
	});
});
