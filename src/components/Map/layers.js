export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'dailyReport',
  filter: ['has', 'confirmed'],
  paint: {
    'circle-color': ['step', ['get', 'confirmed'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    'circle-radius': ['step', ['get', 'confirmed'], 20, 100, 30, 750, 40]
  }
};

export const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'dailyReport',
  filter: ['has', 'confirmed'],
  layout: {
    'text-field': '{confirmed_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12
  }
};

export const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'dailyReport',
  filter: ['!', ['has', 'confirmed']],
  paint: {
    'circle-color': '#11b4da',
    'circle-radius': 10,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
};
