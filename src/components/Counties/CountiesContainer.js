import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import './Counties.css';
import CountyCard from './CountyCard';

export default function CountiesContainer({ reports }) {
	return (
		<div>
			<div id="row1" className="row">
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					spacing={3}
				>
					{reports.slice(0, 5).map(report => (
						<Grid item key={report.properties.id}>
							<CountyCard county={report.properties} />
						</Grid>
					))}
				</Grid>
			</div>
			<div id="row2" className="row">
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					spacing={3}
				>
					{reports.slice(5).map(report => (
						<Grid item key={report.properties.id}>
							<CountyCard county={report.properties} />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

CountiesContainer.propTypes = { reports: PropTypes.array };
CountiesContainer.defaultProps = { reports: [] };
