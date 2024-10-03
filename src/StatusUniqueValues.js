// Lot Status
export const lotStatusField = 'StatusLA';
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

// handedover
export const handedOverLotField = 'HandedOver';
