import { Loading } from '@/shared/loading';
import { ErrorPage } from '@/ui/error-page';
import { getFormattedClassName } from '@/utils/get-formatted-class';
import { ReactNode, Suspense } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
  whenNoData?: ReactNode;
  occupyWidth?: boolean;
}

export function GlobalLayout({
  children,
  isError,
  isLoading,
  whenNoData = undefined,
  className = '',
  occupyWidth = false,
  ...rest
}: Props) {
  const defaultStyles = getFormattedClassName([
    occupyWidth ? ` ${'w-[calc(100vw-24.8rem)] ml-auto'}` : 'w-full',
    className,
  ]);
  if (isLoading) return <Loading />;

  if (isError && !isLoading) {
    // throw new Error('problem connecting with server');
    return <ErrorPage variant='forbidden' />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <section className={defaultStyles} {...rest}>
        {children}
      </section>
    </Suspense>
  );
}
