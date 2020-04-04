import React, { Component } from 'react';

import { fetchDailyReport } from '../../api';
import CountiesContainer from '../Counties/CountiesContainer';

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
				<h1>Bay Area Covid-19 Tracker</h1>
				<CountiesContainer dailyReport={dailyReport} />
			</div>
		);
	}
}
