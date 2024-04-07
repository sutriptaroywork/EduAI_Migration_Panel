// // // import { ReactNode } from 'react';

// // // interface STProps {
// // //   summaryData: any;
// // // }
// // // export function SummaryText(props: STProps) {
// // //   const { summaryData } = props;
// // //   const formattedData = summaryData?.message?.split('- ');
// // //   formattedData?.shift();

// // //   const handleCopy = async (text: string) => {
// // //     try {
// // //       if (navigator.clipboard) {
// // //         await navigator.clipboard.writeText(text);
// // //       } else {
// // //         // Fallback behavior if clipboard API is not supported
// // //         const textArea = document.createElement('textarea');
// // //         textArea.value = text;
// // //         document.body.appendChild(textArea);
// // //         textArea.select();
// // //         document.execCommand('copy');
// // //         document.body.removeChild(textArea);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error copying to clipboard:', error);
// // //     }
// // //   };
// // //   const dynamicStyle = {
// // //     color: 'red',
// // //     fontSize: '16px',
// // //     fontWeight: 'bold',
// // //   };

// // //   const htmlContent = `<p style="color: ${dynamicStyle.color}; font-size: ${dynamicStyle.fontSize}; font-weight: ${dynamicStyle.fontWeight};">This is styled text.</p>`;

// // //   return (
// // //     // <Fragment>
// // //     //   {formattedData?.map((val: any, index: number) => {
// // //     //     return (
// // //     //       <Fragment key={index}>
// // //     //         <TextCard className='relative'>
// // //     //           <div className='flex items-start justify-start gap-[.8rem] '>
// // //     //             <div className=''>
// // //     //               <BulletLogo className=' h-[2rem] w-[1.2rem]' />
// // //     //             </div>
// // //     //             <p>{val}</p>
// // //     //           </div>
// // //     //           <Button
// // //     //             variant={'ghost-light'}
// // //     //             className='invisible w-max !p-[.8rem] group-hover:visible '
// // //     //             size='small'
// // //     //             onClick={() => handleCopy(val)}
// // //     //           >
// // //     //             <CopyIcon />
// // //     //           </Button>
// // //     //         </TextCard>
// // //     //       </Fragment>
// // //     //     );
// // //     //   })}
// // //     // </Fragment>

// // //     <>

// // //       <div>
// // //         <h1>Styled Text</h1>
// // //         <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export const TextCard = (props: {
// // //   children: ReactNode;
// // //   variant?: 'with-hover' | 'without-hover';
// // //   className?: string;
// // // }) => {
// // //   const { children, variant = 'with-hover', className = '' } = props;
// // //   return (
// // //     <div
// // //       className={`group  flex h-full w-full items-center  gap-[.8rem] rounded-[.4rem] bg-gray-10 ${variant === 'with-hover' ? 'hover:bg-gray-20' : ''
// // //         } p-[1.6rem] text-gray-80 text-body-02 ${className} `}
// // //     >
// // //       {children}
// // //     </div>
// // //   );
// // // };
// // import { useState } from 'react';

// // import ReactMarkdown from 'react-markdown';

// // export function SummaryText() {


// //   const [selectedWord, setSelectedWord] = useState('');
// //   const [wordDetails, setWordDetails] = useState<WordDetails | null>(null);

// //   // const handleDoubleClick = async () => {
// //   //   const selection = window.getSelection();

// //   //   if (selection) {
// //   //     const selectedText = selection.toString().trim();
// //   //     const words = selectedText.split(/\s+/);
// //   //     const firstWord = words[0];
// //   //     setSelectedWord(firstWord);

// //   //     try {
// //   //       const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`);
// //   //       console.log(response.data, "data");
// //   //       const mean = response.data
// //   //       setWordDetails(response.data);
// //   //       console.log(mean[0].meanings, "datassssss");
// //   //       console.log(wordDetails, "datassssss");

// //   //     } catch (error) {
// //   //       console.error('Error:', error);
// //   //     }
// //   //   }
// //   // };
// //   const mdContent = `
// // # Dummy Markdown Content

// // ## Introduction

// // Welcome to this dummy Markdown document. Here, you'll find various formatting elements commonly used in Markdown files.

// // ### Basics

// // Let's start with some basics:

// // - Bullet Point 1
// // - Bullet Point 2
// // - Bullet Point 3

// // 1. Numbered Item 1
// // 2. Numbered Item 2
// // 3. Numbered Item 3

// // ### Text Formatting

// // You can add emphasis to your text using **bold** and *italic* styles.

// // ### Code

// // Inline code: \`const example = "Hello, World!";\`

// // Code block:

// // \`\`\`javascript
// // function greet(name) {
// //   console.log(\`Hello, \${name}!\`);
// // }
// // \`\`\`
// // `;


// //   return (
// //     <div>

// //       <style jsx global>{`
// //   /* Custom styles for Markdown content */
// //   :root {
// //     --markdown-heading1-size: 32px;
// //     --markdown-heading2-size: 25px;
// //     --markdown-heading3-size: 20px;
// //     --markdown-list-padding: 20px;
// //     --markdown-bold-color: #0070f3;
// //     --markdown-italic-color: #e60000;
// //     --markdown-code-background: #f6f8fa;
// //     --markdown-code-border: 5px solid #eaecef;
// //     --markdown-code-padding: 16px;
// //     --markdown-code-line-height: 5.4; /* Adjust line height for code */
// //     --markdown-code-margin-left: 2rem; /* Adjust margin-left for code block */
// //   }

// //   h1 {
// //     font-size: var(--markdown-heading1-size);
// //   }

// //   h2 {
// //     font-size: var(--markdown-heading2-size);
// //   }

// //   h3 {
// //     font-size: var(--markdown-heading3-size);
// //   }


// //   li {
// //     margin-bottom: 8px;
// //     margin-left:20px
// //   }
// //   ul{
// //     list-style-type:disc;

// //   }
// //   ol{
// //     list-style-type:decimal;


// //   }

// //   strong {
// //     color: var(--markdown-bold-color);
// //   }

// //   em {
// //     color: var(--markdown-italic-color);
// //   }

// //   code {
// //     background-color: var(--markdown-code-background);
// //     border: var(--markdown-code-border);
// //     padding: var(--markdown-code-padding);
// //     font-family: 'Courier New', monospace;
// //     white-space: pre-wrap; /* Preserve line breaks */
// //     line-height: var(--markdown-code-line-height);
// //     margin-left: var(--markdown-code-margin-left); /* Adjust margin-left for code block */
// //   }
// // `}</style>
// //       <div className="text-black ml-16" /*onDoubleClick={handleDoubleClick}*/>
// //         <ReactMarkdown>{mdContent}</ReactMarkdown>
// //         {/* <p>Selected Word: {selectedWord}</p>
// //         {wordDetails && (
// //           <div>
// //             <p>Part of Speech: {wordDetails.partOfSpeech}</p>
// //             <p>Definitions:</p>
// //             <ul>
// //               {wordDetails.definitions.map((definition, index) => (
// //                 <li key={index}>{definition}</li>
// //               ))}
// //             </ul>
// //             <p>Synonyms: {wordDetails.synonyms.join(', ')}</p>
// //             <p>Antonyms: {wordDetails.antonyms.join(', ')}</p>
// //           </div>
// //         )}    */}

// //       </div>
// //       {/* <ReactMarkdown className="text-black ml-16" onDoubleClick={handleDoubleClick}>{mdContent}</ReactMarkdown> */}
// //     </div>
// //   );
// // }

// // export default function Page() {
// //   return (
// //     <div>
// //       <h1>Your Next.js Page</h1>
// //       <SummaryText />
// //     </div>
// //   );
// // }


// import { CopyIcon } from '@/assets/icons';
// import { BulletLogo } from '@/assets/icons/bulletLogo';
// import { Button } from '@/ui';
// import { Fragment, ReactNode } from 'react';

// interface STProps {
//   summaryData: any;
// }
// export function SummaryText(props: STProps) {
//   const { summaryData } = props;
//   const formattedData = summaryData?.message?.split('- ');
//   formattedData?.shift();

//   const handleCopy = async (text: string) => {
//     try {
//       if (navigator.clipboard) {
//         await navigator.clipboard.writeText(text);
//       } else {
//         // Fallback behavior if clipboard API is not supported
//         const textArea = document.createElement('textarea');
//         textArea.value = text;
//         document.body.appendChild(textArea);
//         textArea.select();
//         document.execCommand('copy');
//         document.body.removeChild(textArea);
//       }
//     } catch (error) {
//       console.error('Error copying to clipboard:', error);
//     }
//   };

//   return (
//     <Fragment>
//       {formattedData?.map((val: any, index: number) => {
//         return (
//           <Fragment key={index}>
//             <TextCard className='relative'>
//               <div className='flex items-start justify-start gap-[.8rem] '>
//                 <div className=''>
//                   <BulletLogo className=' h-[2rem] w-[1.2rem]' />
//                 </div>
//                 <p>{val}</p>
//               </div>
//               <Button
//                 variant={'ghost-light'}
//                 className='invisible w-max !p-[.8rem] group-hover:visible '
//                 size='small'
//                 onClick={() => handleCopy(val)}
//               >
//                 <CopyIcon />
//               </Button>
//             </TextCard>
//           </Fragment>
//         );
//       })}
//     </Fragment>
//   );
// }

// export const TextCard = (props: {
//   children: ReactNode;
//   variant?: 'with-hover' | 'without-hover';
//   className?: string;
// }) => {
//   const { children, variant = 'with-hover', className = '' } = props;
//   return (
//     <div
//       className={`group  flex h-full w-full items-center  gap-[.8rem] rounded-[.4rem] bg-gray-10 ${variant === 'with-hover' ? 'hover:bg-gray-20' : ''
//         } p-[1.6rem] text-gray-80 text-body-02 ${className} `}
//     >
//       {children}
//     </div>
//   );
// };

import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface STProps {
  summaryData: any;
}
export function SummaryText(props: STProps) {
  const { summaryData } = props;


  // const [selectedWord, setSelectedWord] = useState('');
  // const [wordDetails, setWordDetails] = useState<WordDetails | null>(null);
  return (
    <div>

      <div className="text-black ml-16" /*onDoubleClick={handleDoubleClick}*/>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{summaryData.message}</ReactMarkdown>


      </div>
      {/* <ReactMarkdown className="text-black ml-16" onDoubleClick={handleDoubleClick}>{mdContent}</ReactMarkdown> */}
    </div>
  );
}

// export default function TextCard() {
//   return (
//     <div>
//       <SummaryText summaryData={undefined} />
//     </div>
//   );
// }
export const TextCard = (props: {
  children: ReactNode;
  variant?: 'with-hover' | 'without-hover';
  className?: string;
}) => {
  const { children, variant = 'with-hover', className = '' } = props;
  return (
    <div
      className={`group  flex h-full w-full items-center  gap-[.8rem] rounded-[.4rem] bg-gray-10 ${variant === 'with-hover' ? 'hover:bg-gray-20' : ''
        } p-[1.6rem] text-gray-80 text-body-02 ${className} `}
    >
      {children}
    </div>
  );
};