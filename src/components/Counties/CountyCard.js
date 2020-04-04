import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: { width: 300 },
	title: { fontSize: 14 }
});

export default function CountyCard({ county }) {
	const classes = useStyles();

	return (
		<Card className={classes.root} elevation={4}>
			<CardContent>
				<Typography variant="h5">
					{county.county}
				</Typography>
				<br/>
				<Typography variant="body1">
					Confirmed
				</Typography>
				<Typography variant="h6">
					{county.confirmed}
				</Typography>
				<Typography variant="body1">
					Deaths
				</Typography>
				<Typography variant="h6">
					{county.deaths}
				</Typography>
			</CardContent>
		</Card>
	);
}

CountyCard.propTypes = { county: PropTypes.object };
CountyCard.defaultProps = {
	county: {
		id: 0,
		county: '',
		state: '',
		country: 'US',
		lastUpdate: '',
		lat: 0.000,
		lon: 0.000,
		confirmed: 0,
		deaths: 0
	}
};
