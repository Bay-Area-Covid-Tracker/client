import axios from 'axios';

export async function fetchDailyReport() {
    try {
        return await axios.get(`${process.env.REACT_APP_API}/daily-report/`);
    } catch (err) {
        return { err, msg: 'Cannot fetch daily report. Sorry for the inconvenience.'};
    }
}
