// import { useEffect, useRef } from 'react';

// const MermaidDiagram = () => {
//   const mermaidRef = useRef < HTMLDivElement > null;

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
//     script.async = true;

//     script.onload = () => {
//       if (typeof window !== 'undefined') {
//         window.mermaid.initialize({ startOnLoad: true });
//         window.mermaid.init(undefined, mermaidRef.current);
//       }
//     };

//     if (mermaidRef.current) {
//       mermaidRef.current.appendChild(script);
//     }

//     return () => {
//       // Clean up the script when the component is unmounted
//       if (mermaidRef.current) {
//         mermaidRef.current.removeChild(script);
//       }
//     };
//   }, []);

//   return (
//     <div className='mermaid' ref={mermaidRef}>
//       {`sequenceDiagram
//           // Your mermaid diagram code here`}
//     </div>
//   );
// };

// export default MermaidDiagram;
