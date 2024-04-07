import { Badge, Button } from '@/ui';
import Tippy from '@tippyjs/react';

export default function copmonent() {
  return (
    <>
      SHIKSHA-ML
      <div className='flex items-start gap-[1.6rem]'>
        <div className='flex w-[50rem] flex-col  justify-center gap-[.8rem]'>
          <input type='text' placeholder='text' />
          <input type='text' placeholder='text' disabled />
          {/* <InputFileUploader
          onChange={() => {
            console.log('input');
          }}
        /> */}
          <Badge variant={'neutral'}>gray</Badge>
          <Badge variant={'danger'}>red</Badge>
          <Badge variant={'success'}>success</Badge>
          <Badge variant={'warning'}>warning</Badge>
          <Tippy content='tooltip' placement='bottom' arrow={false} className='tippy'>
            <Button>Tooltip</Button>
          </Tippy>
        </div>
        <div className='flex w-[50rem] flex-col  justify-center gap-[.8rem]'>
          {' '}
          <Button>primay</Button>
          <Button disabled>primay disabled</Button>
          <Button variant={'outline-light'}>outline-light</Button>
          <Button variant={'outline-light'} disabled>
            outline-light disabled
          </Button>
          <Button variant={'ghost'}>ghost</Button>
          <Button variant={'ghost'} disabled>
            ghost disabled
          </Button>
          <Button variant={'text'}>text</Button>
          <Button variant={'text'} disabled>
            text disabled
          </Button>
        </div>
      </div>
    </>
  );
}
