import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import './Home.css';
import { fetchDailyReport } from '../../api';
import CountiesContainer from '../Counties/CountiesContainer';
import Map from '../Map/Map';

export default function Home() {
	const [dailyReport, setDailyReport] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [msg, setMsg] = useState('');
	const [err, setErr] = useState({})

	useEffect(() => {
		fetchDailyReport()
			.then(res => res.data)
			.then((data) => {
				setDailyReport({ ...data.dailyReport });
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setMsg('Whoops. Something went wrong! Sorry for the inconvenience.');
				setErr({ ...err });
				setIsLoading(false);
			});
	}, []);

	if (Object.keys(dailyReport).length > 0 && !isLoading)
		return (
			<div>
				<Grid container justify="center" alignItems="center">
					<CountiesContainer features={dailyReport.features} />
				</Grid>
				<Grid container justify="center" alignItems="center">
					<Map dailyReport={dailyReport} />
				</Grid>
			</div>
		);
	if (err && msg && !isLoading)
		return (
			<div id="err-msg">
				<span>{msg}</span>
			</div>
		);
	
	return <p>Loading page...</p>
}
