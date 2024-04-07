import { Download } from '@/assets/icons';
import html2canvas from 'html2canvas';
import mermaid from 'mermaid';
import React, { useEffect, useRef, useState } from 'react';
//import { ZoomPanPinch } from 'react-zoom-pan-pinch';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

mermaid.initialize({ startOnLoad: true });
const Mermaid: React.FC<{ chart: string }> = ({ chart }) => {
  useEffect(() => {
    mermaid.contentLoaded();
    const myDiv = document.getElementById('mermaid') as HTMLElement;
    myDiv.removeAttribute('data-processed');
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div
      id='mermaid'
      className={`mermaid w-[60vw] h-[50vh] flex justify-center `}
      dangerouslySetInnerHTML={{ __html: chart }}
    ></div>
  );
};

interface MProps {
  data: string | any;
}
export const MermaidChart = (props: MProps) => {
  const { data } = props;

  const divRef = useRef<HTMLDivElement | null>(null);
  const [imageData, setImageData] = useState<string | null>(null);

  // useEffect(() => {
  //   handleExport();
  // }, [data]);

  const handleExport = async () => {
    if (!divRef.current) {
      console.log('divRef.current is null or undefined');
      return;
    }

    try {
      const canvas = await html2canvas(divRef.current, { scale: 4 });
      const image = canvas.toDataURL('image/png');
      return image; // Return the image data as a promise result
    } catch (error) {
      console.error('Error during image generation:', error);
      throw error;
    }
  };

  const handleDownload = async () => {
    try {
      const imageData = await handleExport(); // Wait for image data to be generated

      if (imageData) {
        const link = document.createElement('a');
        link.download = 'exported_image.png';
        link.href = imageData;
        link.click();
      }
    } catch (error) {
      console.error('Error during download:', error);
    }
  };

  return (
    <div className='App'>
      <TransformWrapper initialScale={1} initialPositionX={-100} initialPositionY={-100}>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <TransformComponent>
              <div ref={divRef}>
                <Mermaid chart={`${data}`} />
              </div>
            </TransformComponent>

            <div className='tools flex justify-center'>
              <button
                className='w-12 h-12 border border-gray-60 m-2 rounded-lg text-2xl flex justify-center items-center'
                onClick={() => zoomIn()}
              >
                +
              </button>
              <button
                className='w-12 h-12 border border-gray-60 m-2 rounded-lg text-2xl flex justify-center items-center'
                onClick={() => zoomOut()}
              >
                -
              </button>
              <button
                className='w-12 h-12 border border-gray-60 m-2 rounded-lg text-2xl flex justify-center items-center'
                onClick={() => resetTransform()}
              >
                x
              </button>
              <button
                className='w-12 h-12 border border-gray-60 m-2 rounded-lg flex justify-center items-center'
                onClick={handleDownload}
              >
                <Download width={14} />
              </button>
            </div>
          </React.Fragment>
        )}
      </TransformWrapper>

      {/* <button onClick={handleDownload}>Download Image</button> */}
    </div>
  );
};
