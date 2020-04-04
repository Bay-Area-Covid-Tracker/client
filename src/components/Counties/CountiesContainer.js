import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import './Counties.css';
import CountyCard from './CountyCard';

export default function CountiesContainer({ dailyReport }) {
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
					<Grid item>
						<CountyCard county={dailyReport['Alameda']} />
					</Grid>
					<Grid item>
						<CountyCard county={dailyReport['Contra Costa']} />
					</Grid>
					<Grid item>
						<CountyCard county={dailyReport['Marin']} />
					</Grid>
					<Grid item>
						<CountyCard county={dailyReport['Napa']} />
					</Grid>
					<Grid item>
						<CountyCard county={dailyReport['San Mateo']} />
					</Grid>
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
					<Grid item>
						<CountyCard county={dailyReport['San Francisco']} />
					</Grid>
					<Grid item>
						<CountyCard county={dailyReport['Santa Clara']} />
					</Grid>
					<Grid item>
						<CountyCard county={dailyReport['Solano']} />
					</Grid>
					<Grid item>
						<CountyCard county={dailyReport['Sonoma']} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

CountiesContainer.propTypes = { dailyReport: PropTypes.object };
CountiesContainer.defaultProps = { dailyReport: {} };
