import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';
import * as apis from '../../../api';

// Define test data
const data = {
  data: {
    "reports": [
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
  }
};

describe('tests for Home component', () => {
  describe('snapshot tests', () => {
    it('renders without crashing', () => {
        const tree = shallow(<Home />);
        expect(tree).toMatchSnapshot();
    });
  });

  describe('integration tests', () => {
    // Test setup
    let didMountSpy;
    
    afterEach(() => {
      didMountSpy.mockClear();
    });

    didMountSpy = jest.spyOn(Home.prototype, 'componentDidMount');

    it('fetches daily reports', () => {
      // Setup mock API call to successfully resolve data
      apis.fetchDailyReport = jest.fn(() => Promise.resolve(data));

      shallow(<Home />);
      expect(didMountSpy).toHaveBeenCalled();
      expect(apis.fetchDailyReport).toHaveBeenCalled();
    });

    it('throws an error if daily reports cannot be fetched', () => {
      // Reject and throw error if data cannot be resolved
      apis.fetchDailyReport = jest.fn(() => Promise.reject('Error!'));

      shallow(<Home />);
      expect(didMountSpy).toHaveBeenCalled();
      expect(apis.fetchDailyReport).toHaveBeenCalled();
    });
  });
});
