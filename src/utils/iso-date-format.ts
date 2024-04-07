export function convertINtoISOdateFormat(value: string | Date) {
  return new Date(value)?.toISOString();
}
