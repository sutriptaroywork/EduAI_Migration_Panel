export function removeSpecialChar(str: string) {
  return str.replace(/[_-]/g, ' ');
}
