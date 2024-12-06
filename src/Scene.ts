import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Measurement from '@arcgis/core/widgets/Measurement';
import Zoom from '@arcgis/core/widgets/Zoom';

import {
  lotLayer,
  nloLayer,
  structureLayer,
  endorsedLotLayer,
  occupancyLayer,
  pnrLayer,
  chainageLayer,
  pierAccessLayer,
  stationBoxLayer,
  stationLayer,
  pierHeadColumnLayer,
  prowLayer,
  strucOwnershipLayer,
  superUrgentLotLayer,
  handedOverLotLayer,
  treeCuttingLayer,
  treeCompensationLayer,
  utilityPointLayer,
  utilityPointLayer1,
  utilityLineLayer,
  utilityLineLayer1,
  viaductLayer,
  buildingLayer,
  utilityLineNGCP,
} from './layers';
import { highlightLot, zoomToLayer } from './Query';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

// Group layers //
const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [stationLayer, stationBoxLayer, pierHeadColumnLayer, chainageLayer],
});

const nloLoOccupancyGroupLayer = new GroupLayer({
  title: 'NLO/LO Occupancy',
  visible: false,
  visibilityMode: 'independent',
  layers: [occupancyLayer, strucOwnershipLayer, nloLayer],
});

const lotGroupLayer = new GroupLayer({
  title: 'Land',
  visible: true,
  visibilityMode: 'independent',
  layers: [endorsedLotLayer, lotLayer, pnrLayer],
});

const treeGroupLayer = new GroupLayer({
  title: 'Tree Cutting & Compensation',
  visible: false,
  visibilityMode: 'independent',
  layers: [treeCuttingLayer, treeCompensationLayer],
});

const utilityGroupLayer = new GroupLayer({
  title: 'Utility Relocation',
  visible: false,
  visibilityMode: 'independent',
  layers: [
    utilityLineLayer1,
    utilityLineLayer,
    utilityPointLayer1,
    utilityPointLayer,
    utilityLineNGCP,
  ],
});

// Change the layer order by using index numbers in map.add
map.add(buildingLayer);
map.add(viaductLayer);
map.add(pierAccessLayer);
map.add(utilityGroupLayer);
map.add(treeGroupLayer);
map.add(lotGroupLayer);
map.add(structureLayer);
map.add(nloLoOccupancyGroupLayer);
map.add(alignmentGroupLayer);
map.add(prowLayer);
map.add(handedOverLotLayer);

export const view = new SceneView({
  container: undefined,
  map,
  center: [120.5793, 15.18],
  zoom: 13,
  viewingMode: 'local',
  environment: {
    starsEnabled: false,
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

////////////////////////////////
// LayerList with widget with actions (sample)
async function defineActions(event: any) {
  const { item } = event;

  // await item.layer.when();

  if (item.title === 'NGCP Line') {
    item.open = true;
    item.actionsSections = [
      [
        {
          title: 'Zoom to points',
          className: 'esri-icon-zoom-to-object',
          id: 'full-extent',
        },
      ],
      // [
      //   {
      //     title: 'Highlight points',
      //     className: 'esri-icon-lightbulb',
      //     id: 'highlight-layer',
      //   },
      // ],
    ];
  }

  if (item.layer.type !== 'group') {
    item.panel = {
      content: 'legend',
      open: true,
    };
  }

  item.title === 'Chainage' ||
  item.title === 'NLO (Non-Land Owner)' ||
  item.title === 'NLO/LO Ownership (Structure)' ||
  item.title === 'Occupancy (Structure)' ||
  item.title === 'Structure' ||
  item.title === 'Land Acquisition (Endorsed Status)' ||
  item.title === 'Super Urgent Lot' ||
  item.title === 'Handed-Over (public + private)' ||
  item.title === 'Tree Cutting' ||
  item.title === 'Tree Compensation' ||
  item.title === 'Point (symbol)' ||
  item.title === 'Point (status)' ||
  item.title === 'Line (symbol)' ||
  item.title === 'Line (status)' ||
  item.title === 'Pier Head/Column' ||
  item.title === 'Viaduct' ||
  item.title === 'Station Structures'
    ? (item.visible = false)
    : (item.visible = true);
}

export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: defineActions,
});

layerList.on('trigger-action', (event) => {
  // capture the action id
  const id = event.action.id;

  if (id === 'full-extent') {
    zoomToLayer(utilityLineNGCP);
  }
});

/////////////////////////////////////

// highlight super urgent
// export const layerList = new LayerList({
//   view: view,
//   selectionMode: 'multiple',
//   visibilityAppearance: 'checkbox',
//   container: undefined,
//   listItemCreatedFunction: (event) => {
//     const item = event.item;
//     if (item.layer.type !== 'group') {
//       item.panel = {
//         content: 'legend',
//         open: true,
//       };
//     }

//     if (item.title === 'Super Urgent Lot') {
//       highlightLot(superUrgentLotLayer);
//     } else if (item.title === 'Handed-Over (public + private)') {
//       highlightLot(handedOverLotLayer);
//     }

//     item.title === 'Chainage' ||
//     item.title === 'NLO (Non-Land Owner)' ||
//     item.title === 'NLO/LO Ownership (Structure)' ||
//     item.title === 'Occupancy (Structure)' ||
//     item.title === 'Structure' ||
//     item.title === 'Land Acquisition (Endorsed Status)' ||
//     item.title === 'Super Urgent Lot' ||
//     item.title === 'Handed-Over (public + private)' ||
//     item.title === 'Tree Cutting' ||
//     item.title === 'Tree Compensation' ||
//     item.title === 'Point (symbol)' ||
//     item.title === 'Point (status)' ||
//     item.title === 'Line (symbol)' ||
//     item.title === 'Line (status)' ||
//     item.title === 'Pier Head/Column' ||
//     item.title === 'Viaduct' ||
//     item.title === 'Station Structures'
//       ? (item.visible = false)
//       : (item.visible = true);
//   },
// });

// Measurement Tool
export const measurement = new Measurement({
  view: view,
  activeTool: undefined,
  container: undefined,
});

const sources = [
  {
    layer: lotLayer,
    searchFields: ['LotID'],
    displayField: 'LotID',
    exactMatch: false,
    outFields: ['LotID'],
    name: 'Lot ID',
    placeholder: 'example: 10083',
  },
  {
    layer: structureLayer,
    searchFields: ['StrucID'],
    displayField: 'StrucID',
    exactMatch: false,
    outFields: ['StrucID'],
    name: 'Structure ID',
    placeholder: 'example: MCRP-01-02-ML022',
  },
  {
    layer: chainageLayer,
    searchFields: ['KmSpot'],
    displayField: 'KmSpot',
    exactMatch: false,
    outFields: ['*'],
    name: 'Main KM',
    placeholder: 'example: 80+400',
  },
  {
    layer: pierAccessLayer,
    searchFields: ['PIER'],
    displayField: 'PIER',
    exactMatch: false,
    outFields: ['PIER'],
    name: 'Pier No',
    zoomScale: 1000,
    placeholder: 'example: P-288',
  },
  {
    layer: treeCuttingLayer,
    searchFields: ['TreeNo'],
    displayField: 'TreeNo',
    exactMatch: false,
    outFields: ['TreeNo'],
    name: 'Tree No.',
    zoomScale: 1000,
    placeholder: 'example: 20',
  },
];

const searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'LotID, StructureID, Chainage',
  includeDefaultSources: false,
  container: undefined,
  sources: sources,
});

export const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIcon: 'chevrons-right',
  group: 'top-right',
});

const zoom = new Zoom({
  view,
});
view.ui.add(zoom, { position: 'bottom-right' });
