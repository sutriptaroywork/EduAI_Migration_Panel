export const removeEmpty = (obj: any) => {
  return Object?.keys(obj)?.reduce((acc: any, key: any) => {
    if (typeof obj[key] !== 'undefined' || obj[key] !== '') {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};
