import React from 'react';
import { shallow } from 'enzyme';

import Component from '../Home';
import * as apis from '../../../api';

// Define test data
const data = {
  data: {
      "dailyReport": {
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
      }
  }
};




describe('tests for Home component', () => {
  describe('snapshot tests', () => {
    it('renders without crashing', () => {
        const tree = shallow(<Component />);
        expect(tree).toMatchSnapshot();
    });
  });

  describe('integration tests', () => {
    // Test setup
    let didMountSpy;
    
    afterEach(() => {
      didMountSpy.mockClear();
    });

    didMountSpy = jest.spyOn(Component.prototype, 'componentDidMount');

    it('fetches daily reports', () => {
      // Setup mock API call to successfully resolve data
      apis.fetchDailyReport = jest.fn(() => Promise.resolve(data));

      const wrapper = shallow(<Component />);
      expect(didMountSpy).toHaveBeenCalled();
      expect(apis.fetchDailyReport).toHaveBeenCalled();
    });

    it('throws an error if daily reports cannot be fetched', () => {
      // Reject and throw error if data cannot be resolved
      apis.fetchDailyReport = jest.fn(() => Promise.reject('Error!'));

      const wrapper = shallow(<Component />);
      expect(didMountSpy).toHaveBeenCalled();
      expect(apis.fetchDailyReport).toHaveBeenCalled();
    });
  });
});
