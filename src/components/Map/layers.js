export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'dailyReport',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#f1f075', 100, '#f28029', 750, '#f22929'],
    'circle-radius': ['step', ['get', 'point_count'], 40, 100, 40, 750, 40],
    'circle-opacity': 0.6
  }
};

export const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'dailyReport',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12,
  },
  paint: {
    'text-color': '#ffffff'
  }
};

export const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'dailyReport',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#f22929',
    'circle-radius': 50,
    'circle-opacity': 0.6,
  }
};
