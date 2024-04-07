// function to add 2 decimals if it does not exist in the number
export function formatTwoDecimals(num: number) {
  return (Math.round(num * 100) / 100).toFixed(2);
}
