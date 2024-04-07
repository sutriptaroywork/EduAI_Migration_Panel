export const getFormattedClassName = (classNames: string[]) => {
  return classNames.filter(className => className !== '' || className !== undefined).join(' ');
};
