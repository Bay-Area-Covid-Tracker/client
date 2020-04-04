import React from 'react';
import { shallow, mount } from 'enzyme';

import CountiesContainer from '../CountiesContainer';

const reports = [
	{
		"type": "Feature",
		"properties": {
			"id": 6001,
			"county": "Alameda",
			"state": "California",
			"country": "US",
			"lastUpdate": "2020-04-01 21:58:49",
			"confirmed": 313,
			"deaths": 7
		},
		"geometry": {
			"type": "Point",
			"coordinates": [
				-121.893,
				37.6463
			]
		}
	},
	{
		"type": "Feature",
		"properties": {
			"id": 6013,
			"county": "Contra Costa",
			"state": "California",
			"country": "US",
			"lastUpdate": "2020-04-01 21:58:49",
			"confirmed": 249,
			"deaths": 3
		},
		"geometry": {
			"type": "Point",
			"coordinates": [
				-121.929,
				37.9192
			]
		}
	}
];

describe('tests for CountiesContainer', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<CountiesContainer />);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		it('renders with dailyReport data when passed as prop', () => {
			const wrapper = mount(<CountiesContainer reports={reports} />);
			expect(wrapper.props().reports).toEqual(reports);
		});

		it('contains at least one CountyCard component', () => {
			const wrapper = shallow(<CountiesContainer reports={reports} />);
			expect(wrapper.find('CountyCard').exists()).toBe(true);
		});
	});
});
