import axios from 'axios';

import { fetchDailyReport } from '../api';

jest.mock('axios');

describe('tests for api calls', () => {
    it('successfully fetches daily report from API', async () => {
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
