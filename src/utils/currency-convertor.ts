export const currencyConvertor = (value: number | string) => {
  // let formatted = removeChar.replace(/\B(?=(\d{3})+(?!\d))/g, ','); for $

  if (typeof value === 'string') {
    return value?.replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
  } else {
    let convrtIntoString = value?.toString();
    return convrtIntoString.replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
  }
};
