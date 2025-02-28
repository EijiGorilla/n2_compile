/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from 'react';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-switch';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { CalciteShell } from '@esri/calcite-components-react';
import {
  buildingLayer,
  columnsLayer,
  floorsLayer,
  stColumnLayer,
  stFoundationLayer,
  stFramingLayer,
  wallsLayer,
} from './layers';
import Header from './components/Header';
import ActionPanel from './components/ActionPanel';
import MainChart from './components/MainChart';
import MeasurementTool from './components/MeasurementTool';
import UndergroundSwitch from './components/UndergroundSwitch';
import MapDisplay from './components/MapDisplay';
import { useContractPackageContext } from './components/ContractPackageContext';

function App() {
  const { cpValueSelected } = useContractPackageContext();
  // load building layer
  const [buildingLayerLoaded, setBuildingLayerLoaded] = useState<any>();

  // Control visibility of station structure
  // when cp is 'All', station structures become invisible
  async function layerOn() {
    let queryExpression: any;
    queryExpression =
      cpValueSelected === 'N-01'
        ? 'Station IN (7, 8)'
        : cpValueSelected === 'N-02'
          ? 'Station = 6'
          : cpValueSelected === 'N-03'
            ? 'Station IN (4, 5)'
            : cpValueSelected === 'N-04'
              ? 'Station = 3'
              : '1=1';

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    columnsLayer
      ? (columnsLayer.definitionExpression = queryExpression) && (columnsLayer.visible = true)
      : null;
    floorsLayer
      ? (floorsLayer.definitionExpression = queryExpression) && (floorsLayer.visible = true)
      : null;
    wallsLayer
      ? (wallsLayer.definitionExpression = queryExpression) && (wallsLayer.visible = true)
      : null;
    stFoundationLayer
      ? (stFoundationLayer.definitionExpression = queryExpression) &&
        (stFoundationLayer.visible = true)
      : null;
    stColumnLayer
      ? (stColumnLayer.definitionExpression = queryExpression) && (stColumnLayer.visible = true)
      : null;
    stFramingLayer
      ? (stFramingLayer.definitionExpression = queryExpression) && (stFramingLayer.visible = true)
      : null;
  }

  useEffect(() => {
    if (cpValueSelected === 'All') {
      buildingLayer.visible = false;
    } else {
      buildingLayer.visible = true;
      layerOn();
    }
  }, [cpValueSelected]);

  useEffect(() => {
    buildingLayer.load().then(() => {
      setBuildingLayerLoaded(buildingLayer.loadStatus);
    });
  });

  return (
    <>
      <CalciteShell>
        {/* Calcite Action Panel */}
        <ActionPanel />

        {/* Map */}
        <MapDisplay />

        {/* Main Chart */}
        <MainChart />

        {/* Header display */}
        <Header />

        {/* Measurement Tools */}
        <MeasurementTool />

        {/* Underground Switch */}
        <UndergroundSwitch />
      </CalciteShell>
    </>
  );
}

export default App;
