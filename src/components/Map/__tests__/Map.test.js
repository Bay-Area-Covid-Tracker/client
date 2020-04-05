import React from 'react';
import { shallow } from 'enzyme';

import Map from '../Map';

const dailyReport = {
	"type": "FeatureCollection",
	"features": [
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
	]
};

describe('tests for Map', () => {
	describe('snapshot tests', () => {
		it('renders without crashing', () => {
			const tree = shallow(<Map dailyReport={dailyReport} />);
			expect(tree).toMatchSnapshot();
		});
	});
});
