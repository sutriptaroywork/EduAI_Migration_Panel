/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Check } from '@/assets/icons';
import { Button } from '@/ui';
import { useQueryClient } from '@tanstack/react-query';
import { Fragment, useState } from 'react';
import { TextCard } from '../summary-section/summary-text';

interface QVProps {
  data: any;
  emptyText?: string;
}
export function QuestionView(props: QVProps) {
  const { data, emptyText } = props;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedIndex, setSelectedIndex] = useState<undefined | number>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ansIsCorrect, setAnsIsCorrect] = useState<any>();
  const [showSubmitBtn, setShowSubmitBtn] = useState(true);
  const [timerValue, setTimerValue] = useState(3);
  const [scorecard, setScorecard] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const currentQuestion = data?.[currentQuestionIndex];

  const alpha = Array.from({ length: currentQuestion?.['c']?.length }).map((e, i) => i + 65);
  const alphabet = alpha.map(x => String.fromCharCode(x));
  const queryClient = useQueryClient();

  function handleSubmit() {
    setShowSubmitBtn(false);
  }

  const startTimer = () => {
    const countdownInterval = setInterval(() => {
      setTimerValue(prevValue => prevValue - 1);
    }, 1000);

    return countdownInterval;
  };

  function handleNext() {
    setIsSubmitted(false);
    setAnsIsCorrect('');
    setSelectedIndex(undefined);
    // queryClient?.invalidateQueries(['qanda']);
    setShowSubmitBtn(true);
    setTimerValue(3);
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    if (currentQuestionIndex + 1 === data?.length) {
      setScorecard(true);
      console.log('finish');
    }
  }
  // console.log('qnadata', data);
  return (
    <Fragment>
      {data?.length === 0 ? (
        <p className='text-black text-body-03 text-center'>
          {emptyText ? emptyText : 'No quetions found'}
        </p>
      ) : (
        <Fragment>
          <TextCard variant='without-hover' className='!text-sub-02'>
            {!scorecard && currentQuestion?.['q']}
            {scorecard && <span className='text-gray-80'>Scorecard</span>}
          </TextCard>

          {!scorecard &&
            currentQuestion?.['c']?.map((val: string, index: number) => {
              return (
                <Fragment key={index}>
                  <div
                    className={`group mb-[.8rem] flex cursor-pointer items-start justify-start gap-[1.2rem] rounded-[.8rem] p-[.8rem]  text-gray-80 text-body-02 hover:bg-primary-05 hover:text-primary-60  ${!isSubmitted
                      ? selectedIndex === index && cardVariant['primary']
                      : isSubmitted && selectedIndex === index
                        ? selectedIndex === currentQuestion?.['a']
                          ? cardVariant['dark-green']
                          : selectedIndex !== currentQuestion?.['a']
                            ? cardVariant['red']
                            : ''
                        : index === currentQuestion?.['a'] && cardVariant['green']
                      }
                  
            `}
                    onClick={() => {
                      if (selectedIndex !== undefined) {
                        return;
                      } else {
                        setSelectedIndex(index);
                        setIsSubmitted(true);
                        index === currentQuestion?.['a']
                          ? (setAnsIsCorrect(true), setCorrect(correct + 1))
                          : (setAnsIsCorrect(false), setIncorrect(incorrect + 1));
                        setShowSubmitBtn(false);

                        const countdownInterval = startTimer();

                        setTimeout(() => {
                          clearInterval(countdownInterval);
                          handleNext();
                        }, timerValue * 1000);
                      }
                    }}
                  >
                    <div
                      className={` text-gray-60 text-body-03 group-hover:bg-primary-20 group-hover:text-primary-90 ${!isSubmitted
                        ? selectedIndex === index && alphaCardVariant['primary']
                        : isSubmitted && selectedIndex === index
                          ? selectedIndex === currentQuestion?.['a']
                            ? alphaCardVariant['dark-green']
                            : selectedIndex !== currentQuestion?.['a']
                              ? alphaCardVariant['red']
                              : ''
                          : index === currentQuestion?.['a'] && alphaCardVariant['green']
                        } flex h-[2rem] w-[2rem] items-center justify-center rounded-[.4rem] bg-gray-10 `}
                    >
                      {alphabet[index]}
                    </div>
                    {val}
                  </div>
                </Fragment>
              );
            })}
          {scorecard && (
            <div className='flex flex-col p-2'>
              <div className='text-gray-80 text-body-01 m-2'>
                <span>Total Questions Attempted</span>
              </div>
              <div className='text-gray-80 text-heading-05 m-2'>
                <span>{data?.length} Questions</span>
              </div>
              <div className='m-2 flex'>
                <span className={`w-[20%] h-[2rem]  rounded-lg bg-green-60 mr-2`}></span>
                <span className={`w-[20%] h-[2rem]  rounded-lg bg-orange-60 mr-2`}></span>
                <span className={`w-[40%] h-[2rem]  rounded-lg bg-red-60`}></span>
              </div>
              <div className='flex m-6'>
                <div className='flex mx-6'>
                  <div className='bg-green-60 rounded-full w-[2.4rem] h-[2.4rem] mx-2'>
                    <Check width={24} />
                  </div>
                  <p className='text-gray-40 text-body-03'>
                    <span className='text-gray-80 text-body-02 mr-2'>{correct}</span>(Correct)
                  </p>
                </div>
                <div className='flex mx-6'>
                  <div className='bg-orange-60 rounded-full w-[2.4rem] h-[2.4rem] mx-2'>
                    <Check width={24} />
                  </div>
                  <p className='text-gray-40 text-body-03'>
                    <span className='text-gray-80 text-body-02 mr-2'>
                      {data?.length - correct - incorrect}
                    </span>
                    (Skipped)
                  </p>
                </div>
                <div className='flex mx-6'>
                  <div className='bg-red-60 rounded-full w-[2.4rem] h-[2.4rem] mx-2'>
                    <Check width={24} />
                  </div>
                  <p className='text-gray-40 text-body-03'>
                    <span className='text-gray-80 text-body-02 mr-2'>{incorrect}</span>(Incorrect)
                  </p>
                </div>
              </div>
            </div>
          )}

          {ansIsCorrect === false ? (
            <div
              className={` mt-[2.4rem] w-full rounded-[.8rem] border border-red-40 bg-red-10 p-[1.6rem]`}
            >
              <p className={`text-red-60 text-sub-02`}>Wrong answer</p>
              <p className={`text-red-100 text-body-02`}>
                Correct answer is {alphabet[currentQuestion?.['a']]}, "{currentQuestion?.['e']}"
              </p>
            </div>
          ) : ansIsCorrect === true ? (
            <div
              className={` mt-[2.4rem] w-full rounded-[.8rem] border border-green-40 bg-green-10 p-[1.6rem]`}
            >
              <p className={`text-green-60 text-sub-02`}>Correct answer</p>
              <p className={`text-green-100 text-body-02`}>
                Your answer is Correct, "{currentQuestion?.['e']}"
              </p>
            </div>
          ) : (
            <></>
          )}

          {!scorecard && (
            <div className='mt-[2.4rem]'>
              {isSubmitted ? (
                <Button size='medium' variant={'ghost'} className='mt-[.8rem]' onClick={handleNext}>
                  Next question ({timerValue}s)
                </Button>
              ) : (
                <Button size='medium' variant={'ghost'} className='mt-[.8rem]' onClick={handleNext}>
                  Skip this question
                </Button>
              )}
            </div>
          )}
          {scorecard && (
            <div className='mt-[2.4rem]'>
              <Button
                size='medium'
                variant={'filled'}
                className='mt-[.8rem]'
                onClick={() => {
                  setScorecard(false);
                  setCurrentQuestionIndex(0);
                }}
              >
                Try Again
              </Button>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

const cardVariant = {
  green: 'bg-green-10 text-green-70 hover:!text-green-70 hover:!bg-green-10',
  red: 'bg-red-10 text-red-70 hover:!text-red-70 hover:!bg-red-10',
  primary: '!bg-primary-70 text-white hover:!bg-primary-70 hover:!text-white',
  'dark-green': 'bg-green-50 text-white hover:!text-white hover:!bg-green-50',
};

const alphaCardVariant = {
  primary: '!bg-primary-50 text-white group-hover:!bg-purple-50 group-hover:!text-white',
  red: 'bg-red-30 text-red-80 group-hover:!bg-red-30 group-hover:!text-red-80',
  green: 'bg-green-30 text-green-80 group-hover:!bg-green-30 group-hover:!text-green-80',
  'dark-green': 'bg-green-70 text-white group-hover:!bg-green-70 group-hover:!text-white',
};
