import React from 'react';
import { shallow, mount } from 'enzyme';

import CountiesContainer from '../CountiesContainer';

const dailyReport = {
	"Napa": {
			"id": 6055,
			"county": "Napa",
			"state": "California",
			"country": "US",
			"lastUpdate": "2020-03-30 22:52:45",
			"lat": 38.5074,
			"lon": -122.333,
			"confirmed": 14,
			"deaths": 0
	},
	"Santa Clara": {
			"id": 6085,
			"county": "Santa Clara",
			"state": "California",
			"country": "US",
			"lastUpdate": "2020-03-30 22:52:45",
			"lat": 37.231,
			"lon": -121.697,
			"confirmed": 848,
			"deaths": 28
	}
};

describe('tests for CountiesContainer', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<CountiesContainer />);
			expect(tree).toMatchSnapshot();
		});
	});

	describe('unit tests', () => {
		it('renders with dailyReport data when passed as prop', () => {
			const wrapper = mount(<CountiesContainer dailyReport={dailyReport} />);
			expect(wrapper.props().dailyReport).toEqual(dailyReport);
		});
	});
});
