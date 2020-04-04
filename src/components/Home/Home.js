import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import { fetchDailyReport } from '../../api';
import CountiesContainer from '../Counties/CountiesContainer';
import Map from '../Map/Map';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { dailyReport: {}, isLoading: true }
	}

  componentDidMount() {
		fetchDailyReport()
			.then(res => res.data)
			.then(data => this.setState({ dailyReport: { ...data.dailyReport }, isLoading: false }))
			.catch(err => console.error(err));
	}

	render() {
		const { dailyReport, isLoading } = this.state;
		
		if (isLoading)
			return <p>Loading page...</p>;

		return (
			<div>
				<Grid container justify="center" alignItems="center">
					<CountiesContainer dailyReport={dailyReport} />
				</Grid>
				<Grid container justify="center" alignItems="center">
					<Map />
				</Grid>
			</div>
		);
	}
}
