import axios from 'axios';

import { fetchDailyReport } from '../api';

jest.mock('axios');

describe('tests for api calls', () => {
    it('successfully fetches daily report from API', async () => {
      const data = {
        data: {
          "dailyReport": {
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
          }
        }
      };

      axios.get.mockImplementationOnce(() => Promise.resolve(data));

      await expect(fetchDailyReport()).resolves.toEqual(data);
      expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API}/daily-reports/`)
    });

    it('fetches erroneously data from API', async () => {
      const error = new Error('Network error');
      const msg = 'Cannot fetch daily report. Sorry for the inconvenience.';

      axios.get.mockImplementationOnce(() => Promise.reject(error));
      await expect(fetchDailyReport()).resolves.toEqual({ err: error, msg });
    });
});
