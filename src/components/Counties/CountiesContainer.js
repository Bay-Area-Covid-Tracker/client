import React from 'react';
import PropTypes from 'prop-types';

import CountyCard from './CountyCard';

export default function CountiesContainer({ dailyReport }) {
	return (
		<div>
			<p>Counties container</p>
			<CountyCard county={dailyReport.Alameda} />
		</div>
	);
}

CountiesContainer.propTypes = { dailyReport: PropTypes.object };
CountiesContainer.defaultProps = { dailyReport: {} };
