import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './Map.css';

export default function Map({ dailyReport }) {
	const [viewport, setViewport] = useState({
		width: 1000,
		height: 550,
		latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
	});

	return (
		<div id="map-container">
			<ReactMapGL 
				{...viewport} 
				mapStyle="mapbox://styles/mapbox/dark-v9"
				onViewportChange={setViewport}
				mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
			/>
		</div>
	);
}

Map.propTypes = { dailyReport: PropTypes.object };
Map.defaultProps = { dailyReport: {} };
