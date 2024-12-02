// Lot Status
export const superUrgentField = 'Urgent';
export const querySuperUrgent = `${superUrgentField} = 0`;
export const superurgent_items = ['OFF', 'ON'];

export const lotStatusField = 'StatusLA';
export const lotIdField = 'LotID';
export const percentHandedOverField = 'percentHandedOver';
export const municipalityField = 'Municipality';
export const barangayField = 'Barangay';
export const landOwnerField = 'LandOwner';
export const cpField = 'CP';
export const landUseField = 'LandUse';
export const endorsedField = 'Endorsed';
export const handedOverLotField = 'HandedOver';
export const lotHandedOverDateField = 'HandedOverDate';
export const lotHandedOverAreaField = 'HandedOverArea';
export const affectedAreaField = 'AffectedArea';
export const statusLotLabel = [
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Offer to Buy',
  'For Notice of Taking',
  'With PTE',
  'For Expropriation',
];

// export const statusLotColor = ['#00734d', '#0070ff', '#ffff00', '#ffaa00', '#ff0000'];
export const statusLotColor = [
  '#00734d',
  '#0070ff',
  '#ffff00',
  '#ffaa00',
  '#FF5733',
  '#70AD47',
  '#FF0000',
];

export const statusLotQuery = statusLotLabel.map((status, index) => {
  return Object.assign({
    category: status,
    value: index + 1,
    color: statusLotColor[index],
  });
});

// Chart and chart label color
export const primaryLabelColor = '#9ca3af';
export const valueLabelColor = '#d1d5db';
