import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import { fetchDailyReport } from '../../api';
import CountiesContainer from '../Counties/CountiesContainer';
import Map from '../Map/Map';

// Eventually make this a React hook
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { reports: [], isLoading: true }
	}

  componentDidMount() {
		fetchDailyReport()
			.then(res => res.data)
			.then(data => this.setState({ reports: [ ...data.reports ], isLoading: false }))
			.catch(err => console.error(err));
	}

	render() {
		const { reports, isLoading } = this.state;
		
		if (isLoading)
			return <p>Loading page...</p>;

		return (
			<div>
				<Grid container justify="center" alignItems="center">
					<CountiesContainer reports={reports} />
				</Grid>
				<Grid container justify="center" alignItems="center">
					<Map reports={reports} />
				</Grid>
			</div>
		);
	}
}
