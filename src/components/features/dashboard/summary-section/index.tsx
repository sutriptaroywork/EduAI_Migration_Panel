import { QandAEmptyIcon, SummuryEmptyIcon } from '@/assets/empty-icon';
import { Check, Chevron, ComposeFilled, CopyIcon } from '@/assets/icons';
import { API_URL, SHIKSHA_BASE_URL } from '@/services/shiksha-ml';
import { Button } from '@/ui';
import { Card } from '@/ui/card';
import { EmptyPage } from '@/ui/empty-page';
import { sendData } from '@/utils/send-data';
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';
import { useEffect, useState } from 'react';
import { Diagram } from '../diagram';
//import { Jokes } from '../jokes';
import { useClickOutside } from '@/hooks/use-click-outside';
import { CurrentAffairs } from '../currentAffairs';
import { IQ } from '../iq';
import { QANDAView } from '../q-and-a';
import { Quiz } from '../quiz';
import { Generating } from '../transitions/generating';
import { SummaryText } from './summary-text';

export interface SVProps {
  assignedCode: any;
  load: boolean;
}

const diagramTypeOption = {
  flowChart: { label: 'Flow chart', value: 'flow_chart' },
  state_diagram: { label: 'State diagram', value: 'state_diagram' },
  sequence: { label: 'Sequence diagram', value: 'sequence_chart' },
};

export function SummaryView(props: SVProps) {
  let { assignedCode, load } = props;

  const QRef = useClickOutside(() => setQLevelBox(false));
  const RRef = useClickOutside(() => setRLevelBox(false));
  const DRef = useClickOutside(() => setDTypeBox(false));

  const [summaryData, setSummaryData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState('summary');
  const [qlevel, setQLevel] = useState('Easy');
  const [qlevelBox, setQLevelBox] = useState(false);
  const [qselected, setQSelected] = useState('Easy');
  const [rlevel, setRLevel] = useState('Easy');
  const [rlevelBox, setRLevelBox] = useState(false);
  const [rselected, setRSelected] = useState('Easy');
  const [diagramType, setDiagramType] = useState(diagramTypeOption?.flowChart?.value);
  const [dTypeBox, setDTypeBox] = useState(false);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [dload, setDload] = useState(false);

  // const { data: currentAffairData} = useAuthQuery<any>({
  //   url: SHIKSHA_BASE_URL + API_URL.CURRENTAFFAIRS,
  //   queryKey: ['currentAffair'],
  // });

  //  const { data: quizData} = useAuthQuery<any>({
  //   url: SHIKSHA_BASE_URL + API_URL.QUIZ,
  //   queryKey: ['quiz'],
  // });

  //  const { data: iqData} = useAuthQuery<any>({
  //   url: SHIKSHA_BASE_URL + API_URL.IQ,
  //   queryKey: ['iq'],
  // });


  async function getSummaryData() {
    setLoading(true);
    // if (!assignedCode) {
    //   assignedCode = localStorage.getItem('assignedCode');
    // }
    if (assignedCode) {
      const res = await sendData({
        url: SHIKSHA_BASE_URL + API_URL.SUMMARY + `/${assignedCode}`,
        //url: 'http://164.52.218.107/backend/' + API_URL.SUMMARY + `/${assignedCode}`,
        method: 'POST',
        body: {},
        showToast: false,
      });
      // setSummaryData(res);
      setSummaryData(res)
    }
    setLoading(false);
  }

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(summaryData?.message);
        console.log('Text copied to clipboard successfully.');
      } else {
        // Fallback behavior if clipboard API is not supported
        const textArea = document.createElement('textarea');
        textArea.value = summaryData?.message;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        console.log('Text copied to clipboard (fallback).');
      }
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  useEffect(() => {
    if (load) {
      setLoading(true);
    }
    if (!load) {
      setLoading(false);
    }
    if (load === false && assignedCode) {
      setLoading(false);
      getSummaryData();
    }
    console.log(load, 'load');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assignedCode, load]);



  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleDataSend();
    }
  };

  const handleDataSend = () => {
    console.log('correct', text);
    setDload(true);
    setQuery(text);
    setText('');
  }





  // console.log('summary', summaryData, summaryData?.message, assignedCode, loading);
  return (
    <Card className=' max-h-[40rem] min-h-[36rem] overflow-y-auto xl:max-h-[64rem] '>
      <Root defaultValue='summary' className=''>
        <div className='flex items-start justify-between'>
          <div className='flex'>
            <List
              aria-label='return'
              className='mb-[2rem] flex w-max gap-[0.2rem] rounded-[.8rem] bg-gray-10 p-[.4rem] '
            >
              <Trigger
                data-set='active'
                value='summary'
                onClick={() => {
                  setCurrentTab('summary');
                }}
                className='trigger-variant-1 flex  items-center justify-center gap-[.8rem] whitespace-nowrap'
              >
                Summarization
              </Trigger>
              <Trigger
                onClick={() => {
                  setCurrentTab('q-and-a');
                }}
                value='q-and-a'
                className='trigger-variant-1 flex  items-center justify-center gap-[.8rem] '
              >
                Q&A Section
              </Trigger>
              <Trigger
                onClick={() => {
                  setCurrentTab('diagram');
                }}
                value='diagram'
                className='trigger-variant-1 flex  items-center justify-center gap-[.8rem] '
              >
                Diagram
              </Trigger>
              <Trigger
                onClick={() => {
                  setCurrentTab('currentAffair');
                }}
                value='currentAffair'
                className='trigger-variant-1 flex  items-center justify-center gap-[.8rem] '
              >
                Current Affairs
              </Trigger>
              <Trigger
                onClick={() => {
                  setCurrentTab('quiz');
                }}
                value='quiz'
                className='trigger-variant-1 flex  items-center justify-center gap-[.8rem] '
              >
                Quiz
              </Trigger>
              <Trigger
                onClick={() => {
                  setCurrentTab('iq');
                }}
                value='iq'
                className='trigger-variant-1 flex  items-center justify-center gap-[.8rem] '
              >
                IQ Test
              </Trigger>
            </List>
          </div>
          <div>
            {currentTab === 'summary' && summaryData?.message ? (
              <Button variant={'ghost'} className=' flex !w-max' size='small' onClick={handleCopy}>
                <CopyIcon /> Copy
              </Button>
            ) : (
              <></>
            )}
          </div>

          {currentTab === 'q-and-a' && summaryData?.message && (
            <div className='flex items-center justify-center'>
              <p className='text-gray-60 text-body-02 '>Difficulty level</p>
              <div className='flex justify-center items-center w-[7.6rem] h-[4rem] border border-gray-30 rounded-[0.8rem] mx-4'>
                <span className='flex  text-gray-60 text-body-02'>{qlevel}</span>
              </div>
              <div className='flex justify-center items-center w-[4rem] h-[4rem] border-2 border-gray-30 rounded-[0.8rem]'>
                {' '}
                <button
                  onClick={() => {
                    setQLevelBox(!qlevelBox);
                  }}
                >
                  {' '}
                  <Chevron width={10} fill='gray-60' />
                </button>
              </div>
            </div>
          )}
          {currentTab === 'riddle' && (
            <div className='flex items-center justify-center'>
              <p className='text-gray-60 text-body-02 '>Difficulty level</p>
              <div className='flex justify-center items-center w-[7.6rem] h-[4rem] border border-gray-30 rounded-[0.8rem] mx-4'>
                <span className='flex  text-gray-60 text-body-02'>{rlevel}</span>
              </div>
              <div className='flex justify-center items-center w-[4rem] h-[4rem] border-2 border-gray-30 rounded-[0.8rem]'>
                {' '}
                <button
                  onClick={() => {
                    setRLevelBox(!rlevelBox);
                  }}
                >
                  {' '}
                  <Chevron width={10} fill='gray-60' />
                </button>
              </div>
            </div>
          )}
          {currentTab === 'diagram' && summaryData?.message && (
            <div className='flex items-center justify-center'>
              <div className='flex justify-center items-center w-[14rem] h-[4rem] border-2 border-gray-30 rounded-[0.8rem]'>
                <p className='text-gray-60 text-body-02 mx-4'>Diagram type</p>{' '}
                <button
                  onClick={() => {
                    setDTypeBox(!dTypeBox);
                  }}
                >
                  {' '}
                  <Chevron width={15} fill='gray-60' />
                </button>
              </div>
            </div>
          )}
        </div>

        <Content value='summary'>
          {loading === true ? (
            <Generating description='Generating summary' />
          ) : summaryData?.message ? (
            <SummaryText summaryData={summaryData} />
          ) : (
            <EmptyPage
              icon={<SummuryEmptyIcon />}
              description='Summary will be available after you upload a video or PDF document'
              pageHeight=' max-h-[40rem] overflow-y-auto xl:max-h-[64rem] min-h-[32rem]'
            />
          )}
        </Content>
        <Content value='q-and-a'>
          {loading === true ? (
            <Generating description='Generating QnA' />
          ) : summaryData?.message ? (
            <div className='relative'>
              {qlevelBox && (
                <div
                  ref={QRef}
                  className='flex flex-col w-[52.8rem] h-[30.4rem] absolute right-0 top-[-1rem] z-20 bg-white border border-gray-30 rounded-[1rem] shadow shadow-black'
                >
                  <div className='flex w-full m-8 '>
                    {/* <p className='text-gray-80 text-sub-01'>Select difficulty level for questions</p> */}
                  </div>
                  <div className='flex w-full flex-col m-8'>
                    {qselected === 'Easy' && (
                      <div className='flex'>
                        <span className='w-[64px] h-[8px] bg-green-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                      </div>
                    )}
                    {qselected === 'Medium' && (
                      <div className='flex'>
                        <span className='w-[64px] h-[8px] bg-green-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-green-12 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-orange-10 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-orange-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                      </div>
                    )}
                    {qselected === 'Hard' && (
                      <div className='flex'>
                        <span className='w-[64px] h-[8px] bg-green-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-green-12 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-orange-10 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-orange-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-red-20 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-red-60 rounded-lg ml-2'></span>
                        <span className='w-[64px] h-[8px] bg-red-90 rounded-lg ml-2'></span>
                      </div>
                    )}

                    <div className='flex w-[85%] m-8 justify-between'>
                      <div
                        className={`w-[8rem] h-[4rem] flex justify-center items-center rounded-lg border border-gray-60  ${qselected === 'Easy' ? 'bg-green-60 text-white' : 'text-gray-60'
                          }`}
                      >
                        <button onClick={() => setQSelected('Easy')}>
                          <span className='flex  text-body-02'>Easy</span>
                        </button>
                      </div>
                      <div
                        className={`w-[8rem] h-[4rem] flex justify-center items-center rounded-lg border border-gray-60  ${qselected === 'Medium' ? 'bg-orange-60 text-white' : 'text-gray-60'
                          }`}
                      >
                        <button onClick={() => setQSelected('Medium')}>
                          <span className='flex  text-body-02'>Medium</span>
                        </button>
                      </div>
                      <div
                        className={`w-[8rem] h-[4rem] flex justify-center items-center rounded-lg border border-gray-60  ${qselected === 'Hard' ? 'bg-red-60 text-white' : 'text-gray-60'
                          }`}
                      >
                        <button onClick={() => setQSelected('Hard')}>
                          <span className='flex  text-body-02'>Hard</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col mx-12'>
                    <Button
                      className='rounded-[1rem] my-2'
                      onClick={() => {
                        setQLevel(qselected);
                        setQLevelBox(false);
                      }}
                    >
                      Apply
                    </Button>
                    <Button
                      className='bg-white hover:bg-white'
                      onClick={() => {
                        setQSelected(qlevel);
                        setQLevelBox(false);
                      }}
                    >
                      <span className='text-gray-60'>Close</span>
                    </Button>
                  </div>
                </div>
              )}
              <QANDAView assignedCode={assignedCode} qlevel={qlevel} />
            </div>
          ) : (
            <EmptyPage
              icon={< QandAEmptyIcon />}
              description='QnA will be available after you upload a video or PDF document'
              pageHeight=' max-h-[40rem] overflow-y-auto xl:max-h-[64rem] min-h-[32rem]'
            />
          )}

        </Content>

        <Content value='diagram'>
          {loading === true ? (
            <Generating description='Generating diagram' />
          ) : summaryData?.message ? (
            <div className='relative '>
              {dTypeBox && (
                <div
                  ref={DRef}
                  className='flex flex-col w-[20rem] h-[13.6rem] absolute right-0 top-[-1rem] z-20 bg-white border border-gray-30 rounded-[1rem] shadow shadow-black text-gray-60'
                >
                  <div
                    className={`w-[95%] h-[4rem] flex justify-between hover:bg-gray-30 items-center rounded-lg  m-2 ${diagramType === 'flow_chart' ? 'bg-gray-30 text-black' : ''
                      } `}
                  >
                    <button
                      onClick={() => {
                        setDiagramType(diagramTypeOption?.flowChart?.value);
                        setDTypeBox(false);
                      }}
                    >
                      <span className='flex  text-body-02 mx-2 hover:bg-gray-30'>
                        {diagramTypeOption?.flowChart?.label}
                      </span>
                    </button>
                    <div>
                      {diagramType === 'flow_chart' && <Check width={12} className='m-2' />}
                    </div>
                  </div>

                  <div
                    className={`w-[95%] h-[4rem] flex justify-between items-center hover:bg-gray-30 rounded-lg  m-2 ${diagramType === 'sequence_chart' ? 'bg-gray-30 text-black' : ''
                      } `}
                  >
                    <button
                      onClick={() => {
                        setDiagramType(diagramTypeOption?.sequence?.value);
                        setDTypeBox(false);
                      }}
                    >
                      <span className='flex  text-body-02 mx-2 hover:bg-gray-30'>
                        {diagramTypeOption?.sequence?.label}
                      </span>
                    </button>
                    <div>
                      {diagramType === 'sequence_chart' && <Check width={12} className='m-2' />}
                    </div>
                  </div>
                  <div
                    className={`w-[95%] h-[4rem] flex justify-between items-center rounded-lg hover:bg-gray-30  m-2 ${diagramType === 'state_diagram' ? 'bg-gray-30 text-black' : ''
                      } `}
                  >
                    <button
                      onClick={() => {
                        setDiagramType(diagramTypeOption?.state_diagram?.value);
                        setDTypeBox(false);
                      }}
                    >
                      <span className='flex  text-body-02 mx-2 hover:bg-gray-30'>
                        {diagramTypeOption?.state_diagram?.label}
                      </span>
                    </button>
                    <div>
                      {diagramType === 'state_diagram' && <Check width={12} className='m-2' />}
                    </div>
                  </div>
                </div>
              )}
              <div className={`w-[40vw] my-4 m-auto pl-[3rem]`}>
                <input
                  type='text'
                  placeholder='Generate Custom Diagram'
                  value={text}
                  className='!p-[.8rem] !pr-[4rem]'
                  onChange={(e) => {
                    if (e.target.value.length <= 250) {
                      setText(e.target.value);
                    }
                  }}
                  onKeyDown={handleKeyDown}
                />
                <Button
                  className='absolute right-[20%] top-[1rem] w-max'
                  size='small'
                  onlyIcon
                  disabled={!text}
                  onClick={handleDataSend}
                >
                  <ComposeFilled />
                </Button>

              </div>
              <Diagram query={query} assignedCode={assignedCode} diagram_level={diagramType} dload={dload} />
            </div>
          ) : (
            <EmptyPage
              icon={<SummuryEmptyIcon />}
              description='Diagram will be available after you upload a video or PDF document'
              pageHeight=' max-h-[40rem] overflow-y-auto xl:max-h-[64rem] min-h-[32rem]'
            />
          )}
        </Content>

        <Content value='quiz'>
          <div className='relative'>
            {/* {rlevelBox && (
              <div
                ref={RRef}
                className='flex flex-col w-[52.8rem] h-[30.4rem] absolute right-[0.5rem] top-[-1rem] z-20 bg-white border border-gray-30 rounded-[1rem] shadow shadow-black'
              >
                <div className='flex w-full m-8 '>
                </div>
                <div className='flex w-full flex-col m-8'>
                  {rselected === 'Easy' && (
                    <div className='flex'>
                      <span className='w-[64px] h-[8px] bg-green-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                    </div>
                  )}
                  {rselected === 'Medium' && (
                    <div className='flex'>
                      <span className='w-[64px] h-[8px] bg-green-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-green-12 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-orange-10 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-orange-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-gray-60 rounded-lg ml-2'></span>
                    </div>
                  )}
                  {rselected === 'Hard' && (
                    <div className='flex'>
                      <span className='w-[64px] h-[8px] bg-green-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-green-12 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-orange-10 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-orange-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-red-20 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-red-60 rounded-lg ml-2'></span>
                      <span className='w-[64px] h-[8px] bg-red-90 rounded-lg ml-2'></span>
                    </div>
                  )}

                  <div className='flex w-[85%] m-8 justify-between'>
                    <div
                      className={`w-[8rem] h-[4rem] flex justify-center items-center rounded-lg border border-gray-60  ${
                        rselected === 'Easy' ? 'bg-green-60 text-white' : 'text-gray-60'
                      }`}
                    >
                      <button onClick={() => setRSelected('Easy')}>
                        <span className='flex  text-body-02'>Easy</span>
                      </button>
                    </div>
                    <div
                      className={`w-[8rem] h-[4rem] flex justify-center items-center rounded-lg border border-gray-60  ${
                        rselected === 'Medium' ? 'bg-orange-60 text-white' : 'text-gray-60'
                      }`}
                    >
                      <button onClick={() => setRSelected('Medium')}>
                        <span className='flex  text-body-02'>Medium</span>
                      </button>
                    </div>
                    <div
                      className={`w-[8rem] h-[4rem] flex justify-center items-center rounded-lg border border-gray-60  ${
                        rselected === 'Hard' ? 'bg-red-60 text-white' : 'text-gray-60'
                      }`}
                    >
                      <button onClick={() => setRSelected('Hard')}>
                        <span className='flex  text-body-02'>Hard</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col mx-12'>
                  <Button
                    className='rounded-[1rem] my-2'
                    onClick={() => {
                      setRLevel(rselected);
                      setRLevelBox(false);
                    }}
                  >
                    Apply
                  </Button>
                  <Button
                    className='bg-white hover:bg-white'
                    onClick={() => {
                      setRSelected(rlevel);
                      setRLevelBox(false);
                    }}
                  >
                    <span className='text-gray-60'>Close</span>
                  </Button>
                </div>
              </div>
            )} */}
            <Quiz />
          </div>
        </Content>
        <Content value='currentAffair'>
          {' '}
          <CurrentAffairs />{' '}
        </Content>
        <Content value='iq'>
          {' '}
          <IQ />{' '}
        </Content>
      </Root>
    </Card>
  );
}
