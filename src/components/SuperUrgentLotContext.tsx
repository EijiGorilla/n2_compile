import { ReactNode, createContext, useContext, useState } from 'react';
import '../App.css';
import '@esri/calcite-components/dist/components/calcite-segmented-control';
import '@esri/calcite-components/dist/components/calcite-segmented-control-item';
import {
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
} from '@esri/calcite-components-react';
import { useBetween } from 'use-between';
import { primaryLabelColor, superurgent_items } from '../StatusUniqueValues';

function SuperUrgentLotData() {
  // Super urgent control items
  const superurgent_items = ['OFF', 'ON'];
  const [superUrgentSelected, setSuperUrgentSelected] = useState<any>(superurgent_items[0]);

  const handleSuperUrgentLot = (obj: any) => {
    setSuperUrgentSelected(obj);
  };

  return {
    handleSuperUrgentLot,
    superUrgentSelected,
  };
}

function SuperUrgentLotDisplay() {
  const { handleSuperUrgentLot, superUrgentSelected } = useBetween(SuperUrgentLotData);
  return (
    <>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <div
          style={{
            marginLeft: '15px',
            fontSize: '17px',
            color: primaryLabelColor,
            marginTop: 'auto',
            marginBottom: 'auto',
            marginRight: '10px',
          }}
        >
          Super Urgent Lot:{' '}
        </div>
        <CalciteSegmentedControl
          style={{
            marginRight: 'auto',
          }}
          scale="m"
          onCalciteSegmentedControlChange={(event: any) =>
            handleSuperUrgentLot(event.target.selectedItem.id)
          }
        >
          {superUrgentSelected &&
            superurgent_items.map((priority: any, index: any) => {
              return (
                <CalciteSegmentedControlItem
                  {...(superUrgentSelected === priority ? { checked: true } : {})}
                  key={index}
                  value={priority}
                  id={priority}
                >
                  {priority}
                </CalciteSegmentedControlItem>
              );
            })}
        </CalciteSegmentedControl>
      </div>
    </>
  );
}

type SuperUrgentLotContextType = {
  superUrgentSelected: any;
};

type Props = {
  children: ReactNode;
};

const initialState = {
  superUrgentSelected: undefined,
};

const SuperUrgentLotContext = createContext<SuperUrgentLotContextType>({
  ...initialState,
});

export function SuperUrgentLotDataProvider({ children }: Props) {
  const { superUrgentSelected } = useBetween(SuperUrgentLotData);
  return (
    <SuperUrgentLotContext.Provider value={{ superUrgentSelected }}>
      {children}
    </SuperUrgentLotContext.Provider>
  );
}

export const useSuperUrgentLotContext = () => useContext(SuperUrgentLotContext);
export default SuperUrgentLotDisplay;
