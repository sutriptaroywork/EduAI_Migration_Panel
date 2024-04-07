//import Mermaid from '@/components/mermaid';
import { API_URL, SHIKSHA_BASE_URL } from '@/services/shiksha-ml';
import { Fragment, useEffect, useState } from 'react';
import { Generating } from '../transitions/generating';
import { MermaidChart } from './statediagram';

interface MermaidProps {
  assignedCode: string | any;
  diagram_level: string;
  query:string;
  dload:boolean;
}

export function Diagram(props: MermaidProps) {
  let { assignedCode, diagram_level,query,dload } = props;
  
  // const { data, isLoading } = useAuthQuery<any>({
  //   url: SHIKSHA_BASE_URL + API_URL.DIAGRAM + `/${assignedCode}` + `/${diagram_level}`+`?query=${query}`,
  //   queryKey: ['diagram', `${assignedCode}`, `${diagram_level}`,`${query}`],
  // });

  const [data,setData] = useState<any>(null);
  const [loading,setLoading] = useState(false);

  async function getDiagram(){
    setLoading(true)
  try {
    const url = SHIKSHA_BASE_URL + API_URL.DIAGRAM + `/${assignedCode}` + `/${diagram_level}`+`?query=${query}`
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    setData(data);
    setLoading(false);
    
  } catch (error) {
    console.error("An error occurred:", error);
    setLoading(false);
  }
}

    useEffect(()=>{
      getDiagram();
      console.log('data?.diagrma',data?.diagram);
    },[assignedCode,diagram_level,query])      

  return (
    <Fragment>
      <div className='text-black'>
        {loading && <Generating/> }
        {data &&
        <div className={`${loading ? 'hidden' : ''}`}>
         <MermaidChart data={data?.diagram} />
         </div>
         }
      </div>
    </Fragment>
  );
}


