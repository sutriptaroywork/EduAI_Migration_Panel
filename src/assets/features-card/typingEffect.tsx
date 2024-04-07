// import { useEffect, useRef, useState } from "react";


// function scrollToBottom() {
//   const chatContainer = document.getElementById('chatContainer');
//   if (chatContainer) {
//     chatContainer.scrollTop = chatContainer.scrollHeight;
//   }
// }

// export function useTypingEffect(textToType: string, interKeyStrokeDurationInMs: number) {
//   const [currentPosition, setCurrentPosition] = useState<number>(0);
//   const currentPositionRef = useRef<number>(0);
//   const [audio] = useState(new Audio('/sounds/typing.wav'));

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       audio.play();
//       scrollToBottom()
//       setCurrentPosition((value) => value + 1);
//       currentPositionRef.current += 1;

//       if (currentPositionRef.current > textToType.length) {
//         clearInterval(intervalId);
//         audio.pause(); // Stop the audio playback
//         audio.currentTime = 0;
//       }
//     }, interKeyStrokeDurationInMs);
//     return () => {
//       clearInterval(intervalId);
//       currentPositionRef.current = 0;
//       setCurrentPosition(0);
//     };
//   }, [interKeyStrokeDurationInMs, textToType]);

//   return textToType.substring(0, currentPosition);
// }

// interface TypingEffectProps {
//   text: string;
//   interKeyStrokeDurationInMs: number;
// }

// const TypingEffect: React.FC<TypingEffectProps> = ({ text, interKeyStrokeDurationInMs }) => {
//   const typingEffectText = useTypingEffect(text, interKeyStrokeDurationInMs);

//   return <span>{typingEffectText}</span>;
// };

// export default TypingEffect;

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
function scrollToBottom() {
  const chatContainer = document.getElementById('chatContainer');
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
}

export function useTypingEffect(textToType: string, interKeyStrokeDurationInMs: number) {
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const currentPositionRef = useRef<number>(0);
  const [audio] = useState(new Audio('/sounds/typing.wav'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      audio.play();
      scrollToBottom()
      setCurrentPosition((value) => value + 1);
      currentPositionRef.current += 1;

      if (currentPositionRef.current > textToType.length) {
        clearInterval(intervalId);
        audio.pause(); // Stop the audio playback
        audio.currentTime = 0;
      }
    }, interKeyStrokeDurationInMs);
    return () => {
      clearInterval(intervalId);
      currentPositionRef.current = 0;
      setCurrentPosition(0);
    };
  }, [interKeyStrokeDurationInMs, textToType]);

  return textToType.substring(0, currentPosition);
}

interface TypingEffectProps {
  text: string;
  interKeyStrokeDurationInMs: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, interKeyStrokeDurationInMs }) => {
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
  const typingEffectText = useTypingEffect(text, interKeyStrokeDurationInMs);

  console.log(text, "texttttttt")
  return (
    <div>
      <div className="text-black ml-4">
        {/* Render the ReactMarkdown component within the TypingEffect */}
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{typingEffectText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default TypingEffect;
