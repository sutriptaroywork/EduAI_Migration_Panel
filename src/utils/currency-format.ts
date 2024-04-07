export function inrCurrencyFormat(amount: number, isDecimal = true): string {
  return amount?.toLocaleString('en-IN', {
    maximumFractionDigits: isDecimal ? 2 : 0,
    style: 'currency',
    currency: 'INR',
  });
}

// refer this if above dosn't work

// new Intl.NumberFormat('en-In', {
//     style: 'currency',
//     currency: 'inr',
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   }).format(value)}
