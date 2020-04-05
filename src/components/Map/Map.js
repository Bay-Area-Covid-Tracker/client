import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useSuperCluster from 'use-supercluster';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './Map.css';

export default function Map({ reports }) {
	const [viewport, setViewport] = useState({
		width: 1000,
		height: 550,
		latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
	});
	const mapRef = useRef();
	
	// Get map bounds
	const bounds = mapRef.current
		? mapRef.current
				.getMap()
				.getBounds()
				.toArray()
				.flat()
		:	null;

	// Get clusers
	// reports contains the data structured to display
	const { clusters } = useSuperCluster({
		points: [...reports],
		bounds,
		zoom: viewport.zoom,
		options: { radius: 75, maxZoom: 20 }
	});

	return (
		<div id="map-container">
			<ReactMapGL 
				{...viewport} 
				mapStyle="mapbox://styles/mapbox/dark-v9"
				onViewportChange={newViewport => setViewport({ ...newViewport })}
				mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
				ref={mapRef}
			>
				{clusters.map(cluster => {
					const { properties, geometry } = cluster;
					const [longitude, latitude] = geometry.coordinates;

					return (
						<Marker 
							key={properties.id}
							latitude={latitude}
							longitude={longitude}
						>
							<span className="cluster-marker">
								{properties.confirmed}
							</span>
						</Marker>
					);
				})}
			</ReactMapGL>
		</div>
	);
}

Map.propTypes = { reports: PropTypes.array };
Map.defaultProps = { reports: [] };
