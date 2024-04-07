import Link from 'next/link';

export function Footer() {
  return (
    <footer className='mt-auto flex h-[4.8rem] w-full items-center justify-center gap-[.8rem] border-[1px] border-gray-20 bg-gray-10 text-primary-60 text-med-body-sm dark:border-dark-gray-30 dark:bg-dark-gray-20 dark:text-primary-50'>
      <Link
        href={`mailto:support@midasfintechsolutions.com?cc=paras.shah@midasfintechsolutions.com,shivansh.singh@midasfintechsolutions.com&bcc=anurag.tiwari@midasfintechsolutions.com&subject=I'm having some issues.&body=Hi, %0D%0AI have some issues with:%0D%0Awrite your query here...`}
        className='text-inherit'
      >
        Need help?
      </Link>
      <Link href={``} target='_blank' className='text-inherit'>
        Terms &amp; Conditions
      </Link>
    </footer>
  );
}
