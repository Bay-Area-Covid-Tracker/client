import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './Map.css';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './layers';

export default function Map({ dailyReport }) {
	const viewport = {
		width: 1000,
		height: 550,
		latitude: 37.7577,
    longitude: -122.4376,
    zoom: 7.4
	};
	const mapRef = useRef();

	return (
		<div id="map-container">
			<ReactMapGL 
				{...viewport} 
				mapStyle="mapbox://styles/mapbox/dark-v10"
				mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
				interactiveLayerIds={[clusterLayer.id]}
			>
				<Source
					type="geojson"
					data={dailyReport}
					cluster={true}
					clusterMaxZoom={14}
					clusterRadius={50}
					ref={mapRef}
				>
					<Layer {...clusterLayer} />
					<Layer {...clusterCountLayer} />
					<Layer {...unclusteredPointLayer} />
				</Source>
			</ReactMapGL>
		</div>
	);
}

Map.propTypes = { dailyReport: PropTypes.object };
Map.defaultProps = { dailyReport: {} };
