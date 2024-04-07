import { convertINtoISOdateFormat } from '@/utils/iso-date-format';
import { format, parseISO } from 'date-fns';

interface DateFormatterProps {
  date: string | Date;
}
export function DateFormatter(props: DateFormatterProps) {
  const { date } = props;
  return <>{format(parseISO(convertINtoISOdateFormat(date)), 'dd-MMM-yyyy')}</>;
}
export function DateFormatterWithTime(props: DateFormatterProps) {
  const { date } = props;
  return <> {format(parseISO(convertINtoISOdateFormat(date)), 'hh:mm  a dd-MMM-yyyy')}</>;
}

export function EditDateFormatter(date: string) {
  // const { date } = props;
  return format(parseISO(date), 'yyyy-MM-dd');
}
