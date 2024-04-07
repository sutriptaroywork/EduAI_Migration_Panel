import TypingEffect from '@/assets/features-card/typingEffect';
import { ComposeFilled } from '@/assets/icons';
import useAuthQuery from '@/hooks/use-auth-query';
import { useClickOutside } from '@/hooks/use-click-outside';
import { API_URL, SHIKSHA_BASE_URL } from '@/services/shiksha-ml';
import { Badge, Button } from '@/ui';
import { sendData } from '@/utils/send-data';
import { Fragment, ReactNode, SetStateAction, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { UploadingTransition } from '../transitions/uploading';

interface CVprops {
  assignedCode: string;
  isResponseSuccessfull: boolean;
  expand: boolean;
}

// "K8KhRBLJzR8"
export function ChatView(props: CVprops) {
  let { assignedCode, isResponseSuccessfull, expand } = props;
  const QRef = useClickOutside(() => setShowDropdown(false));
  const [text, setText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  //const [data, setData] = useState();
  const [isTextSelected, setIsTextSelected] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);

  const [isAnswerGenerated, setIsAnswerGenerated] = useState(false);
  const [regenerateCounter, setRegenerateCounter] = useState(0);
  const [previousQuestion, setPreviousQuestion] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [tempPreviousQuestion, setTempPreviousQuestion] = useState('');
  const [preShownText, setPreShownText] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  // const [postShownText,setPostShownText] = useState([]);
  const [autoScroll, setAutoScroll] = useState(true);

  console.log('iissResponsible', isResponseSuccessfull);

  const { data, isLoading } = useAuthQuery<any>({
    url: SHIKSHA_BASE_URL + API_URL.CHAT_QUESTIONS + `/${assignedCode}`,
    queryKey: ['chatq', `${assignedCode}`],
  });


  useEffect(() => {
    if (!isLoading && data) {
      setPreShownText(data.slice(-3));
      setGeneratingAnswer(false);
      setIsAnswerGenerated(false);
      setMessages([]);
    }
  }, [assignedCode, data, isLoading, isResponseSuccessfull]);

  function handleBadgeClick(val: string) {
    setText(val);
  }

  const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {

    if (e.target.value.length <= 250) {
      setText(e.target.value);
    }
    if (e.target.value !== '') {
      setShowDropdown(false);
    }
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  // function scrollToBottom() {
  //   const chatContainer = document.getElementById('chatContainer');
  //   if (chatContainer) {
  //     chatContainer.scrollTop = chatContainer.scrollHeight;
  //   }
  // }
  async function handleSend() {

    setIsTextSelected(true);
    setIsAnswerGenerated(true);
    setGeneratingAnswer(true);
    const newMessage = { text, isUser: true };
    setMessages([newMessage, ...messages]);
    // scrollToBottom();

    // if (!assignedCode) {
    //   assignedCode = localStorage.getItem('assignedCode') || '';
    // }
    setCurrentQuestion(text);
    const queryText = text;
    setText('');
    const res = await sendData({
      url: SHIKSHA_BASE_URL + API_URL.CHAT_BOT + '/' + assignedCode,
      method: 'POST',
      showToast: false,
      body: { query: queryText },
    });

    if (res) {
      setGeneratingAnswer(false);
    }

    const chatHistory = res?.chatHistory || [];
    console.log(chatHistory, "chatHistory")

    const newMessagesWithChatHistory = chatHistory.map(
      (message: { content: any; role: string }) => ({
        text: message.content.includes('>> <<PROMPT:')
          ? message.content.split('>> <<PROMPT:')[1].split('>>')[0]
          : message.content,
        isUser: message.role === 'user',
      }),
    );

    setMessages(prevMessages => [...prevMessages.slice(0, 1), ...newMessagesWithChatHistory]);

    // Reset the input field
    // Use queryText instead of text
    // scrollToBottom();
  }



  // useEffect(() => {
  //   if (tempPreviousQuestion !== '') {
  //     setText(tempPreviousQuestion); // Set the text state to the temporary previous question
  //     handleSend();
  //     setRegenerateCounter(0);
  //   }
  // }, [tempPreviousQuestion]);

  // useEffect(() => {
  //   // Scroll to the bottom when component mounts or messages change
  //   setInterval(() => {
  //     scrollToBottom();
  //   }, 500)
  // }, [messages]);


  const mdContent = `
# Dummy Markdown Content
 
## Introduction
 
Welcome to this dummy Markdown document. Here, you'll find various formatting elements commonly used in Markdown files.
 
### Basics
 
Let's start with some basics:
 
- Bullet Point 1
- Bullet Point 2
- Bullet Point 3
 
1. Numbered Item 1
2. Numbered Item 2
3. Numbered Item 3
 
### Text Formatting
 
You can add emphasis to your text using **bold** and *italic* styles.
 
### Code
 
Inline code: \`const example = "Hello, World!";\`
 
Code block:
 
\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
\`\`\`
`;
  console.log(messages)
  return (
    <div className={`relative h-full ${expand ? 'm-auto w-[60vw]' : ''}`}>
      <div className='flex flex-col grow'>
        <div id='chatContainer' className=' my-4 min-h-[50vh] h-[60vh] overflow-y-scroll'>
          {isTextSelected && (
            <div className='w-full'>
              {messages.slice(generatingAnswer ? 2 : 1).map((message, index) => (
                <ChatCard
                  key={index}
                  // variant={message.isUser ? 'purple' : 'gray'}
                  // className={`relative my-4  ${message.isUser ? 'ml-auto mr-1 max-w-[45rem]' : `  ${expand ? 'ml-4 ' : 'ml-1 '}`
                  //   } ${expand ? 'max-w-[82rem]' : ''}`}
                  variant={message.isUser ? 'purple' : 'gray'}
                  // className={`relative my-4 ${message.isUser
                  //   ? 'ml-auto mr-1 max-w-[45rem]'
                  //   : `ml-1 ${expand ? 'ml-4 max-w-[50%]' : 'ml-1 '}`
                  //   }`}
                  // chatbot qsn ans width fixes
                  className={`relative my-4 ${message.isUser && expand ? 'ml-96 max-w-[60rem]' : message.isUser && !expand ? 'ml-20 max-w-[85rem]' : ""}`}
                >
                  {message.isUser ? (
                    message.text
                    // <ReactMarkdown>{mdContent}</ReactMarkdown>

                  ) : index === messages.length - 2 ? (
                    <TypingEffect text={message.text} interKeyStrokeDurationInMs={5} />
                  ) : (
                    // message.text
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{message.text}</ReactMarkdown>

                  )}

                </ChatCard>
              ))}
              {generatingAnswer && (
                <>
                  <ChatCard
                    variant='purple'
                    className={`relative my-4 ml-auto mr-1 ${expand ? 'ml-4' : 'ml-1'} ${expand ? 'max-w-[52rem]' : 'max-w-[28rem]'
                      }`}
                  >
                    {currentQuestion}
                  </ChatCard>
                  <ChatCard
                    variant='gray'
                    className={`relative my-4 ${expand ? 'ml-4' : 'ml-1'} ${expand ? 'max-w-[52rem]' : 'max-w-[28rem]'
                      }`}
                  >
                    <UploadingTransition />
                  </ChatCard>
                </>
              )}
            </div>
          )}
          {/* {messages.length > 0 && (
          <div>
            <button
              className='ml-6 rounded px-2 py-1 text-primary-50 text-reg-body-sm'
              onClick={() => {
                setRegenerateCounter(prevCounter => prevCounter + 1);
                setTempPreviousQuestion(previousQuestion);
                setText(previousQuestion);
              }}
            >
              Regenerate
            </button>
          </div>
        )} */}
        </div>
      </div>
      <div className='absolute bottom-[1.2rem] right-[1.6rem] flex w-full flex-col items-end gap-[.8rem]'>
        {!showDropdown &&
          !isAnswerGenerated &&
          preShownText?.map((val: string, index: number) => {
            return (
              <Fragment key={index}>
                <Badge
                  variant={'purple'}
                  className={`${BadgeStyle} ${val === text && '!bg-primary-50 !text-white'} ${expand ? 'relative right-[2%] max-w-[52rem]' : 'max-w-[28rem]'
                    }`}
                  onClick={() => {
                    handleBadgeClick(val);
                  }}
                >
                  {val}
                </Badge>
              </Fragment>
            );
          })}
        <div className={`relative my-[.8rem] ${expand ? 'w-[60vw] m-auto' : 'w-full'} pl-[3rem]`}>
          <div ref={QRef} className='relative '>
            {data?.length !== 0 && showDropdown && (
              <div className='absolute top-[-30rem] w-[100%] h-[30rem] bg-white border border-gray-300 shadow overflow-y-scroll rounded-lg p-2 '>
                {data?.map((val: string, index: number) => {
                  return (
                    <Fragment key={index}>
                      <div
                        className={` $ relative ${val === text && '!bg-gray-20 !text-white'
                          } w-[98%]  ${expand ? '' : ''}`}
                      >
                        <button
                          onClick={() => {
                            handleBadgeClick(val);
                            setShowDropdown(!showDropdown);
                          }}
                          className='m-2 w-[95%] text-left h-auto text-gray-60 text-body-02 hover:bg-gray-20'
                        >
                          {val}
                        </button>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            )}
            <input
              type='text'
              placeholder='Ask any query'
              value={text}
              className='!p-[.8rem] !pr-[4rem]'
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onClick={handleDropdownToggle} // Show dropdown on click
            />
            <Button
              className='absolute right-[.8rem] top-[1rem] w-max'
              size='small'
              onlyIcon
              disabled={!text}
              onClick={handleSend}
            >
              <ComposeFilled />
            </Button>
          </div>
        </div>
        <p className={`${expand ? 'm-auto' : 'm-auto pl-12'} text-gray-40 text-body-03`}>
          ShikshaAI can help you with any query related to the summary.
        </p>
      </div>
    </div>
  );
}

const BadgeStyle =
  'px-[1.6rem] py-[1.2rem] text-body-02 !text-left  hover:bg-primary-50 hover:text-white cursor-pointer transitions-all duration-300 ease-in-out';

interface ChatCardPRops {
  children: ReactNode;
  className?: string;
  variant?: 'purple' | 'gray';
}
const ChatCard = (props: ChatCardPRops) => {
  const { children, className = '', variant = 'gray' } = props;
  const variants = { gray: 'bg-gray-10 text-gray-80', purple: 'bg-primary-50 text-white' };
  return (
    <div
      className={`${className} ${variants[variant]}  rounded-[.8rem] px-[1.6rem] py-[1.2rem] text-body-02`}
    >
      {children}
    </div>
  );
};
