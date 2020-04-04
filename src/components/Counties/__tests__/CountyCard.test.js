import React from 'react';
import { shallow, mount } from 'enzyme';

import CountyCard from '../CountyCard';

const county = {
	"id": 6055,
	"county": "Napa",
	"state": "California",
	"country": "US",
	"lastUpdate": "2020-03-30 22:52:45",
	"lat": 38.5074,
	"lon": -122.333,
	"confirmed": 14,
	"deaths": 0
};

describe('tests for CountyCard', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<CountyCard />);
			expect(tree.html()).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		it('renders with passed county prop', () => {
			const wrapper = mount(<CountyCard county={county} />);
			expect(wrapper.props().county).toEqual(county);
		});
	});
});
