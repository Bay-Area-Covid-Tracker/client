import React from 'react';
import PropTypes from 'prop-types';

export default function CountiesContainer({ dailyReport }) {
	//console.log(dailyReport);
	return (
		<div>
			<p>Counties container</p>
		</div>
	);
}

CountiesContainer.propTypes = { dailyReport: PropTypes.object };
CountiesContainer.defaultProps = { dailyReport: {} };
