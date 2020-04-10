import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const flexGrow = 1
const useStyles = makeStyles(theme => ({
	root: { flexGrow, backgroundColor: '#ffffff', color: '#000000' },
	title: { flexGrow },
	links: { textDecoration: 'none', color: '#000000' }
}));

export default function NavigationBar() {
	const classes = useStyles();

	return (
		<AppBar className={classes.root} position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					Bay Area Covid-19 Tracker
				</Typography>
				<Link className={classes.links} to="/"><Button color="inherit">Home</Button></Link>
			</Toolbar>
		</AppBar>
	);
}
