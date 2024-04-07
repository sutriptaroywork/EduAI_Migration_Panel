interface GProps {
  description?: string;
}  

export function Generating(props: GProps) {
  const { description } = props;
  return (
    <div className='flex h-full min-h-[32rem] w-full flex-col items-center justify-center gap-[.8rem]'>
      <div className='col-3'>
        <div className='snippet' data-title='dot-windmill'>
          <div className='stage'>
            <div className='dot-windmill'></div>
          </div>
        </div>
      </div>
      <p className='text-gray-80 text-body-02'>{description}</p>
    </div>
  );
}
